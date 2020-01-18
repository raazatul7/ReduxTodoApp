import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import {addTodo} from '../actions'

class AppTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        this.props.dispatch( addTodo(text) )
        this.setState({ text: '' })
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <TextInput
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        style={{ flex: 1, height: 50, padding: 5, borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea' }}
                        placeholder='Eg. Wash clothes.'
                    />
                    <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                        <View>
                            <Text>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default connect()(AppTodo)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        marginHorizontal: 20
    }
});
