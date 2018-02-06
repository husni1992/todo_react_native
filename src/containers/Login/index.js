import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { bindActionCreators } from "redux";

import Images from "../../config/themes/images";
import LoginForm from "./LoginForm";
import { LoginStyles } from "./styles";
import * as actions from "../../store/modules/auth/auth.actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  resetRouteAndNavigateToHome() {
    // reset navigator, to make it unable to naviagate back to login screen
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "HomePage" })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  successCallback(response) {
    const authInfo = JSON.parse(response.payload);
    this.props.actions.loginSuccess(response.authToken);
    this.resetRouteAndNavigateToHome();
  }

  failedCallback(error) {
    this.props.actions.loginError(error);
  }

  onLogin(data) {
    const formdata = {
      email: "mgha1233@gmail.com",
      password: "password!@#"
    };
    this.props.actions.login(
      formdata,
      this.successCallback.bind(this),
      this.failedCallback.bind(this)
    );
  }

  componentWillMount() {
    // console.log("Running");
  }

  render() {
    if (this.state.isLoggedIn) {
      return <View />;
    }
    return (
      <View style={LoginStyles.container}>
        <View style={LoginStyles.logoContainer}>
          <Text style={LoginStyles.title}>An app made to detect Cerebral Palsy</Text>
        </View>
        <View style={LoginStyles.formContainer}>
          <LoginForm onLogin={this.onLogin.bind(this)} />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Register");
          }}
          style={{ paddingBottom: 15 }}
        >
          <Text style={LoginStyles.newUserText}>I'm a new user</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
