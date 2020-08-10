import React, { component, Component } from "react";
import './register.css';
class Register extends Component {
    onAddSubmit(event) {
        event.preventDefault();

        let name = event.target['name'].value;
        let username = event.target['username'].value;
        let password = event.target['password'].value;
        let address = event.target['address'].value;
        let phoneNumber = event.target['phoneNumber'].value;
        let email = event.target['email'].value;
        let money = 0;
        let role = "user";
        let user = {
           
            username:username,
            name:name,
            email:email,
            role: role,
            password:password,
            phoneNumber:phoneNumber,
            address:address,
            money:money
        }

        let userInJson = JSON.stringify(user);
        console.log(userInJson);

        fetch(" http://127.0.0.1:8000/api/register", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: userInJson
        })
        .then((response) => {
            console.log(response);
            alert('Register sucessfully!');
            //this.props.history.push("/posts"); // chuyển trang
        });
    }
    
render(){
    return(
        <div class="form-style-10">
           <h1>Sign Up Now!<span>Sign up and tell us what you think of the site!</span></h1>
            <form onSubmit = {this.onAddSubmit}>
                <div class="section"><span>1</span>First Name & Address</div>
                <div class="inner-wrap">
                    <label>Your Full Name <input type="text" name="name" /></label>
                    <label>Your User Name<input type="text" name="username" /></label>
                    <label>Address <textarea name="address"></textarea></label>
                </div>

                <div class="section"><span>2</span>Email & Phone</div>
                <div class="inner-wrap">
                    <label>Email Address <input type="text" name="email" /></label>
                    <label>Phone Number <input type="text" name="phoneNumber" /></label>
                </div>

                <div class="section"><span>3</span>Passwords</div>
                    <div class="inner-wrap">
                    <label>Password <input type="password" name="password" /></label>
                    
                </div>
                <div class="button-section">
                    <input type="submit" name="Sign Up" />
                    <span class="privacy-policy">
                    <input type="checkbox" name="field7"/>You agree to our Terms and Policy. 
                    </span>
                </div>
            </form>
            
     </div>
        
    );
}
 
}
export default Register;
