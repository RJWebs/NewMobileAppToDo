import { Component } from '@angular/core';

/**
 * Generated class for the AddtaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'addtask',
  templateUrl: 'addtask.html'
})
export class AddtaskComponent {

  text: string;

  constructor() {
    console.log('Hello AddtaskComponent Component');
    this.text = 'Hello World';
  }

}
