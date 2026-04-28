import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { TodoItem } from '../../components/todo/TodoItem';
import { TodoInput } from '../../components/todo/TodoInput';
import { TodoStats } from '../../components/todo/TodoStats';
import { todoService } from '../../services/todoService';
import { Todo } from '../../types/todo';

export const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    const loadedTodos = await todoService.getTodos();
    setTodos(loadedTodos);
    setLoading(false);
  };

  const handleAddTodo = async (title: string) => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a task');
      return;
    }

    const newTodo = await todoService.addTodo(title);
    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = async (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      const updatedTodo = await todoService.toggleTodo(id, !todo.completed);
      setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    }
  };

  const handleDeleteTodo = async (id: string) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await todoService.deleteTodo(id);
            setTodos(todos.filter(t => t.id !== id));
          },
        },
      ]
    );
  };

  const handleEditTodo = async (id: string, newTitle: string) => {
    if (!newTitle.trim()) {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    }
    const updatedTodo = await todoService.updateTodo(id, newTitle);
    setTodos(todos.map(t => t.id === id ? updatedTodo : t));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <View style={styles.container}>
      <TodoStats total={todos.length} completed={completedCount} pending={pendingCount} />
      
      <TodoInput onAdd={handleAddTodo} />
      
      {loading ? (
        <View style={styles.centerContainer}>
          <Text style={styles.loadingText}>Loading tasks...</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
              onEdit={handleEditTodo}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>📝</Text>
              <Text style={styles.emptyTitle}>No tasks yet</Text>
              <Text style={styles.emptyText}>Add your first task above!</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
  },
  listContainer: {
    padding: 20,
    paddingTop: 0,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
  },
});