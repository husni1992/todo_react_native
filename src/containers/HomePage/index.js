import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import * as todoActions from "../../store/modules/todo/todo.actions";

const { height, width } = Dimensions.get("window");

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  successCallback(response) {
    const todos = JSON.parse(response.payload).todos;
    this.setState({
      todos
    });
  }

  failedCallback(error) {
    alert("Error todos");
  }

  fetchTodos() {
    this.props.actions.fetchTodos(
      this.props.auth,
      this.successCallback.bind(this),
      this.failedCallback.bind(this)
    );
  }

  componentWillMount() {
    this.fetchTodos();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            height: 60,
            marginLeft: 4,
            marginRight: 4
          }}
        >
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Text style={{ fontSize: 25, color: "#6459f8" }}>Thursday, 10th</Text>
            <Text style={{ fontSize: 15, color: "#919196" }}>January</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={{ fontSize: 25, fontWeight: "400", color: "#c4c3de" }}>
              {`${this.state.todos.length} Tasks`}
            </Text>
          </View>
        </View>
        <View style={{ height: 70, justifyContent: "center", width: width }}>
          <View style={{ height: 1.5, backgroundColor: "#c4c3de" }} />
          <View
            style={{
              position: "absolute",
              right: 20,
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#f86b6a"
            }}
          />
        </View>
        <View style={{ flex: 1, margin: 5 }}>
          <TouchableOpacity
            onPress={this.fetchTodos.bind(this)}
            style={{
              width: 80,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "green",
              borderRadius: 4
            }}
          >
            <Text style={{ textAlign: "center" }}>Reload</Text>
          </TouchableOpacity>

          {this.state.todos.map(todo => {
            return (
              <View style={{ flex: 1 }} key={todo._id}>
                <Text>Text: {todo.text}</Text>
                <Text>Completed: {!todo.completed ? "no" : "yes"}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    todo: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
