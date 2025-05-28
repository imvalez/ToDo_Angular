import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoListComponent, AddTodoComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>🚀 Todo App di Valerio</h1>
        <p>Organizza le tue giornate in modo semplice ed efficace</p>
      </header>
      
      <main class="main-content">
        <app-add-todo (todoAdded)="onTodoAdded($event)"></app-add-todo>
        <app-todo-list 
          [todos]="todos"
          (todoRemoved)="onTodoRemoved($event)"
          (todoToggled)="onTodoToggled($event)">
        </app-todo-list>
      </main>
      
      <footer class="app-footer">
        <p>💡 Suggerimento: Clicca sul cerchio per completare un'attività</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
      padding: 20px;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    
    .app-header {
      text-align: center;
      color: white;
      margin-bottom: 40px;
    }
    
    .app-header h1 {
      font-size: 2.5em;
      margin: 0 0 10px 0;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    
    .app-header p {
      font-size: 1.1em;
      opacity: 0.9;
      margin: 0;
    }
    
    .main-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .app-footer {
      text-align: center;
      margin-top: 30px;
      color: white;
      opacity: 0.8;
    }
    
    @media (max-width: 768px) {
      .app-container {
        padding: 15px;
      }
      
      .app-header h1 {
        font-size: 2em;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onTodoAdded(text: string): void {
    this.todoService.addTodo(text);
    this.todos = this.todoService.getTodos();
  }

  onTodoRemoved(id: number): void {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos();
  }

  onTodoToggled(id: number): void {
    this.todoService.toggleTodo(id);
    this.todos = this.todoService.getTodos();
  }
}