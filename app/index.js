/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import TextArea from './components/TextArea/TextArea.component';
import { Button, ThemeProvider, Card, ListItem, Icon } from 'react-native-elements';

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
const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

];

export default class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <Button title="Hey!" />
                <Card title="CARD WITH DIVIDER">
                    {
                        users.map((u, i) => {
                            return (
                                <View key={i}>
                                    <Image
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <Text >{u.name}</Text>
                                </View>
                            );
                        })
                    }
                </Card>
            </ThemeProvider>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
