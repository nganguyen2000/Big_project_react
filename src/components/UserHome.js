import React, {Component} from 'react';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {
  Link,
  withRouter
} from "react-router-dom";
class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
          products: [],
        };
        this.getData();
        let id=this.props.item;
        this.onAddToCart(id);
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
      onAddToCart(id){
        return(event)=>{
          let user_id = localStorage.getItem("token");
          let quantity = 1;


          let cartinfo = new FormData();
          cartinfo.append('quantity',quantity);
          cartinfo.append('user_id',user_id);
         
          fetch("http://127.0.0.1:8000/api/cart/add/"+id, {
              method: "post",
              body: cartinfo
          })
          .then((response) => {
              console.log(response);
              alert ("congulation!");
          });

      }
    }
      refresh = () => {
        window.location.reload();
      }
    render(){
        return(
            <div>
                <HeaderAdmin/>
                <div className="sp">
                    {this.state.products.map((item) => (
                    <div className="item">
                        <div className="content">
                            <img src={"http://127.0.0.1:8000"+item.image} alt="" width="250px" height="250px"/>
                            <h3>{item.name}</h3>
                            <div className="contain_pr">
                                <p className="price">{item.price} VNĐ</p>
                                <p className="oldPrice">{item.oldPrice} VNĐ</p>
                            </div>
                            <Link to={"/detail/" + item.id}><button className="btn-detail" type="">Detail</button></Link>
                           
                            {/* <Link to={"/addtocart/" + item.id}> <button className="btn-add" type="submit">Add to cart</button></Link> */}
                            <button className="btn-add" type="submit" onClick={this.onAddToCart(item.id)}>Add to cart</button>
                           
                        </div>
                       
                    </div>
                    ))}
                </div>
                <Footer/>
            </div>
        );
    }
}
export default withRouter (UserHome);