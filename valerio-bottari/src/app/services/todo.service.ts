import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, text: 'Studiare Angular 19', completed: false, createdAt: new Date() },
    { id: 2, text: 'Fare la spesa', completed: false, createdAt: new Date() }
  ];
  private nextId = 3;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(text: string): void {
    if (text.trim()) {
      const newTodo: Todo = {
        id: this.nextId++,
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      };
      this.todos.push(newTodo);
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
