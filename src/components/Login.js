import React, { Component } from 'react';
import './login.css';
import {
    withRouter
} from "react-router-dom";
class Login extends Component {
    constructor() {
        super();
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddSubmit(event) {
        event.preventDefault();
        let username = event.target['username'].value;
        let password = event.target['password'].value;

        let users = {
            username: username,
            password: password
        }
        let postInJson = JSON.stringify(users);
        console.log(postInJson);
        fetch("http://127.0.0.1:8000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: postInJson
        }).then((response) => {
            return response.json();
        }).then((response) => {
            //console.log(response.user_id);
            localStorage.setItem("token", response.token);
            this.props.history.push("/userhome");
        });
    }
    render() {
        return (
            <div>
                <form class="login" onSubmit={this.onAddSubmit}>
                    <h3><center>Login</center></h3>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <a href="#" class="forgot">forgot password?</a>
                    <input type="submit" value="Sign In" />
                </form>
                <div class="shadow"></div>
            </div>

        );
    }
}
export default withRouter(Login);