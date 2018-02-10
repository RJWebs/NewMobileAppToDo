import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController, AlertController } from 'ionic-angular';
import { TaskserviceProvider } from "../../providers/taskservice/taskservice";
import { AddtaskPage } from "../addtask/addtask";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  listType: string = "All List";
  todoList: any [] = [];
  addtaskPage = AddtaskPage; 
  STORAGE_KEY = 'todo_item'; 

  showId = null;
  color = "dark"
  selectedTask = null;
  

  constructor(public navCtrl: NavController, public storage: Storage, public menuCtrl: MenuController, 
              public taskservice: TaskserviceProvider, public alertCtrl: AlertController) {}

  ngOnInit()
  {
    this.listType = this.taskservice.getTaskType();
    
    this.storage.get(this.STORAGE_KEY).then(result => {
      this.todoList = [];

      if(result) {
        result.forEach(element => {
          console.log(element);
          this.todoList.push(element);
        });
      }    
      console.log(this.todoList);
    })
  }

  selectTask(id) {
    console.log(id);
    this.selectedTask = id;
  }

  changeShow(id) {
    if(this.showId != id) {
      this.showId = id;
    }
    else {
      this.showId = null;
    }
  }

  changeImportant(color) {
    if(color === "dark") {
      this.color = 'danger';
    }
    else {
      this.color = 'dark';
    }
  }

  showAlert(i) {
    let task = this.todoList[i];

    let icon = '';

    if(task.tasktype==='Personal') {
      icon = 'person';
    }
    if(task.tasktype==='Office') {
      icon = 'briefcase';
    }
    if(task.tasktype==='Wishlist') {
      icon = 'heart';
    }
    if(task.tasktype==='Shopping') {
      icon = 'cart';
    }

    let alert = this.alertCtrl.create({
      title: task.taskname,
      message: '<p><ion-icon name="cart"></ion-icon>'+task.tasktype+'</p>' +
                '<p>date</p>' +
                '<p>date</p>' +
                '<p style="color:blue !important">'+task.description+'</p>' +
                '<p>date</p>',
      buttons: ['Ok']
    });
    alert.present()
  }

}
