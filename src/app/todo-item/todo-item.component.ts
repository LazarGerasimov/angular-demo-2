import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


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
  @Output() completeStateChange: EventEmitter<string> = new EventEmitter();

  constructor() {}
  
  ngOnInit(): void {
    
  }

  handleCompleteStateChange(todoToChange: Todo): void {
    //todoToChange.isCompleted = !todoToChange.isCompleted;

    this.completeStateChange.emit(todoToChange.title);
  }
}
