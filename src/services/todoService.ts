import { Todo } from '../types/todo';

class TodoService {
  private todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.todos]);
      }, 500);
    });
  }

  async addTodo(title: string): Promise<Todo> {
    return new Promise((resolve) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.todos.push(newTodo);
      setTimeout(() => resolve(newTodo), 300);
    });
  }

  async toggleTodo(id: string, completed: boolean): Promise<Todo> {
    return new Promise((resolve, reject) => {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = completed;
        todo.updatedAt = new Date();
        setTimeout(() => resolve(todo), 300);
      } else {
        reject(new Error('Todo not found'));
      }
    });
  }

  async deleteTodo(id: string): Promise<void> {
    return new Promise((resolve) => {
      this.todos = this.todos.filter(t => t.id !== id);
      setTimeout(() => resolve(), 300);
    });
  }

  async updateTodo(id: string, newTitle: string): Promise<Todo> {
    return new Promise((resolve, reject) => {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.title = newTitle;
        todo.updatedAt = new Date();
        setTimeout(() => resolve(todo), 300);
      } else {
        reject(new Error('Todo not found'));
      }
    });
  }
}

export const todoService = new TodoService();