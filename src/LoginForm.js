import React, { Component } from "react";
import "./assets/style.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.cbNameRef = null;
    this.cbPassRef = null;
    this.setCbPass = (element) => {
      this.cbPassRef = element;
    };

    this.setCbName = (element) => {
      this.cbNameRef = element;
    };
  }

  componentDidMount() {
    if (this.cbNameRef) {
      this.cbNameRef.focus();
    }
  }
  reSet = () => {
    if (this.cbNameRef) {
      this.cbNameRef.focus();
      this.cbNameRef.value = "";
      this.cbPassRef.value = "";
    }
  };

  render() {
    return (
      <div className="login">
        <label id="align-left" for="uname">
          User Name
        </label>
        <input className="box" id="uname" type="text" ref={this.setCbName} />
        <br />
        <label id="align-left" for="pass">
          Password
        </label>
        <input className="box" id="pass" typ="password" ref={this.setCbPass} />
        <div className="buttonsWrapper">
          <div class="btnWrapper">
            <button
              className="LoginBtnWrapper  btnStyle"
              onClick={this.props.loginHandler}
            >
              Login
            </button>
          </div>
          <div class="btnWrapper">
            <button className="ResetBtnWrapper  btnStyle" onClick={this.reSet}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
