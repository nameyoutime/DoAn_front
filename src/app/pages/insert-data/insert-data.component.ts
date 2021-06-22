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
  tags: Tag[];
  addTag: Tag[];
  selectedTag: number;
  val: string;
  img:any;
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
      img: new FormControl(null, Validators.required),
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
    console.log(this.img)
  }
  onSubmit() {
    this.insertFrm.controls['tag'].setValue(this.addTag);
    this.insertFrm.controls['img'].setValue(this.img);
    if (this.insertFrm.invalid) {
      return;
    }
    console.log(this.insertFrm)

    // let item = new ItemDescription();
    // //lay thông tin dữ liệu nhập trên form
    // item.id = this.insertFrm.controls["id"].value;//hoặc item.id = this.insertFrm.controls.id.value;
    // //...tương tự cho những trường khác

  }

  check(val) {
    this.val = val;
  }


  //broken need fix but too lazi
  add() {
    let temp = this.tableSer.getTagById(this.val);

    this.addTag.push(temp);
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
