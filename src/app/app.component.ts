import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactList: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.contactList = db.list('/contacts');
    this.contactList
      .subscribe(contacts => this.contacts = contacts);
  }

  title = 'FireChat';

  selectedContact: { name: string,
                     favourite: boolean };

  contacts = [];

  selectContact(contact) {
    this.selectedContact = contact;
  }

  filterFavourites(person) : boolean {
    if (person.favourite) return true;
  }
  getFavouritesLenght() {
    return this.contacts.filter(this.filterFavourites);
  }

  getContactsLenght() {
    return this.contacts.filter(person => !this.filterFavourites(person));
  }

}
