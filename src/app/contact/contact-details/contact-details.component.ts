import { Component, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  contacts: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
      this.contacts = this.db.list('/contacts');
  }

  @Input() contact;

  updateContact() {
    this.contacts.update(this.contact.$key, this.contact);
  }

}
