import { Injectable } from '@angular/core';
import { Item } from '../models/item-models';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private _tableData: Item[]
  private _tags: any[];
  constructor() {
    this._tableData = [
      {
        id: "defaultId",
        title: "Chair",
        note: "Normal chair",
        price: 5000000,
        quanlity: 5,
        img:"https://mdbootstrap.com/img/new/standard/nature/184.jpg",

        tag: [
          { id: 1, name: 'test1' },

        ],
        user: {},
        dateCreated: Date.now(),
        dateUpdated: 0,
      },
      {
        id: "defaultId",
        title: "Chair",
        note: "Normal chair",
        price: 5000000,
        quanlity: 5,
        img:"https://mdbootstrap.com/img/new/standard/nature/184.jpg",
        
        tag: [
          { id: 2, name: 'test2' },
        ],
        user: {},
        dateCreated: Date.now(),
        dateUpdated: 0,
      },
      {
        id: "defaultId",
        title: "Chair",
        note: "Normal chair",
        price: 5000000,
        quanlity: 5,
        img:"https://mdbootstrap.com/img/new/standard/nature/184.jpg",
        tag: [
          { id: 3, name: 'test3' },
          { id: 1, name: 'test1' },
          { id: 2, name: 'test2' },
        ],
        user: {},
        dateCreated: Date.now(),
        dateUpdated: 0,
      },
    ]


    this._tags = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
      { id: 4, name: 'test4' },
    ];
  }

  getDataByTag(value) {
    let temp = [];
    for (let i = 0; i < this._tableData.length; i++) {
      for (let j = 0; j < this._tableData[i].tag.length; j++) {
        if (this._tableData[i].tag[j].id == value) {
          temp.push(this._tableData[i]);
        }
      }
    }
    return temp;
  }

  getTableData() {
    return this._tableData;
  }

  getTag() {
    return this._tags;
  }

  getTagById(id){
    for (let i = 0; i < this._tags.length; i++) {
      if(this._tags[i].id==id){
        return this._tags[i]
      }
    }
  }




}
