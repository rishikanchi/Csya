import Period from "./Period.js";
import { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function Periods({route, navigation}){
    return (
        <View style={periodsStyles.pageCont}>
            <View style={periodsStyles.dateCont}>
                <Text style={periodsStyles.date}>Monday, July 10, 2023</Text>
            </View>
            {/**route.params.date*/}
            <ScrollView style={periodsStyles.periodsCont}>
                <Period titleText = "English" index = {1} navigation = {navigation}/>
                <View style = {{height: 10}}></View>
                <Period titleText = "Spanish"  index = {2} navigation = {navigation}/>
                <View style = {{height: 10}}></View>
                <Period titleText = "Math" index = {3} navigation = {navigation}/>
                <View style = {{height: 10}}></View>
                <Period titleText = "History" index = {4} navigation = {navigation}/>
                <View style = {{height: 10}}></View>
                <Period titleText = "Science" index = {5} navigation = {navigation}/>
                <View style = {{height: 100}}></View>
            </ScrollView>
        </View>
    );
}

const periodsStyles = StyleSheet.create({
    pageCont: {
        backgroundColor: '#FFF',
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },
    dateCont: {
        height: 50,
        justifyContent: 'center',
        marginLeft: 12,
        alignContent: "center",
        marginTop: 5,
        marginBottom: 5
    },
    date: {
        fontWeight: "bold",
        fontSize: 30,
    },
    periodsCont: {
        marginTop: 0
    }
})