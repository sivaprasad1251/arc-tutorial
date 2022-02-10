import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    EditCustomersComponent,
    DeleteCustomerComponent,
    AddUserComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  
  
})
export class CustomersModule { }
