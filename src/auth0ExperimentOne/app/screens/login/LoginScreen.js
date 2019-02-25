import React, { Component } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import Auth0 from "react-native-auth0";

import {
  headerColorStyle,
  headerTextColorStyle,
  buttonStyle
} from "../../theme/Colors";
import styles from "./Login.styles";

AUTHO_SCOPE="openid offline_access profile email"
AUTH0_AUDIENCE="https://YOUR_AUTH0_DOMAIN/userinfo"

const auth0Config = {
  domain: ' auth0-experiment.auth0.com',
  clientId: 'CKUYzZNBtKHruFIP7ouQz4JjISAjmpHM',
  scope: 'openid offline_access profile email',
  audience: 'https://auth0-experiment.auth0.com/userinfo'
}

const auth0 = new Auth0({
  domain: auth0Config.domain,
  clientId: auth0Config.clientId
});

/**
 * Use to provide login/authentication using the Auth0 API.
 */
export default class LoginScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Login",
      headerStyle: {
        backgroundColor: headerColorStyle
      },
      headerTitleStyle: {
        color: headerTextColorStyle
      }
    };
  };

  /**
   * Use to determine if the screen has initialized.
   */
  state = {
    hasInitialized: false
  };

  /**
   * Use to perform an early check to determine if the user's access token exists.
   */
  componentDidMount() {
    console.log(`Determine if an access token exists for the user.`);

    /**
     * Attempt to retrieve token for storage:
     * 1. if token exists, 
     *    a. use token and Auth0 to authenticate user
     *    b. if authenticated, route user to the [default app screen] with [data].
     *    c. if error during authentication (e.g., expired token), refresh token and restart
     * 2. if token does NOT exist
     *    a. initialization is [true/complete]
     *    b. user must [Login] via button.
     */

    this.setState({
      hasInitialized: true
    });
  }

  render() {
    return (
      // <View style={styles.container}>
      <View >
        <ActivityIndicator
          size="large"
          color="#05a5d1"
          animating={!this.state.hasInitialized}
        />
         {/* {this.state.hasInitialized && (
          <Button onPress={this.authorize()} title="Login" color={buttonStyle} />
        )} */}
        {true && (
          <Button onPress={this.authorize()} title="Login" color={buttonStyle} />
        )}
      </View>
    );
  }

  authorize() {
    console.log('Use Auth0 API to authorize user...');
    auth0.webAuth
      .authorize({
        scope: auth0Config.scope,
        audience: auth0Config.audience,
        // device: DeviceInfo.getUniqueID(),
        prompt: "login"
      })
      .then(authResponse => {
        auth0.auth
          .userInfo({ token: authResponse.accessToken })
          .then(data => {
            this.routeToHome(data);
          })
          .catch(error => {
            console.log("Error: ");
            console.log(JSON.stringify(error));
          });

        // persist the [accessToken] and the [refreshToken] 
      })
      .catch(error => {
        console.log(error);
      });
  }

  routeToHome = userInformation => {
    this.setState({
      hasInitialized: true
    });

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "Home",
          params: {
            name: userInformation.name,
            picture: userInformation.picture
          }
        })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  };
}