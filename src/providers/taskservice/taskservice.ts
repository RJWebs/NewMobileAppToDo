// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TaskserviceProvider {
  taskType : string = "All Lists";

  todolist : string[] = [];

  storedList: any;

  constructor(public storage :Storage) {
    console.log('Hello TaskserviceProvider Provider');
  }

  setTaskType(taskType : any)
  {
    this.taskType = taskType;
  }

  getTaskType()
  {
    return this.taskType;
  }

  saveToDatabase(data : any)
  {
    this.todolist.push(data);
   // console.log(this.todolist)
   this.storage.set('data',this.todolist);
    //this.getData();
    //console.log(this.todolist);
    //console.log(this.todolist);

    // this.getData();
  }

  getData()
  {
    this.todolist = [];
    
    this.storage.get('data').then((val) => {
      this.todolist.push(val);
      console.log(this.todolist);
    });
    
  }

}
