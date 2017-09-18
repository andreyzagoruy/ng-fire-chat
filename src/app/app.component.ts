import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireChat';

  newContactName = '';

  selectedContact = '';

  contacts = [
    'Ronald',
    'Bobby',
    'Johny'
  ];

  addContact() {
    this.contacts.push(this.newContactName);
    this.newContactName = '';
  }

  selectContact(contact) {
    this.selectedContact = contact;
  }

  isSelected(contact: string): boolean {
    return this.selectedContact == contact;
  }
}
