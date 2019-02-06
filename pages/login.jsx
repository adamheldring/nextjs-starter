import React, { Component } from "react";
import apiHelper from "../shared/helpers/apiHelper";

export default class LoginPage extends Component {
  state = { email: "", password: "" };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    const onSuccess = ({ data }) => {
      apiHelper.setToken(data.token);

      apiHelper.get("/api/v1/me/").then(({ data }) => console.log(data));
    };

    const onError = error => console.log(error);

    console.log(payload);

    apiHelper
      .post("/api-token-auth/", payload)
      .then(onSuccess)
      .catch(onError);
  };

  render() {
    return (
      <div className="container">
        <div className="row p-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mr-auto ml-auto">
            <form className="form-signin" onSubmit={this.handleSubmit}>
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
