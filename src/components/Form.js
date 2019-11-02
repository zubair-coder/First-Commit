import React, { Component } from "react";
import * as firebase from "firebase";
//import Config from "Forms\form-appsrcConfig.js";
export default class Form extends Component {
  state = {
    Name: "",
    Password: ""
  };

  componentDidMount() {
    // pushing data in firebase
    // firebase
    //.database()
    //.ref("tb_users")
    //.push(
    //{
    //name: "Zeeshan",
    //age: 21
    //});
    // }

    handleName = e => {
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
                Name: this.state.Name
              });
          }

          handlePassword = e => {
            //this.setState = {
            //Password: e.target.value
            {
              e.preventDefault();

              firebase
                .database()
                .ref("tb_users")
                .push({
                  //name: this.state.name,
                  Password: this.state.Password
                });
            }

            render();
            {
              return (
                <div>
                  <form>
                    <label>
                      Name:
                      <input
                        type="text"
                        value={this.state.Name}
                        onChange={e => this.setState({ Name: e.target.value })}
                      />
                    </label>
                    <br />
                    <br />
                    <label>
                      Password:
                      <input
                        type="text"
                        value={this.state.Password}
                        onChange={e =>
                          this.setState({ Password: e.target.value })
                        }
                      />
                    </label>
                  </form>
                </div>
              );
            }
          };
        });
    };
  }
}
