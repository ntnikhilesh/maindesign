import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.eventbinding.html',
  styleUrls: ['./app.eventbinding.css']
})
export class AppComponent {
  title = 'Hello Ravi';

  /*ngForDemo */
  /*heroes = ['Bill-12', 'Bill-32'] */

  /* Event Binding */
 
heroes = ['Bill-12'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }



  }

 
//bootstrap(AppComponent)
//bootstrap(DialogResultExampleDialog)
  


