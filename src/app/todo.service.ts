import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private injector: Injector) { }
}
