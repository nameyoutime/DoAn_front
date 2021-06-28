import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Tag } from 'src/app/models/tag-models';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.scss']
})
export class InsertDataComponent implements OnInit {
  insertFrm: any;
  tags: any;
  addTag: Tag[];
  selectedTag: number;
  val: string;
  img: any;
  constructor(private fb: FormBuilder, private tableSer: TableService) { }

  ngOnInit(): void {
    this.tags = this.tableSer.getTag();
    this.addTag = [];
    this.insertFrm = this.fb.group({
      title: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quanlity: new FormControl('', Validators.required),
      tag: new FormControl(null, Validators.required),
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    })

  }
  onFileChange(event) {
    this.img = event;
    this.tableSer.changeImgURL(event);
  }
  onSubmit() {
    this.insertFrm.controls['tag'].setValue(this.addTag);

    if (this.insertFrm.invalid) {
      return;
    }
    // this.tableSer.changeImgURL(this.insertFrm.get('img').value);
    this.tableSer.insertData(this.insertFrm.value);
 
    // console.log(this.insertFrm.value);


    // let item = new ItemDescription();
    // //lay thông tin dữ liệu nhập trên form
    // item.id = this.insertFrm.controls["id"].value;//hoặc item.id = this.insertFrm.controls.id.value;
    // //...tương tự cho những trường khác

  }
  valueChanged: boolean;
  check(val) {
    this.val = val;

  }


  //broken need fix but too lazi
  add() {

    let temp = this.tableSer.getTagById(this.val);

    this.addTag.push(temp);
    this.valueChanged = true;
    // var n = this.addTag.includes(temp.id);
    // console.log(n);
  }

  remove(index) {
    let temp = this.addTag.slice();
    temp.splice(index, 1);
    this.addTag = temp;
  }
  test() {
    console.log(this.addTag)
  }

}
