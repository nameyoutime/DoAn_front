import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const MaterialComponents = [
  Ng2SearchPipeModule,
  CommonModule,
  FormsModule,
  NgxPaginationModule,
  MatDialogModule,
  NgSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  ReactiveFormsModule
]


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
