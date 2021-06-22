import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {
  public tag: any;
  constructor(public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.compineTag();

  }

  compineTag() {
    this.tag = "";
    for (let i = 0; i < this.data.tag.length; i++) {
      if (i == 0) {
        this.tag = this.data.tag[i].name;
        continue;
      }
      this.tag += ", " + this.data.tag[i].name;
    }
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }


}
