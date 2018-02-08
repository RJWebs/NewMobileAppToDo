import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { TaskserviceProvider } from "../../providers/taskservice/taskservice";
import { SqliteserviceProvider } from "../../providers/sqliteservice/sqliteservice";
import { Storage } from '@ionic/storage';
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the AddtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})
export class AddtaskPage {

  @ViewChild('content') nav: NavController;
  rootPage:any = TabsPage;

  todo: any = {
    taskname: '',
    description: '',
    tasktype: '',
    startdate: '',
    enddate: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,public sqlliteservice :SqliteserviceProvider,
  public taskservice: TaskserviceProvider,public storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');

  }

  logForm() {
   // console.log(this.todo);
  //   this.storage.set('data',"ja");
  //   this.storage.get('data').then((val) => {
  //   console.log(val);
  // });
    this.taskservice.saveToDatabase(this.todo);
    this.navCtrl.push(TabsPage);
    //this.sqlliteservice.createDatabase();
  }
}
