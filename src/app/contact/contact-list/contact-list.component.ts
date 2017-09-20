import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  @Input() contacts;
  @Input('selected') selectedContact: any;
  @Output() select = new EventEmitter();

  selectContact(contact) {
    this.selectedContact = contact;
    this.select.emit(contact);
  }

  isSelected(contact): boolean {
    return this.selectedContact == contact;
  }

}
