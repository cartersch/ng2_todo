import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {

  constructor() { }

  todos = [];

  addTodo(todo){
    this.todos.push(todo);
  }

  getTodos(){
    return this.todos;
  }

}
