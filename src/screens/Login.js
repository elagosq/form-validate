import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setLoginState } from '../actions/';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
 email: Yup.string()
   .label('Email')
   .email('Enter a valid email')
   .required('Please enter a registered email'),
  password: Yup.string()
   .label('Password')
   .required('Please enter a registered password')
   .min(6,'Password must have more than 6 caracters')   
});

export default function Login ({ navigation }) {
  const { 
    setFieldValue,
    values,
    errors,
    isValid,
    touched,
    handleSubmit,
    isSubmitting,
    resetForm 
  } = useFormik
  ({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema,
    onSubmit: values => {
      handleSubmitHome(values)
      resetForm({ values:''})
    },
  });
  const dispatch = useDispatch();

  const goToSignup = () => navigation.navigate('SignUp');

  const handleSubmitHome = values => {
    if(values.email.length > 0 && values.password.length > 0 ){
      setTimeout(() => {
        dispatch(setLoginState({'username':values.email,'password':values.password,'isSignedIn':true}))
      },1500);
    }
  }

   return (
    <SafeAreaView style={styles.container}>
        <>
          <FormInput
            name='email'
            value={values.email}
            onChangeText={text => setFieldValue('email',text)}
            placeholder='Enter email'
            autoCapitalize='none'
            iconName='ios-mail'
            iconColor='#2C384A'
          />
          <ErrorMessage errorValue={touched.email && errors.email} />
          <FormInput
            name='password'
            value={values.password}
            onChangeText={text => setFieldValue('password',text)}
            placeholder='Enter password'
            secureTextEntry
            iconName='ios-lock'
            iconColor='#2C384A'
          />
          <ErrorMessage errorValue={touched.password && errors.password} />
          <View style={styles.buttonContainer}>
            <FormButton
              buttonType='outline'
              onPress={handleSubmit}
              title='LOGIN'
              buttonColor='#039BE5'
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
            />
          </View>
      </>
     <Button
      title="Don't have an account? Sign Up"
      onPress={goToSignup}
      titleStyle={{
        color: '#F57C00'
      }}
      type='clear'
    />
  </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  }
});