import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Dimensions} from "react-native";
import { Link } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function LoginPage({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (email, password) => {
        setTimeout(() => {
          navigation.navigate('overview')
        }, 2000)
    }
    return(
        <View style={styles.mainCont}>
            <View style = {styles.titleCont}>
                <Text style = {styles.title}>Log In</Text>
            </View>
            <View style={[styles.inputCont, {marginTop: '10%'}]}>
                <TextInput
                style={styles.input}
                placeholder="  Email Address"
                placeholderTextColor="#555"
                onChangeText={(email) => setEmail(email)}
                /> 
                <TextInput
                style={styles.input}
                placeholder="  Password"
                placeholderTextColor="#555"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                /> 
            </View>
            <Text style = {styles.signUpText}>Don't have an account? <Link to = {{screen: 'signup'}} style = {{color: '#47B1FF'}}>Sign Up</Link></Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
            <Text style={styles.loginText}>Continue</Text> 
        </TouchableOpacity> 
        {/* <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Continue" onPress={handleContinue} />
    </View> */}
    </View>
    )
}
export default LoginPage;
const handleContinue = () => {
    // Retrieve the entered username and password from the input fields
    const enteredUsername = username; 
    const enteredPassword = password; 
  
    const user = users.find((u) => u.username === enteredUsername);
  
    if (!user) {
      // User not found
      Alert.alert('Error', 'User not found');
      return;
    }
  
    if (user.password === enteredPassword) {
      navigation.navigate('Home');
    } else {
      // Incorrect password
      Alert.alert('Error', 'Incorrect password');
    }

  if (user) {
    navigation.navigate('Home', { firstName: user.firstName });
  }

  };

async function custLogin(email, password){
    var userId = '';
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(userCreds => {
        userId = userCreds.user.uid;
        //Navigate/get user data
        
    }).catch(err => {
        console.log(err)
    })
    console.log()
}

const styles = StyleSheet.create({
    mainCont: {
      backgroundColor: "#FFF",
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      alignItems: "center",
      justifyContent: 'center'
    },
    titleCont:{
        height: '7%',
        width: '90%',
    },
    title:{
        color: "#000",
        fontSize: 40,
        textAlign: "center",
        fontWeight: '600',
    },
    inputCont: {
        height: '26%',
        width: '90%',
    },
    input: {
      height: '28%',
      width: '100%',
      marginVertical: '8%',
      backgroundColor: '#EDEFF2',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#FAFAFA",
      fontSize: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    authButton: {
        height: '5%',
        width: '80%',
        backgroundColor: '#B1B1B1',
        marginBottom: '5%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authText: {
        fontSize: 22,
        fontWeight: '500'
    },
    signUpText:{
        marginTop: '20%',
        fontSize: 18,
        color: '#000'
    },

    loginBtn: {
      width: "80%",
      height: 65,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: "#47B1FF",
    },
    loginText:{
        fontSize: 25,
        fontWeight: '600',
        color: "#fff"
    }
  });