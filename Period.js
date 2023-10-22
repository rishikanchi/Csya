import { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
export default class Period extends Component{
    render(){
        return(
            <View style = {styles.cont}>
                <View style = {styles.header}>
                    {/* <Text style = {styles.titleText}>1</Text> */}
                    <Text style = {styles.titleText}>Period {this.props.index}: {this.props.titleText}</Text>
                </View>
                <View style = {styles.filesCont}>
                  <View style = {styles.rowElem}>
                    <TouchableOpacity style = {styles.link}>
                      <Text style = {styles.filesText}>Homework</Text>
                    </TouchableOpacity>
                      <TouchableOpacity style = {styles.link}>
                      <Text style = {styles.filesText}>Notes</Text>
                    </TouchableOpacity>
                    </View>
                  <View style = {styles.rowElem}>
                    <TouchableOpacity style = {styles.link}>
                      <Text style = {styles.filesText}>Lesson Plans</Text>
                    </TouchableOpacity>
                      <TouchableOpacity style = {styles.link}>
                      <Text style = {styles.filesText}>Lectures</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        height: Dimensions.get("window").height * .3,
        width: '95%',
        backgroundColor: "#FAFAFA",
        marginHorizontal: '2.5%',
        justifyContent: 'center',
        // top: '5%',
        borderRadius: 10,
        shadowOffset: {height: 1, width: 2},
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: .15,
        borderWidth: .5,
        borderColor: '#E5E5E5'

    },
    header: {
        height: '15%',
        width: '95%',
    },
    titleText:{
        fontSize: 25,
        fontWeight: '600',
        alignSelf: 'center'
    },
    filesCont: {
      height: '55%',
      width: '95%',
      flexDirection: 'column',
      marginTop: '5%'
    },
    link:{
      height: '100%',
      width: '50%',
      marginLeft: '6%',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      // borderColor: "#9E9E9E",
      // borderWidth: 2,
      backgroundColor: "#47B1FF"
    },
    rowElem: {
      height: '45%',
      width: '90%',
      flexDirection: 'row',
      marginBottom: '2%'
    },
    filesText:{
      fontSize: 21,
      fontWeight: '500',
      color: '#000'
    }
})