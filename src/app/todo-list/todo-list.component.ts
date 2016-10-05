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

   todoStatus(todo){
     let statusClass ="";

     if(todo.done){
       statusClass = "complete";
     } else {
       statusClass = "incomplete";
     }

     return statusClass;
   }

   doneTodo(todo){
     todo.done = !todo.done;
   }

   deleteTodo(todo){
     if(confirm("Are you sure?")){
       this.todoService.deleteTodo(todo.id);
     }   
   }

  ngOnInit() {
  }

}
