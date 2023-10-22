import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import OverviewButton from './components/overviewButton';
import DateBox from "./DateBox.js";

class Overview extends Component {
    handleDayPress = (day) => {
        // Find the week for the selected day
        const selectedWeek = this.getWeekFromDate(day.dateString);
        this.setState({ selectedWeek});
        this.updateDateStrings(selectedWeek)
    };
    
    // Callback when a day is long-pressed (to clear the selection)
    handleDayLongPress = () => {
        this.setState({ selectedWeek: {} });
    };

    getWeekFromDate = (date) => {
        //console.log(date)
        const selectedDate = new Date(date);
        const weekStart = getSunday(selectedDate);
        const weekEnd = new Date(weekStart);
        
        weekEnd.setDate(weekStart.getDate() + 6);

        const markedDates = {};
        let currentDate = new Date(weekStart);

        //one iteration
        let formattedDate = currentDate.toISOString().split('T')[0];
        markedDates[formattedDate] =  {
            selected: true,
            color: '#47B1FF',
            textColor: 'white',
        };

        currentDate.setDate(currentDate.getDate() + 1);
        //one iteration finish

        while (currentDate.getDay() < 6){
            const formattedDate = currentDate.toISOString().split('T')[0];
            markedDates[formattedDate] =  {
                selected: true,
                color: '#47B1FF',
                textColor: 'white',
            };

            currentDate.setDate(currentDate.getDate() + 1);
        }

        return markedDates;
    }

    convertDateStrings = (dateStrings) => {
        const convertedDates = dateStrings.map(dateString => {
            const [year, month, day] = dateString.split('-');
            const date = new Date(year, month - 1, day); // Month is zero-based in JavaScript
            const options = { weekday: 'long', month: 'short', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
          });
        
        return convertedDates;
    }

    updateDateStrings = (week) => {
        const dateStrings = this.convertDateStrings(Object.keys(week));
        this.setState({ dateStrings});
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    constructor(props) {
        super(props);

        let today = new Date()
        let todayString = new Date().getFullYear() + "-"+ parseInt(new Date().getMonth()+1) +"-"+ new Date().getDate();
        
        this.state = {
            selectedWeek: this.getWeekFromDate(todayString), // To keep track of the selected week
            dateStrings: this.convertDateStrings(Object.keys(this.getWeekFromDate(todayString)))
        };
    }

    render() {
        return (
          <View style={styles.container}>
            <Calendar
              onDayPress={this.handleDayPress}
              onDayLongPress={this.handleDayLongPress}
              markedDates={this.state.selectedWeek}
              theme={{
                calendarBackground: 'white',
                selectedDayBackgroundColor: 'blue',
                selectedDayTextColor: 'white',
                textSectionTitleColor: 'gray',
                todayTextColor: 'blue',
                dayTextColor: 'black',
                textDisabledColor: 'lightgray',
              }}
            />
            <ScrollView contentContainerStyle={styles.datesCont} showsVerticalScrollIndicator={false}>
                <DateBox dateString={this.state.dateStrings[0]} notis={(this.getRandomInt(0, 6)).toString()}/>
                <DateBox dateString={this.state.dateStrings[1]} notis={(this.getRandomInt(0, 6)).toString()}/>
                <DateBox dateString={this.state.dateStrings[2]} notis={(this.getRandomInt(0, 6)).toString()}/>
                <DateBox dateString={this.state.dateStrings[3]} notis={(this.getRandomInt(0, 6)).toString()}/>
                <DateBox dateString={this.state.dateStrings[4]} notis={(this.getRandomInt(0, 6)).toString()}/>
                <DateBox dateString={this.state.dateStrings[5]} notis={(this.getRandomInt(0, 6)).toString()}/>
                <DateBox dateString={this.state.dateStrings[6]} notis={(this.getRandomInt(0, 6)).toString()}/>
            </ScrollView>
          </View>
          
        );
    }
}

function getSunday(d) {
    d = new Date(d);
    var day = (d.getDay() + 1)%7;
    diff = d.getDate() - day; // adjust when day is sunday
    return new Date(d.setDate(diff));
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginTop: '5%'
    },
    calendarContainer: {
      flex: 1,
    },
    datesCont: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
});
  
  export default Overview;

