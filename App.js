import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailedScreen from './Screens/DetailedScreen';
import HomeScreen from './Screens/HomeScreen';
import SettingScreen from './Screens/SettingScreen';

const TopTab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TopTab.Navigator style={{backgroundColor:"green"}} tabBarPosition="bottom">
        <TopTab.Screen name='Home' component={HomeScreen} />
        <TopTab.Screen name='Detailed' component={DetailedScreen}  />
        <TopTab.Screen name='Settings' component={SettingScreen}/>
      </TopTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
