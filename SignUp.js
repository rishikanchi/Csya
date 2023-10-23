import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignUp = () => {
    const navigation = useNavigation(); // Access the navigation object
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (email, cPass, password, first, last) => {//Create user with firebase Auth
        /*if(cPass == password){
            createCust(email, password, first, last, type); //Send request to server to create user database*/
            setTimeout(() => {
                        navigation.navigate('overview') //Navigate to survey
            }, 2000)
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style = {styles.main}>
        <View style = {styles.title}>
            <Text style = {styles.titleText}>Sign Up</Text>
        </View>
        <View style = {{height: '45%', alignItems: 'center'}}>
            <View style = {{flexDirection: 'row', height: '20%'}}>
                <TextInput
                    onChangeText={setFirstName}
                    value={firstName}
                    placeholder=" First Name "
                    keyboardType="default"
                    placeholderTextColor = '#555'
                    maxLength={15}
                    style = {[styles.halfInput, {marginRight: '2%'}]}
                    />
                <TextInput
                    onChangeText={setLastName}
                    value={lastName}
                    placeholder=" Last Name "
                    keyboardType="default"
                    placeholderTextColor = '#555'
                    maxLength={15}
                    style = {styles.halfInput}
                />  
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder=" Email"
                placeholderTextColor = '#555'
                keyboardType="default"
                inputMode='email'
                maxLength={30}
                autoCorrect = {false}
                spellCheck={false}
                />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder=" Password"
                placeholderTextColor = '#555'
                keyboardType="default"
                maxLength={19}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder=" Confirm Password"
                placeholderTextColor = '#555'
                keyboardType="default"
                maxLength={19}
                secureTextEntry={true} 
            />



            <TouchableOpacity style = {styles.button} onPress={() => handleSignUp()}>
                <Text style = {styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style = {styles.signUp}>Already have an account? <Link to = {{screen: 'login'}} style = {{color: '#47B1FF'}}>Log In</Link></Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    main: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#FBFFFF',
    },
    title: {
      height: '30%',
      width: '97.5%',
      left: '2.5%',
      top: '2%',
      justifyContent: 'center',
      alignItems: 'center'
  },
    titleText: {
        fontSize: 45,
        fontWeight: '600'
    },
    subText: {
        fontSize: 18,
        top: '2.5%',
        color: '#777'
    },
    input:{
      height: '15%',
      width: '90%',
      backgroundColor: '#EDEFF2',
      borderRadius: 5,
      marginVertical: '5%',
      fontSize: 18,
      fontWeight: '500'
  },
    halfInput:{
        height: '80%',
        width: '44%',
        backgroundColor: '#EDEFF2',
        borderColor: '#888',
        borderRadius: 5,
        marginBottom: '5%',
        fontSize: 18
    },
    button: {
      height: '20%',
      width: '65%',
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: '#47B1FF',
      marginTop: '8%',
    },
    buttonText:{
        fontSize: 25,
        fontWeight: '600',
        alignSelf: 'center',
        color: "#FFF"
    },
    signUp: {
        top: '8%',
        fontSize: 18,
        fontWeight: '400'
    }
  
  
  })  

export default SignUp;