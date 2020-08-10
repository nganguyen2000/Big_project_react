import React, {component, Component} from 'react';
import './headerAdmin.css';
import { FaUser } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class HeaderAdmin extends Component{
    constructor(){
        super();
        let id_user = localStorage.getItem("token");
        
       
        this.logout = this.logout.bind(this);
    }
    logout(){
        localStorage.removeItem('token');
       
    }
    
    render(){
        return(
            <div className="container">
                <div className="container-header">
                        <img src="./img/logo.jpg" alt="" width="170px" height="170px"/>
                        <nav>
                        <ul className="menuItems">
                            <li><Link className="a" to="/">Home</Link></li>
                            <li><Link className="a"to="/manageProducts">Products</Link></li>
                            <li><Link className="a" to="/addproduct">AddProducts</Link></li>
                            <li><Link className="a" to="/post">Post</Link></li>
                            <li><Link className="a" to="/addpost">Add post</Link></li>

                        </ul>
                        </nav>
                     <div>
                        <div className="contain_bt">
                                {/* <button className="btn-login" onClick={this.logout}><FaUser/>Logout</button> */}
                                <button className="btn-login"  onClick={this.logout} type="submit"><FaUser/>Logout</button>
                        </div>
                        <img src="./img/logo1.jpg" alt="" width="140px" height="140px"/>
                    </div>
                    
                </div>
                
                
            </div>
           
        );
    }
}
export default HeaderAdmin;

