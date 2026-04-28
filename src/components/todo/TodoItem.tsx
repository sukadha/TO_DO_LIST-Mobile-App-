import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSaveEdit = () => {
    if (editText.trim() && editText !== todo.title) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle(todo.id)} style={styles.checkbox}>
        <View style={[styles.checkboxInner, todo.completed && styles.checkboxChecked]}>
          {todo.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={editText}
          onChangeText={setEditText}
          onBlur={handleSaveEdit}
          onSubmitEditing={handleSaveEdit}
          autoFocus
        />
      ) : (
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setIsEditing(true)}
          activeOpacity={0.7}
        >
          <Text style={[styles.title, todo.completed && styles.completedText]}>
            {todo.title}
          </Text>
          <Text style={styles.date}>
            {new Date(todo.createdAt).toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => onDelete(todo.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    marginRight: 12,
  },
  checkboxInner: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#6366f1',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  date: {
    fontSize: 11,
    color: '#9ca3af',
  },
  editInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#6366f1',
  },
  deleteButton: {
    padding: 8,
    marginLeft: 8,
  },
  deleteText: {
    fontSize: 20,
  },
});