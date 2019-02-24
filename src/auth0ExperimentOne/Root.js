import React from "react";
import { StackNavigator } from "react-navigation";

import LoginScreen from "./app/screens/login/LoginScreen";

const Stack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default Stack;
