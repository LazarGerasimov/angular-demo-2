import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Todo } from './todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private cache!: Todo[];

  constructor(private injector: Injector, private httpClient: HttpClient) {
  }

  getTodos(): Promise<Todo[]> {

    if (!this.cache) {
      this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/1').subscribe((todos) => {
        this.cache = todos;
      })
    }

    return Promise.resolve(this.cache);
  }
}
