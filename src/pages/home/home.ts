import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Page} from 'ionic-angular';
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
  addtaskPage = AddtaskPage;

  // checkups: string[] = [
  //     "All List",
  //     "Personal",
  //     "Work"
  // ];
  
  
  constructor(public navCtrl: NavController,public storage: Storage, public menuCtrl: MenuController, public taskservice: TaskserviceProvider) {}

  ngOnInit()
  {
    this.taskservice.getData();
    
    this.listType = this.taskservice.getTaskType();
  }

  navigateToAddPage()
  {

  } 
}
