import * as firebase from "firebase";
import "./Config";
import React, { Component } from "react";

export default class Formvalidation extends Component {
  state = {
    Data: [],
    Email: "",
    Password: ""
  };

  componentDidMount() {
    firebase
      .database()
      .ref("tb_users")
      .push({
        Name: this.state.Email,
        Password: this.state.Password
      });
  }

  Submit = e => {
    e.preventDefault();

    let isValid = false;

    firebase
      .database()
      .ref("tb_users")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(item => {
          if (item.val().Name === this.state.Name) {
            isValid = true;
          }
        });
      })
      .then(() => {
        if (isValid) {
          alert("duplcate name");
        } else {
          firebase
            .database()
            .ref("tb_users")
            .push({
              Name: this.state.Name,
              Password: this.state.Password
            });
        }
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.Submit(e)}>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={e => this.setState({ Name: e.target.value })}
                value={this.state.Name}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={e => this.setState({ Password: e.target.value })}
                value={this.state.Password}
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </form>
      </div>
    );
  }
}
