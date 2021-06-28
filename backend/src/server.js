const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require('cors');
const config = require('./config')
app.use(body.json());
app.use(cors());

const admin = require('firebase-admin');
const serviceAccount = require('../key.json');

const databaseURL = "https://quanly-92f96.firebaseio.com/"
function init() {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: databaseURL
        });
        console.log("database is connected!");
    } catch (err) {
        console.log("connect to server failed!");
    }
    try {
        app.listen(config.PORT, config.HOST, () => {
            console.log(`server is running on ${config.HOST}:${config.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}
init();


// app.get("/items", (req, res) => {
//     (async () => {
//         let data = [];
//         let snapshot = await admin.firestore().collection('shop').get();
//         snapshot.forEach(doc => {
//             data.push(doc.data())
//         });
//         res.send(data);
//     })();
// })


app.post("/item-create", (req, res) => {
    let { id, title, note, price, quanlity, img, tag, user, dateCreated, dateUpdated } = req.body;
    let data = {
        id: id,
        title: title,
        price: price,
        note: note,
        quanlity: quanlity,
        img: img,
        tag: tag,
        user: user,
        dateCreated: dateCreated,
        dateUpdated: dateUpdated
    };

    (async () => {
        try {
            await admin.firestore().collection("tableData").doc("user").collection(data.user).doc(data.id).create(data);
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).send();
        }

    })();
})


app.post("/tag-create", (req, res) => {
    let { id, name, user } = req.body;
    let data = {
        id: id,
        name: name,
        user: user
    };

    (async () => {
        try {
            await admin.firestore().collection("tag").doc("user").collection(data.user).doc(data.id).create(data);
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).send();
        }
    })();
})


app.delete("/item-delete", (req, res) => {
    let { id, user } = req.query;

    (async () => {
        try {
            await admin.firestore().collection("tableData").doc("user").collection(user).doc(id).delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).send();
        }
    })();

})
app.put("/item-update", (req, res) => {
    let { id, title, note, price, quanlity, img, tag, user, dateCreated, dateUpdated } = req.body;
    let data = {
        id: id,
        title: title,
        price: price,
        note: note,
        quanlity: quanlity,
        img: img,
        tag: tag,
        user: user,
        dateCreated: dateCreated,
        dateUpdated: dateUpdated
    };

    (async () => {
        try {

            await admin.firestore().collection("tableData").doc("user").collection(data.user).doc(data.id).update(data);
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).send();
        }
    })();


})