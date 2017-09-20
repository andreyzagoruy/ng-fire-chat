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
  }

  @Input() contact;

  updateContact() {
    this.db.object(`/contacts/${this.contact.$key}`).update(this.contact);
  }

}
