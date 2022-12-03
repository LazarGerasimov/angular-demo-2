import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TodoService]
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  markAllAsNotCompleted(): void {
    this.todos = this.todos.map(todo => ({ title: todo.title, isCompleted: true }));
  }

  handleStateChange(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
  }
}
