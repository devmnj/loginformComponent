import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Form extends Component {
  constructor(props) {
    super(props);
    this.callBackRef = null;
    this.setCbRef = (element) => {
      this.callBackRef = element;
    };
  }

  loginHandler = () => {
    alert("User :" + this.callBackRef.cbNameRef.value);
  };
  render() {
    return (
      <div>
        <LoginForm ref={this.setCbRef} loginHandler={this.loginHandler} />
      </div>
    );
  }
}

export default Form;
