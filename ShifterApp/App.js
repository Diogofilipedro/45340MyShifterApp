import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import {firebase} from './config'; 

import Login from "./src/Login";
import Registraition from "./src/Registraition";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";


const Stack = createStackNavigator(); 

function App(){
  const [initializing, setInisitalzaing] = useState(true); 
  const [user, setUser] = useState(); 


  function onAuthStateChange(user) {
    setUser(user); 
    if (initializing) setInisitalzaing(false); 
  }


  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChange); 
    return subscriber;
  }, []); 

  if (initializing) return null; 

  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: () => <Header name ="Shifter App" />, 
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50, 
            borderBottomRightRadius:50, 
            backgroundColor: '#00e4d0', 
            shadowColor: '#000', 
            elevation:25 
          }
        }}
        /> 
        <Stack.Screen
        name="Registration"
        component={Registraition}
        options={{
          headerTitle: () => <Header name ="Shifter App" />, 
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50, 
            borderBottomRightRadius:50, 
            backgroundColor: '#00e4d0', 
            shadowColor: '#000', 
            elevation:25 
          }
        }}
        />
      </Stack.Navigator>
    );
  }

  return( 
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <Header name ="Home" />, 
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50, 
            borderBottomRightRadius:50, 
            backgroundColor: '#00e4d0', 
            shadowColor: '#000', 
            elevation:25 
          }
        }}
        />
    </Stack.Navigator>
  ); 

}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

