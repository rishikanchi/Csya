import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getPathFromState, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import periodPage from './Periods';
import Overview from './overview';
import OverviewButton from './components/overviewButton';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "overview">
        <Stack.Screen name="class" component={Overview} options={{headerShown: false}}/>
        <Stack.Screen name="overview" component={Overview} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
)
};
