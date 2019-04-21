import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import TextArea from '../components/TextArea/TextArea';
import { Button, ThemeProvider, Card, ListItem, Input, } from 'react-native-elements';
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

class LoginContainer extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    forgetPassword(email) {
        // this.props.actions.forgetPassword(email, password);
    }

    signIn(email, password) {
        // this.props.actions.signIn(email, password);
    }

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
                    autoCapitalize='none'
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
                    autoCapitalize='none'
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



// const mapDispatchToProps = (dispatch) => ({
//     ...bindActionCreators(actions, dispatch)
// })

export default LoginContainer