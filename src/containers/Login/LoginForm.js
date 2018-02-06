import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { FormStyles } from "./styles";
import colors from "../../config/themes/colors";
import Images from "../../config/themes/images";

export class LoginForm extends Component {
  state = {
    username: null,
    password: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.isLoggingIn != nextProps.isLoggingIn ||
      this.state.username != nextState.username ||
      this.state.password != nextState.password
    ) {
      return true;
    }
    return false;
  }

  render() {
    const loginDisabled = !this.state.username || !this.state.password;
    return (
      <View style={FormStyles.container}>
        <TextInput
          placeholder="Enter email"
          placeholderTextColor="rgba(225,225,225,0.7)"
          onChangeText={newValue => this.setState({ username: newValue })}
          underlineColorAndroid="transparent"
          style={FormStyles.input}
        />
        <TextInput
          secureTextEntry
          placeholder="Enter password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={newValue => this.setState({ password: newValue })}
          style={FormStyles.input}
        />
        <TouchableOpacity
          style={FormStyles.loginBtn}
          onPress={() => this.props.onLogin(this.state)}
        >
          <Text style={FormStyles.buttonText}>LOGIN</Text>
          {this.props.isLoggingIn ? (
            <ActivityIndicator style={FormStyles.loader} size="small" color="#00ff00" />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggingIn: state.auth.isLoggingIn
  };
}

export default connect(mapStateToProps)(LoginForm);
