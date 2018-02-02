import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
  name : string;
  constructor(public navCtrl: NavController,public storage: Storage) {

  }
ngOnInit()
  {
    this.storage.get('name').then((val) => {
    this.name = val;
  });
  }
}
