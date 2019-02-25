import React, { Component } from "react";
import { 
  Text, 
  View
   } from "react-native";

import {
  headerColorStyle,
  headerTextColorStyle
} from "../../theme/Colors";
import styles from "./HomeScreen.styles";

export default class HomeScreen extends Component { 
    render() {
        return (
          // <View style={styles.headerColorStyle}>
          <View>
            <Text>Welcome Home!</Text>
          </View>
        );
      }
}
