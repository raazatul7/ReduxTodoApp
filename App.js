import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Text,TouchableOpacity, SafeAreaView } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        val: 1,
    }
}

  render() {
    console.log('rendering');
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
      // <SafeAreaView>
      // <TouchableOpacity onPress={()=>this.setState({val:1})}>
      //   <Text>Hello</Text>
      // </TouchableOpacity>
      // </SafeAreaView>
    );
  }
}
export default App;
