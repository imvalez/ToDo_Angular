import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todo-list-container">
      <h3>📋 Le tue attività</h3>
      
      <div *ngIf="todos.length === 0" class="empty-state">
        <div class="empty-icon">🎉</div>
        <p>Nessuna attività in lista!</p>
        <p class="empty-subtitle">Inizia aggiungendo qualcosa da fare</p>
      </div>
      
      <div *ngIf="todos.length > 0" class="todos-wrapper">
        <div *ngFor="let todo of todos; trackBy: trackByTodoId" 
             class="todo-item" 
             [class.completed]="todo.completed">
          <div class="todo-content">
            <span class="todo-text">{{ todo.text }}</span>
            <small class="todo-date">{{ formatDate(todo.createdAt) }}</small>
          </div>
          <div class="todo-actions">
            <button 
              (click)="toggleComplete(todo.id)"
              class="toggle-btn"
              [class.completed]="todo.completed">
              {{ todo.completed ? '✓' : '○' }}
            </button>
            <button 
              (click)="removeTodo(todo.id)"
              class="remove-btn">
              🗑️
            </button>
          </div>
        </div>
        
        <div class="stats">
          {{ getActiveCount() }} attive di {{ todos.length }} totali
        </div>
      </div>
    </div>
  `,
  styles: [`
    .todo-list-container {
      background: white;
      border-radius: 15px;
      padding: 25px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    }
    
    h3 {
      margin: 0 0 20px 0;
      color: #333;
      font-size: 1.3em;
      text-align: center;
    }
    
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #666;
    }
    
    .empty-icon {
      font-size: 3em;
      margin-bottom: 15px;
    }
    
    .empty-subtitle {
      font-size: 0.9em;
      opacity: 0.7;
    }
    
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      margin-bottom: 10px;
      background: #f8f9fa;
      border-radius: 10px;
      border-left: 4px solid #4ecdc4;
      transition: all 0.3s ease;
    }
    
    .todo-item:hover {
      transform: translateX(5px);
      box-shadow: 0 3px 15px rgba(0,0,0,0.1);
    }
    
    .todo-item.completed {
      opacity: 0.6;
      border-left-color: #95a5a6;
    }
    
    .todo-content {
      flex: 1;
    }
    
    .todo-text {
      display: block;
      font-size: 1.1em;
      color: #333;
      margin-bottom: 5px;
    }
    
    .completed .todo-text {
      text-decoration: line-through;
      color: #95a5a6;
    }
    
    .todo-date {
      color: #999;
      font-size: 0.8em;
    }
    
    .todo-actions {
      display: flex;
      gap: 8px;
    }
    
    .toggle-btn, .remove-btn {
      width: 35px;
      height: 35px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
    }
    
    .toggle-btn {
      background: #e9ecef;
      color: #666;
    }
    
    .toggle-btn.completed {
      background: #28a745;
      color: white;
    }
    
    .remove-btn {
      background: #dc3545;
      color: white;
    }
    
    .toggle-btn:hover, .remove-btn:hover {
      transform: scale(1.1);
    }
    
    .stats {
      text-align: center;
      margin-top: 20px;
      padding: 10px;
      background: #e3f2fd;
      border-radius: 20px;
      color: #1976d2;
      font-size: 0.9em;
    }
  `]
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() todoRemoved = new EventEmitter<number>();
  @Output() todoToggled = new EventEmitter<number>();

  removeTodo(id: number): void {
    this.todoRemoved.emit(id);
  }

  toggleComplete(id: number): void {
    this.todoToggled.emit(id);
  }

  trackByTodoId(index: number, todo: Todo): number {
    return todo.id;
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('it-IT', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  getActiveCount(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }
}