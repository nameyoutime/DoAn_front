import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item-models';
import { Tag } from 'src/app/models/tag-models';
import { TableService } from 'src/app/services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TagDialogComponent } from '../../dialogs/tag-dialog/tag-dialog.component'
import { DetailDialogComponent } from '../../dialogs/detail-dialog/detail-dialog.component'

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  @Input() data;
  @Input() tagsData;
  @ViewChild('dialogMatSelect') dialogMatSelect;
  term: string;
  collection: any;
  tags: any;
  p: number = 1;
  numberOfItem: number = 10;
  selectedTag: number;
  val: string;
  updateFrm: any;
  currentTag: any[];
  img: any;
  imgChanged: boolean;
  constructor(public tableSer: TableService, private dialog: MatDialog, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.imgChanged = false;
    this.collection = this.data;
    this.tags = this.tagsData;
  }

  openTagDialog() {
    this.dialog.open(TagDialogComponent)
  }

  openDetailDialog(data) {
    this.dialog.open(DetailDialogComponent, {
      data: data
    })
  }
  check(val) {
    if (val == null) {
      this.collection = this.data;
    } else {
      let data = this.tableSer.getDataByTag(val);
      this.collection = data;
    }
  }
  valChange(val) {
    this.val = val;
  }
  addUpdateTag() {
    let temp = this.tableSer.getTagById(this.val);
    this.currentTag.push(temp);
  }
  removeUpdateTag(index) {
    let temp = this.currentTag.slice();
    temp.splice(index, 1);
    this.currentTag = temp;

  }




  openUpdateDialog(item) {
    this.currentTag = item.tag.slice();
    this.dialog.open(this.dialogMatSelect, {
      width: '400px'
    });
    this.updateFrm = this.fb.group({
      title: new FormControl(item.title, Validators.required),
      note: new FormControl(item.note, Validators.required),
      price: new FormControl(item.price, Validators.required),
      quanlity: new FormControl(item.quanlity, Validators.required),
      tag: new FormControl(null, Validators.required),
      img: new FormControl(item.img, Validators.required),
      id: new FormControl(item.id),
      user: new FormControl(item.user),
      dateCreated: new FormControl(item.dateCreated),

    })
  }
  onFileChange(event) {
    this.img = event;
    this.tableSer.changeImgURL(event);
    this.imgChanged = true;
  }
  onSubmit() {
    this.updateFrm.controls['tag'].setValue(this.currentTag);
    if (this.imgChanged == true) {
      this.updateFrm.controls['img'].setValue(this.tableSer.fb);
    }
    if (this.updateFrm.invalid) {
      return;
    }
    this.tableSer.updateData(this.updateFrm.value);
    this.dialog.closeAll();

  }

  deleteItem(id) {
    this.tableSer.deleteData(id);
  }
}
