import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import PropTypes from "prop-types";
import { BackHandler, Platform, View } from "react-native";
import { addNavigationHelpers } from "react-navigation";

import store from "./store";
import AppNavigator from "./config/routes";

class App extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <AppNavigator />;
   }
}

const AppRoot = () => (
   <Provider store={store}>
      <View style={{ flex: 1 }}>
         <App />
      </View>
   </Provider>
);

export default AppRoot;
