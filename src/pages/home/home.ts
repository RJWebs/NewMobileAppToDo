import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController,public storage: Storage, public menuCtrl: MenuController, public taskservice: TaskserviceProvider) {}

  ngOnInit()
  {
    this.listType = this.taskservice.getTaskType();
    
    this.storage.get(this.STORAGE_KEY).then(result => {
      this.todoList = [];
      result.forEach(element => {
        console.log(element);
        this.todoList.push(element);
      });
      console.log(this.todoList);
    })
  }
}
