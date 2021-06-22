import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDataComponent } from './insert-data.component';

const routes: Routes = [{ path: '', component: InsertDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertDataRoutingModule { }
