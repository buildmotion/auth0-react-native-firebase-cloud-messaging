import React from "react";
import { StackNavigator } from "react-navigation";

import LoginScreen from "./app/screens/login/LoginScreen";
import HomeScreen from "./app/screens/home/HomeScreen";

const Stack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
     screen: HomeScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default Stack;
