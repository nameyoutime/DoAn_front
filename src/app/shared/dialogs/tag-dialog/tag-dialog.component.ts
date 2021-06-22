import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tag-dialog',
  templateUrl: './tag-dialog.component.html',
  styleUrls: ['./tag-dialog.component.scss']
})
export class TagDialogComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    let temp = this.input.nativeElement.value;
    console.log(temp);
    this.input.nativeElement.value = ""
  }

}
