import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { TagDialogComponent } from './tag-dialog/tag-dialog.component';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component'


@NgModule({
  declarations: [ TagDialogComponent, DetailDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: []
})
export class DialogsModule { }
