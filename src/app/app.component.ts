import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireChat';

  contacts = [
    'Ronald',
    'Bobby',
    'Johny'
  ];
}
