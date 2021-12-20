import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    ListContactsComponent,
    DeleteContactComponent,
    ViewContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
