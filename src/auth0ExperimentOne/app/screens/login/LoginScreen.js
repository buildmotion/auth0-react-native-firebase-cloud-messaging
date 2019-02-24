import React, { Component } from "react";
import { View, Text, } from "react-native";

import {
  headerColorStyle,
  headerTextColorStyle,
  buttonStyle
} from "../../theme/Colors";
import styles from "./Login.styles";

/**
 * Use to provide login/authentication using the Auth0 API.
 * 
 * ProTip: Make sure to `export` the class to allow it to be consumed.
 */
export default class LoginScreen extends Component {
    render() {
      return (
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
          <Text>Login</Text>
        </View>
      );
    }
  }