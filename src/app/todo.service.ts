import { Injectable, Injector } from '@angular/core';

import { Todo } from './todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private injector: Injector) {
  }

  getTodos(): Promise<Todo[]> {
    return Promise.resolve([
      {
        title: 'Todo 1', isCompleted: false
      },
      {
        title: 'Todo 2', isCompleted: true
      },
      {
        title: 'Todo 3', isCompleted: false
      },
      {
        title: 'Todo 4', isCompleted: true
      },
  
    ]);
  }
}
