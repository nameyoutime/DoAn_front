import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertDataRoutingModule } from './insert-data-routing.module';
import { InsertDataComponent } from './insert-data.component';
import { MaterialModule } from '../../shared/material/material.module'

@NgModule({
  declarations: [
    InsertDataComponent
  ],
  imports: [
    CommonModule,
    InsertDataRoutingModule,
    MaterialModule
  ]
})
export class InsertDataModule { }
