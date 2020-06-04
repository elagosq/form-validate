import React from 'react';
import { Button } from 'react-native-elements';

export default function FormButton({ title, buttonType, buttonColor, ...rest }){
  return(
    <Button
     {...rest}
     type={buttonType}
     title={title}
     buttonStyle={{ borderColor: buttonColor, borderRadius: 20 }}
     titleStyle={{ color: buttonColor }}
  />
  );
}
