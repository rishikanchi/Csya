import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class PdfEdit extends Component {
    render() {
        return (
            <View style={styles.cont}>
                <Text>{this.props.assignment}</Text>
                <Image 
                    source = {
                        require("./images/pdfEdit.png")
                    }
                    style = {styles.editTools}
                />
                <Image 
                    source = {
                        require("./images/homework.png")
                    }
                    style = {styles.homework}
                />
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
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    editTools: {
        width: "90%",
        height: '5%'
    },
    homework: {
        width: "90%",
        height: "80%"
    }
});