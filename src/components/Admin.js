import React, {component, Component} from 'react';
import './home.css';
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {
  Link
} from "react-router-dom";
class Admin extends Component{
    constructor() {
        super();
        this.state = {
          products: [],
        };
        this.getData();
      }
      getData() {
        fetch("http://127.0.0.1:8000/api/home/product").then((response) => {
          response.json().then((data) => {
           console.log(data);
            this.updateUI(data);
          });
        });
      }
      updateUI(data) {
        this.setState({
          products: data,
        });
      }
    render(){
        return(
            <div className="container">
                <HeaderAdmin/>
                <div className="sp">
                    {this.state.products.map((item) => (
                    <div className="item">
                        <div className="content">
                        <img src={"http://127.0.0.1:8000/"+item.image} alt="" width="250px" height="250px"/>
                            <h3>{item.name}</h3>
                            <div className="contain_pr">
                                <p className="price">{item.price} VNĐ</p>
                                <p className="oldPrice">{item.oldPrice} VNĐ</p>
                            </div>
                            <Link to={"/detail/" + item.id}><button className="btn-detail" type="">Detail</button></Link>
                    
                            <button className="btn-add" type="">Add to cart</button>
                        </div>
                       
                    </div>
                    ))}
                </div>
                
                <Footer/>
            </div>
            
           
        );
    }
}
export default Admin;

