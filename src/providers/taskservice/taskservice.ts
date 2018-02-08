import { Injectable, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TaskserviceProvider {

  taskType : string = "All Lists";
  // todolist : any[] = [];

  // STORAGE_KEY = 'todo_item';

  constructor(public storage :Storage) {}

  setTaskType(taskType : any)
  {
    this.taskType = taskType;
  }

  getTaskType()
  {
    return this.taskType;
  }

  // saveToDatabase(newtask : any)
  // {
  //   this.todolist = [];

  //    return this.storage.get(this.STORAGE_KEY).then(result => {
  //     if (result) {

  //       result.forEach(element => {
  //         this.todolist.push(element);
  //       });
        
  //       console.log('before push: ' +this.todolist);

  //       this.todolist.push(newtask);
  //       console.log('after push: ' +this.todolist);
        
  //       this.storage.set(this.STORAGE_KEY, this.todolist);

  //     } else {
  //       this.todolist.push(newtask);
  //       this.storage.set(this.STORAGE_KEY, this.todolist);
  //     }
  //   });
  // }

  // getFromDatabase() {
  //   return this.storage.get(this.STORAGE_KEY).then((result) => {
  //     this.todolist = [];
  //     result.forEach(element => {
  //       console.log(element);
  //       this.todolist.push(element);
  //     });
  //     return result;
  //   });
  // }

}
