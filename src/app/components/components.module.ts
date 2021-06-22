import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [NavBarComponent, SearchComponent, UserInfoComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
