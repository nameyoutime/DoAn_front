import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item-models';
import { Tag } from 'src/app/models/tag-models';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  data: any;
  tags: any;
  constructor(private tableSer: TableService) {
  }


  ngOnInit(): void {
    this.tableSer.getData();
    this.data = this.tableSer.getTableData();
    this.tags = this.tableSer.getTag();
  }

}
