import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpPageRoutingModule } from './sign-up-page-routing.module';
import { SignUpPageComponent } from './sign-up-page.component';
import {MaterialModule} from '../../shared/material/material.module'

@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,MaterialModule,
    SignUpPageRoutingModule
  ]
})
export class SignUpPageModule { }
