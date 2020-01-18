import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TodoList = ({ todo, toggleTodo }) => (
    <View style={{ padding: 20 }}>
        {todo.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)

export default TodoList;
