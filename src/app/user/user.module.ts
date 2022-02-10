import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule
  ]
})
export class UserModule { }
