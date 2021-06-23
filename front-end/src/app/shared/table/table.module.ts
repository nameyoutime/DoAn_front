import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data/table-data.component';

import { MaterialModule } from '../material/material.module'
@NgModule({
  declarations: [
    TableDataComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    TableDataComponent,
  ]
})
export class TableModule { }
