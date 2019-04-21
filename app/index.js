import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import TextArea from './components/TextArea/TextArea';
import { Button, ThemeProvider, Card, ListItem, Input, } from 'react-native-elements';
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LoginContainer from "./containers/LoginContainer";

export default class App extends Component {
    render() {
        return (
            <LoginContainer/>
        );
    }
}
