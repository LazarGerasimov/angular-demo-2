import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [
    {
      title: 'Todo 1', isCompleted: false
    },
    {
      title: 'Todo 2', isCompleted: false
    },
    {
      title: 'Todo 3', isCompleted: false
    },
    {
      title: 'Todo 4', isCompleted: false
    },
    
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
