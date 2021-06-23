import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePageRoutingModule } from './table-page-routing.module';
import { TablePageComponent } from './table-page.component';
import { MaterialModule } from '../../shared/material/material.module'
import { TableModule } from '../../shared/table/table.module'

@NgModule({
  declarations: [
    TablePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TablePageRoutingModule,
    TableModule
  ]
})
export class TablePageModule { }
