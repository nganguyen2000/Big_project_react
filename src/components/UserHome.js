import React, {Component} from 'react';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {
  Link
} from "react-router-dom";
class UserHome extends Component{
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
            <div>
                <HeaderAdmin/>
                <div className="sp">
                    {this.state.products.map((item) => (
                    <div className="item">
                        <div className="content">
                            <img src={item.image} alt="" width="250px" height="250px"/>
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
export default UserHome;