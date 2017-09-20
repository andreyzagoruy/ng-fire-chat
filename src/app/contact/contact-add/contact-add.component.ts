import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent {

  @Input() contacts;

  newContactName = '';

  addContact() {
    this.contacts.push({ name: this.newContactName});
    this.newContactName = '';
  }

}