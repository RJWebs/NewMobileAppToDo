import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  constructor(public navCtrl: NavController,public storage: Storage) {

  }
  ngOnInit()
  {
    this.storage.set('name', 'daluwatte');
  }
   
}
