import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types'

export default class TextArea extends Component {
    state = {
        text: '',
    }
    render() {
        return (
            <TextInput
                value={this.state.text}
                style={{
                    width: 200,
                    height:100,
                    borderColor: 'gray',
                    borderWidth: 1
                  }}
                multiline = {true}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}

TextArea.propsTypes = {
    text: PropTypes.string.isRequired
};