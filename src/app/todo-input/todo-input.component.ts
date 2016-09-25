import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todo = {}

  constructor(private todoData : TodoDataService) { }

  addTodo(){
    console.log(this.todo);
    this.todo['done'] = false;
    this.todoData.addTodo(this.todo);
    this.todo = {};
  }

  hasInput(){
    return this.todo['task'] ? false : true;
  }

  ngOnInit() {
  }

}
