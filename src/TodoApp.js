import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AppTodo from './containers/AppTodo';
import VisibleTodo from './containers/VisibleTodo';

class TodoApp extends Component {

  state = {
    todo: [],
    visibilityFilter: 'SHOW_ALL'
  }

  render() {
    return (
      <View style={styles.container}>
        <AppTodo />
        <View>
          <VisibleTodo />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});



export default TodoApp;
