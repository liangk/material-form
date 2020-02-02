import { Component } from '@angular/core';
import { MysqlDB } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-form';

  connect() {
    const db = new MysqlDB();
    db.connect();
    db.close();
  }
}
