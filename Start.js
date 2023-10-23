import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class Start extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={[styles.title, {textAlign: 'center', top: '300%'}]}>SchoolAble</Text>
                </View>
                <View style={styles.cont}>
                    <TouchableOpacity style={styles.signup} onPress={() => this.props.navigation.navigate('signup')}><Text style={styles.textStuff}>Sign Up</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.signup} onPress={() => this.props.navigation.navigate('login')}><Text style={styles.textStuff}>Login</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },
    title: {
        fontSize: 40, 
        fontWeight: 'bold',
        color: 'black', 
      },
    signup: {
        height: Dimensions.get("window").height * .1,
        width: "70%",
        backgroundColor: "#47B1FF",
        // top: '5%',
        borderRadius: 10,
        shadowOffset: {height: 1, width: 2},
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: .15,
        borderWidth: .5,
        borderColor: '#E5E5E5',

        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textStuff: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 0,
        padding: 0,
    }
});