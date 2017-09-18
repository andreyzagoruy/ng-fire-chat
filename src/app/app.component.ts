import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireChat';

  newContactName = '';

  selectedContact: { name: string };

  contacts = [
    { name: 'Ronald' },
    { name: 'Bobby' },
    { name: 'Johny' }
  ];

  addContact() {
    this.contacts.push({ name: this.newContactName});
    this.newContactName = '';
  }

  selectContact(contact) {
    this.selectedContact = contact;
  }

  isSelected(contact): boolean {
    return this.selectedContact == contact;
  }
}
