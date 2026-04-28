export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
  completionRate: number;
}