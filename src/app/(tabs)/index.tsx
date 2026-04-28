import { View, StyleSheet } from 'react-native';
import { TodoContainer } from '../../containers/todo/TodoContainer';

export default function TodoScreen() {
  return (
    <View style={styles.container}>
      <TodoContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
});