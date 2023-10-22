import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Icon} from 'react-native';
// import Periods from "../Periods.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const OverviewButton = (props) => {
    
    const { title, buttonIcon, navigation } = props;

    return (
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Periods")}}>
            {/* <FontAwesomeIcon icon="fa-solid fa-file-lines" style={styles.icon} /> */}
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 100,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', 
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1.5, 
        marginLeft: 10, 
    },
    icon: {
        marginRight: 5
    }

});


  

export default OverviewButton;
