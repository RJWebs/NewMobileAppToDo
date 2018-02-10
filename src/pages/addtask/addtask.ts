import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { TaskserviceProvider } from "../../providers/taskservice/taskservice";
import { SqliteserviceProvider } from "../../providers/sqliteservice/sqliteservice";
import { Storage } from '@ionic/storage';
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})

export class AddtaskPage {

  tabsPage = TabsPage;

  todo: any = {
    taskname: '',
    description: '',
    tasktype: '',
    startdate: '',
    enddate: '',
    createdate: '',
    taskstatus: 'In Progress'
  };

  todolist: any [] = [];
  STORAGE_KEY = 'todo_item';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,public sqlliteservice :SqliteserviceProvider,
              public taskservice: TaskserviceProvider,public storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }

  addTask(isValid : boolean) {
    if(isValid == true)
    {
    this.todolist = [];

    return this.storage.get(this.STORAGE_KEY).then(result => {
      if (result) {

        result.forEach(element => {
          this.todolist.push(element);
        });       
        // console.log('before push: ' +this.todolist);

        this.todolist.push(this.todo);
        // console.log('after push: ' +this.todolist);
        
        this.storage.set(this.STORAGE_KEY, this.todolist);

      } else {
        this.todolist.push(this.todo);
        this.storage.set(this.STORAGE_KEY, this.todolist);
      }

      this.navigateToTabsPage();
    });
    }
  }

  navigateToTabsPage() {
    this.navCtrl.push(this.tabsPage);
  }
}
