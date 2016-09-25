import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = [];

  constructor(private todoService : TodoDataService) {
    this.todos = this.todoService.getTodos();
   }

   updateTodoStatus(todo){
     todo.done = !todo.done;
   }

  ngOnInit() {
  }

}
