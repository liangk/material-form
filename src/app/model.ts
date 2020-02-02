import * as mysql from 'mysql';
import { environment } from 'src/environments/environment';

export class MysqlDB {
  db;
  connect() {
    this.db = mysql.createConnection({
      host: 'localhost',
      user: environment.username,
      password: environment.password,
    });  
  
    this.db.connect((err) => {
      if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
    });
  }

  close() {
    this.db.end((err) => {
      console.log(err);
    });        
  }

}