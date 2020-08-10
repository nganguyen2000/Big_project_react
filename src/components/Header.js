import React, {component, Component} from 'react';
import './header.css';
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import {withRouter} from 'react-router';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Header extends Component{
    render(){
        return(
            <div className="container">
                <div className="container-header">
                        <img src="/img/logo.jpg" alt="" width="170px" height="170px"/>
                        <nav>
                            <ul className="menuItems">
                                <li><a href="#" data-item='Home'>Home</a></li>
                                <li><a href='#' data-item='Products'>Products</a></li>
                                <li><a href="#" data-item='Post Product'>Post Product</a></li>
                                <li><a href='#' data-item='Contact'>Contact</a></li>
                            </ul>
                        </nav>
                     <div>
                        <div className="contain_bt">
                                <Link to="/login"><button className="bt_log" type=""><FaUser/>Login</button></Link>
                                <Link to="/register"><button className="bt_re" type=""><FaUserPlus/>Register</button></Link>
                        </div>
                        <img src="/img/logo1.jpg" alt="" width="140px" height="140px"/>
                    </div>
                    
                </div>
                
                
            </div>
            
           
        );
    }
}
export default withRouter(Header);

