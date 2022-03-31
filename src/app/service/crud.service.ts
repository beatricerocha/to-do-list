import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = "https://localhost:7014/api/tarefas"
  }

  addTask(task : Task) {
    return this.http.post<Task>(this.serviceURL,task);
  }

  getAllTask(){
    return this.http.get<Task[]>(this.serviceURL);
  }

  deleteTask(task : Task){
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  }

  editTask(task : Task) {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  }

}
