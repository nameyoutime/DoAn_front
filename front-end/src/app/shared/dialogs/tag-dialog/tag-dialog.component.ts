import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tag-dialog',
  templateUrl: './tag-dialog.component.html',
  styleUrls: ['./tag-dialog.component.scss']
})
export class TagDialogComponent implements OnInit {
  @ViewChild('input') input: ElementRef;

  constructor(private tableSer: TableService) { }
  currentTag: any;
  ngOnInit(): void {
    this.tableSer.getTag().subscribe(data => {
      this.currentTag = data;
    });

  }
  add() {
    let temp = this.input.nativeElement.value;
    this.tableSer.addTag(temp);
    this.input.nativeElement.value = ""
  }

}
