import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import TextArea from './components/TextArea/TextArea';
import { Button, ThemeProvider, Card, ListItem, Input, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Please Sign In</Text>
//         <TextArea/>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justiftyContent: "center", alignItems: "center", marginBottom: 100 }}>
                    <IconFontAwesome5
                        raised
                        name='door-open'
                        color='#ffeb3b'
                        size={150}
                        containerStyle={{ paddingBottom: 500 }}
                        onPress={() => console.log('hello')} />
                </View>
                <Input
                    placeholder='Email Address'
                    containerStyle={{
                       width: '90%'
                    }}
                    inputStyle={{
                        color: '#e1e2e3',
                        fontSize: 16,
                        paddingLeft: 10
                    }}
                    placeholderTextColor='#e1e2e3'
                    shake={true}
                // errorStyle={{ color: 'red' }}
                // errorMessage='Email is required'
                />
                <Input
                    placeholder='Password (4-16 letters)'
                    containerStyle={{
                        width: '90%'
                     }}
                    inputStyle={{
                        color: '#e1e2e3',
                        fontSize: 16,
                        paddingLeft: 10
                    }}
                    placeholderTextColor='#e1e2e3'
                    shake={true}
                // errorStyle={{ color: 'red' }}
                // errorMessage='Password is required'
                // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#212121',
        backgroundColor: '#2b2f34',
        // color: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
