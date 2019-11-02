/*import React, { Component } from "react";
/import Facebook from './components/Facebook';
import "./Config";
import * as firebase from "firebase";

export default class App extends Component {
  state = {
    name: "",
    age: "",
    //  phone: "",
    //email: "",
    data: []
  };
  componentDidMount() {
    //    firebase;
    //.database()
    //.ref("users")
    //.push({
    // name: "zubair",
    //age: "21"
    firebase
      .database()
      .ref("users")
      .once("value")
      .then(snapShot => {
        snapShot.forEach(item => {
          this.state.data.push(item.val());
        });
      });
  }
}

Submit = e => {
  e.preventDefault();
  firebase
    .database()
    .ref("users")
    .push({
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone,
      email: this.state.email
    });
};

render();
{
  return (
    <div>
      {console.log(this.state)}
      <form onSubmit={e => this.Submit(e)}>
        <input
          placeholder="name"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />

        <input
          placeholder="age"
          onChange={e => this.setState({ age: e.target.value })}
        />
        <input type="Submit" />
      </form>
    </div>
  );
}
*/
import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import "./Config";
//import * as firebase from "firebase";
//import { throwStatement } from "@babel/types";
//import Formvalidation from "./components/Formvalidation";
import Todos from "./components/Todos";
//import Form from "./components/Form";
import "./components/TodoItems";
import TodoItems from "./components/TodoItems";
class App extends React.Component {
  /*state = {
    data: [],
    name: "",
    age: ""
  };

  componentDidMount() {
    // pushing data in firebase
    // firebase
    //   .database()
    //   .ref("tb_users")
    //   .child("01")
    //   .set({
    //     name: "ali haider",
    //     age: 21
    //   });
    // firebase
    //   .database()
    //   .ref("tb_users")
    //   .push({
    //     name: "Zeeshan",
    //     age: 21
    //   });
    // fetching data in firebase
    // firebase
    //   .database()
    //   .ref("tb_users")
    //   .on("child_added", snapshot => {
    //     // console.log(snapshot.val());
    //     snapshot.forEach(res => {
    //       // console.log(res.val());
    //       this.state.data.push({
    //         id: res.key,
    //         ...res.val()
    //       });
    //       // console.log(res.key);
    //       console.log(this.state);
    //     });
    //   });

    // update data
    firebase
      .database()
      .ref("tb_users")
      .child("-Lr3IVftNOEMP4ejtvq2")
      .update({ age: 22 });

    // remove data
    // firebase
    // .database()
    // .ref("tb_users")
    // .child("-Lr3IVftNOEMP4ejtvq2")
    // .remove();
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
          if (item.val().name === this.state.name) {
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
              name: this.state.name,
              age: this.state.age
            });
        }
      });
  };

    render() {
    return (
      <div>
        {console.log(this.state)}

        <form onSubmit={e => this.Submit(e)}>
          <input
            placeholder="name"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            placeholder="age"
            onChange={e => this.setState({ age: e.target.value })}
            value={this.state.age}
          />
          <input type="submit" />
        </form>
        <Form />
      </div>
    );
  }*/
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div>
        <Todos
          addItem={this.addItem}
          handleInput={this.handleInput}
          inputElement={this.inputElement}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
export default App;
