import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, TodoList, TodoDetail } from './pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route path="/todos/:id" component={TodoDetail} />
            <Route path="/todos" component={TodoList} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}