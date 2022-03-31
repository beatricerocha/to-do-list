import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
 
export class DashboardComponent implements OnInit {
  public taskForm = new FormGroup({
  addTaskValue: new FormControl({value:""}),
  editTaskValue: new FormControl({value:""}),
});

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  constructor(private fb: FormBuilder, private crudService : CrudService) { }

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
    
    
    this.taskForm.setValue({
      addTaskValue: '',
      editTaskValue: ''

    })
  }
  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Não foi possível obter a lista de tarefas");
    });
  }

  addTask() {
   // console.log(this.taskForm.value);
    this.taskObj.nomeTarefa = this.taskForm.value.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert(err);
    })
  }

  editTask() {
   // console.log(this.taskForm.value);
   this.taskObj.nomeTarefa = this.taskForm.value.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Falha ao atualizar a tarefa");
    })
  }

  deleteTask(etask : Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Falha ao excluir tarefa");
    });
  }

  call(etask : Task) {
    this.taskObj = etask;
   // this.editTaskValue = etask.nomeTarefa;
  }


}
