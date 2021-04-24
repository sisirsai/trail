import * as React from 'react'; 
import {View,Text,Button,StyleSheet} from 'react-native';

import HomeScreen from './Screens/HomeScreen';
import SummaryScreen from './Screens/SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
import AppHeader from './components/appHeader';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
  

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)


