import React, {component, Component} from 'react';
import './headerAdmin.css';
import { FaUser } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Link,
    withRouter
  } from "react-router-dom";
 

class HeaderAdmin extends Component{
    constructor(props){
        super(props);
        let id_user = localStorage.getItem("token");
        this.logout = this.logout.bind(this);
    }
    logout(){
        localStorage.removeItem('token');
       // this.setState({ redirect: true })
       this.props.history.push("/");
    }
   
    
    render(){
        return(
            <div className="container">
                <div className="container-header">
                        <img src="./img/logo.jpg" alt="" width="170px" height="170px"/>
                        <nav>
                            <ul className="menuItems1">
                                <li><Link className="a" to="/userhome">Home</Link></li>
                                <li><Link className="a"to="/manageProducts">Products</Link></li>
                                <li><Link className="a" to="/addproduct">AddProducts</Link></li>
                                <li><Link className="a" to="/post">Post</Link></li>
                                <li><Link className="a" to="/addpost">About us</Link></li>
                            </ul>
                        </nav>
                     <div>
                        <div className="contain_bt">
                                {/* <button className="btn-login" onClick={this.logout}><FaUser/>Logout</button> */}
                                <button className="btn-login"  onClick={this.logout} type="submit"><FaUser/>Logout</button>
                        </div>
                        <div class="cart">
                            <img src="./img/logocart.jpg" alt="Snow" width="70" height="70"/>
                            <Link to="/cart"><button class="btn">Button</button></Link>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
           
        );
    }
}
export default withRouter(HeaderAdmin);

