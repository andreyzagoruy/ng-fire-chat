import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireChat';

  selectedContact: { name: string };

  contacts = [
    { name: 'Ronald' },
    { name: 'Bobby' },
    { name: 'Johny' }
  ];

  selectContact(contact) {
    this.selectedContact = contact;
  }

}
