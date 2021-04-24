import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'black'}}>
      <View style= {styles.textContainer}>
        <Text style={styles.text}>SCHOOL ATTENDENCE</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    
  },
  text:{
    color: 'yellow',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;