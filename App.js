import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getPathFromState, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import periodPage from './Periods';
import Overview from './overview';
import OverviewButton from './components/overviewButton';
import Periods from "./Periods"
import Start from './Start';
import SignUp from './SignUp';
import DateBox from './DateBox';
import Login from "./Login";
import PdfEdit from './PdfEdit';

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
      <Stack.Navigator initialRouteName = "start">
        <Stack.Screen name="periods" component={Periods} options={{headerShown: false}}/>
        <Stack.Screen name="overview" component={Overview} options={{headerShown: false}}/>
        <Stack.Screen name="start" component={Start} options={{headerShown: false}}/>
        <Stack.Screen name="signup" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="datebox" component={DateBox} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="pdfedit" component={PdfEdit} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
)
};
