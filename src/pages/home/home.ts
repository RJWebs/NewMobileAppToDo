import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  checkup: string = "All List";

  checkups: string[] = [
      "All List",
      "Personal",
      "Work"
  ];
  
  
  constructor(public navCtrl: NavController,public storage: Storage, public menuCtrl: MenuController) {}

  ngOnInit()
  {
    this.storage.set('name', 'daluwatte');
  }

  openMenu() {
   this.menuCtrl.open();
 }
   
}
