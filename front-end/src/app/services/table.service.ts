import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { observable, Observable } from 'rxjs';
import { Item } from '../models/item-models';

import { finalize, observeOn } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Tag } from '../models/tag-models';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public List: Observable<Item[]>;
  public tagList: Observable<any[]>;
  private _tableData: Item[]
  private _tags: any[];
  constructor(private authSer: AuthService, private fireStore: AngularFirestore, private fireData: AngularFireStorage, private http: HttpClient) {
    this._tags = [];
    this.getData();

  }
  
  getData() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.List = this.fireStore.collection("tableData").doc("user").collection(user.uid).valueChanges();
    this.List.subscribe(data => {
      this._tableData = data;
    })
    this.tagList = this.fireStore.collection("tag").doc("user").collection(user.uid).valueChanges();
    this.tagList.subscribe(data => {
      this._tags = data;
    })

  }
  async addTag(value) {
    let user = JSON.parse(localStorage.getItem("user"));
    let data = {
      id: this.fireStore.createId(),
      name: value,
      user: user.uid
    }

    await this.http.post(environment.enpoint + "tag-create", data).toPromise();

  }
  async insertData(data: object) {
    let user = JSON.parse(localStorage.getItem("user"));
    let item: Item = {
      ...data,
      id: this.fireStore.createId(),
      img: this.fb,
      dateCreated: Date.now(),
      dateUpdated: 0,
      user: user.uid,
    };

    await this.http.post(environment.enpoint + "item-create", item).toPromise();
  }
  async updateData(value: object) {
    let item: Item = {
      ...value,
      dateUpdated: Date.now(),
    };
    await this.http.put(environment.enpoint +"item-update",item).toPromise();
  }
  async deleteData(id: string) {
    let user = JSON.parse(localStorage.getItem("user"));
    let url = `item-delete?id=${id}&user=${user.uid}`;
    await this.http.delete(environment.enpoint + url).toPromise();
  }
  selectedFile: File = null;
  fb: any;
  downloadURL: Observable<string>;
  public changeImgURL(event) {
    let file = event.target.files[0];
    let n = file.name;

    let filePath = `RoomsImages/${n}`;
    let fileRef = this.fireData.ref(filePath);
    let task = this.fireData.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.fb = url;

            }
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          // console.log(url);
        }
      });

  }

  async getDataByTag(value) {
    let temp = [];

    for (let i = 0; i < this._tableData.length; i++) {
      for (let j = 0; j < this._tableData[i].tag.length; j++) {
        if (this._tableData[i].tag[j].id == value) {
          temp.push(this._tableData[i]);
        }
      }
    }

    return await temp;
  }

  getTableData() {
    return this.List;

  }

  getTag() {
    return this.tagList;
  }

  getTagById(id) {
    for (let i = 0; i < this._tags.length; i++) {
      if (this._tags[i].id == id) {
        return this._tags[i]
      }
    }
  }




}


