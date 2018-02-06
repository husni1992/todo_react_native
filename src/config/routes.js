import React, { Component } from "react";
import { Image } from "react-native";
import { StackNavigator, TabNavigator, TabBarTop, TabBarBottom } from "react-navigation";

import Login from "../containers/Login";
import HomePage from "../containers/HomePage";

const MainScreenTabNavigator = TabNavigator(
  {
    HomePage: {
      screen: HomePage
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      pressColor: "#438e3d",
      scrollEnabled: false,
      activeTintColor: "white",
      inactiveTintColor: "grey",
      activeBackgroundColor: "#438e3d",
      showIcon: true,
      allowFontScaling: true,
      showLabel: true,
      labelStyle: {
        fontSize: 8
      },
      style: {
        height: 40,
        justifyContent: "flex-start",
        backgroundColor: "#262626"
      },
      indicatorStyle: {
        opacity: 0
      }
    }
  }
);

export default StackNavigator({
  Login: {
    screen: Login,
    headerMode: "none",
    header: null,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  HomePage: {
    screen: MainScreenTabNavigator,
    headerMode: "none",
    header: null,
    navigationOptions: {
      header: null
    }
  }
});
