import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactCardComponent } from 'src/app/components/contact-card/contact-card.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { FormModalComponent } from 'src/app/components/form-modal/form-modal.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ContactCardComponent,
    FormModalComponent
  ],
})
export class ContactsModule { }
