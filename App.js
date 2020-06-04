import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducer';
import Navigation from './src/navigation';

export default function App(){
  const store = createStore(reducers);
  return(
   <Provider store={store}>
     <Navigation />
   </Provider>  
  );
}


