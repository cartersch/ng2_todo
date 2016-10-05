import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {

  constructor() { }

  todos = [];

  private createID(){
    return Math.floor(Math.random() * 5000);
  }

  addTodo(todo){
    todo['id'] = this.createID();
    this.todos.push(todo);
  }

  getTodos(){
    return this.todos;
  }

  deleteTodo(id){
    let remove = this.todos.map( (item) => { return item.id})
                           .indexOf(id);

    this.todos.splice(remove, 1);                     
  }

}
