import React, { Component } from "react";

export default class LoginPage extends Component {
  state = { email: "", password: "" };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row p-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mr-auto ml-auto">
            <form className="form-signin">
              <h1 className="h3 mb-3 text-center">Please sign in</h1>
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control mb-2"
                placeholder="Email address"
                required=""
                autofocus=""
                onChange={this.handleEmailChange}
              />
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required=""
                onChange={this.handlePasswordChange}
              />
              <br />
              <button className="btn btn-primary btn-block" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
