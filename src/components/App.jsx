import React, {useState, useEffect} from 'react';
import SignIn from './SignIn.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(name, pw, option) {
    let body = { name, pw, option };
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.response === 'username already taken') {
          alert('Username already taken');
          return;
        } else {
          return;
        }
      })`` 
    this.setState({
      logged: !this.state.logged
    })
  }

  render() {
    return (
      <div>
        {!this.state.logged && <SignIn login={this.handleLogin}/>}
      {this.state.logged && <div>
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
        </div>}
      </div>
    )
  }
}

export default App;