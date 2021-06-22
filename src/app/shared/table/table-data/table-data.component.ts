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
  collection: Item[];
  tags: Tag[]
  p: number = 1;
  numberOfItem: number = 10;
  selectedTag: number;
  val: string;
  updateFrm: any;
  currentTag: any[];
  img: any;
  imgChanged: boolean;
  constructor(private tableSer: TableService, private dialog: MatDialog, private fb: FormBuilder) {
    this.imgChanged = false;
  }

  ngOnInit(): void {
    this.collection = this.data;
    this.tags = this.tagsData;


  }
  onFileChange(event) {
    this.img = event;
    this.imgChanged = true;
  }
  openDetailDialog(data) {
    console.log(data);
    this.dialog.open(DetailDialogComponent, {
      data: data
    })
  }
  check(val) {
    if (val == null) {
      this.collection = this.data;
    } else {
      let data = this.tableSer.getDataByTag(val);
      if (data.length == 0) {
        console.log("empty");
        this.collection = data;
      } else {
        this.collection = data;
      }
    }
  }

  openTagDialog() {
    this.dialog.open(TagDialogComponent)
  }

  openUpdateDialog(item) {
    this.currentTag = item.tag.slice();
    // console.log(item);
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
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    })
  }
  removeUpdateTag(index) {

    let temp = this.currentTag.slice();
    temp.splice(index, 1);
    this.currentTag = temp;

  }
  addUpdateTag() {
    let temp = this.tableSer.getTagById(this.val);
    this.currentTag.push(temp);
  }
  deleteItem() {
    console.log("delete")
  }
  valChange(val) {
    this.val = val;
  }
  onSubmit() {
    this.updateFrm.controls['tag'].setValue(this.currentTag);
    if (this.imgChanged == true) {
      this.updateFrm.controls['img'].setValue(this.img);
    }
    if (this.updateFrm.invalid) {
      return;
    }
    console.log(this.updateFrm)

    // let item = new ItemDescription();
    // //lay thông tin dữ liệu nhập trên form
    // item.id = this.insertFrm.controls["id"].value;//hoặc item.id = this.insertFrm.controls.id.value;
    // //...tương tự cho những trường khác

  }
}
