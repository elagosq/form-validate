import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { setLogOutState } from '../actions/';

export default function Home(){
    const { username,password } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const LogOut = () => {
      dispatch(setLogOutState());
    }

    return(
      <View style={styles.container}>
         <Text>{username}</Text>
         <Text>{password}</Text>
         <Button 
           title="Log Out"
           onPress={LogOut}
         />
     </View>  
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});