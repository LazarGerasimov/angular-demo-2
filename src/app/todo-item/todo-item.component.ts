import { Component, Input, OnInit } from '@angular/core';

export interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;

  constructor() {}
  
  ngOnInit(): void {
    
  }

  handleCompleteStateChange(todoToChange: Todo): void {
    todoToChange.isCompleted = !todoToChange.isCompleted;
  }
}
