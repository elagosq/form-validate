import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

export default function SignUp({ navigation }){
  const goToLogin = () => navigation.navigate('Login');
  return(
   <View style={styles.container}>
      <Text>SignUp</Text>
      <Button title="Go to Login" onPress={goToLogin} />
   </View>
  );  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});