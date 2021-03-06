import React, { useState, useEffect } from "react";
import SignIn from "./SignIn.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true,
      players: []
    };
    //this.handleLogin = this.handleLogin.bind(this);
  }

  // handleLogin(name, pw, option) {
  //   let body = { name, pw, option };
  //   fetch('/login', {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data.response === 'username already taken') {
  //         alert('Username already taken');
  //         return;
  //       } else {
  //         return;
  //       }
  //     })``
  //   this.setState({
  //     logged: !this.state.logged
  //   })
  // }
  componentDidMount() {
    fetch("https://api-nba-v1.p.rapidapi.com/seasons/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "a4d37d6f6bmsh035a573e8a63f5fp1c87bfjsnca31bfa1dff5"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {!this.state.logged && <SignIn login={this.handleLogin} />}
        {/* {this.state.logged && (
          <div>
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav>
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        )} */}
        <div>hi</div>
      </div>
    );
  }
}

export default App;