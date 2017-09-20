import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactAddComponent } from './contact/contact-add/contact-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
