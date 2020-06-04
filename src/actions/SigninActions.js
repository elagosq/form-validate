import { SIGN_IN,LOG_OUT } from './types';

export const setLoginState = (loginData) => {
  return{
    type:SIGN_IN,
    payload:loginData
  }
}

export const setLogOutState = () => {
  return{
   type:LOG_OUT
  }
}