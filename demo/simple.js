/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Modal } from "./modal";

import { componentWillAppendToBody } from "../src/";

// const AppendedModal = componentWillAppendToBody(Modal)
function AfterNav({ children }) {
  return <div>{children}</div>;
}

const AppendedAfterNav = componentWillAppendToBody(AfterNav);
AppendedAfterNav.contextTypes = {
  router: React.PropTypes.any.isRequired
};

const Dashboard = () => <div>Dashboard</div>;
const Chores = () => <div>Chores</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <AppendedAfterNav>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/chores">Chores</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </AppendedAfterNav>
            <Switch>
              <Route
                path="/dashboard"
                render={routeProps => <Dashboard {...routeProps} />}
              />
              <Route
                path="/chores"
                render={routeProps => <Chores {...routeProps} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("app"));
