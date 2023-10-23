import { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

export default class DateBox extends Component {
    render(){
        console.log(this.props)
        return(
            <TouchableOpacity 
                style = {styles.cont} onPress={() => this.props.navigation.navigate('periods')}>
                <Text style = {styles.date}>{this.props.dateString}</Text>
                <View style = {styles.notiCircle}>
                    <Text style = {styles.notis}>{this.props.notis}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        height: Dimensions.get("window").height * .1,
        width: "98%",
        backgroundColor: "#FAFAFA",
        // top: '5%',
        borderRadius: 10,
        shadowOffset: {height: 1, width: 2},
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: .15,
        borderWidth: .5,
        borderColor: '#E5E5E5',
        marginVertical: '2.5%',
        paddingVertical: 5,
        paddingHorizontal: 20,

        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    date: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    notiCircle: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#47B1FF",
        borderRadius: 15,
    },
    notis: {
        fontWeight: "bold",
        fontSize: 15
    }
});