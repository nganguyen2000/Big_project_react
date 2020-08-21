import React,{Component} from 'react';
import './cart.css';
import {
    withRouter,
    Link
} from "react-router-dom";
class Cart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cartOfUser: []
        }
        let token = localStorage.getItem("token");
        console.log(token);
        this.getDataCarts(token);
    }

    getDataCarts(token) {
        fetch("http://127.0.0.1:8000/api/show/cart", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.updateUI(data);
            });
    }

    updateUI(data) {
        this.setState({
            cartOfUser: data,
        });
    }
    render(){
        return(
            <div className="containerCart">
                <div className="headerCart">
                    <h1 class="projTitle1">Big Secondhand<span>-app</span></h1>
                    <h1 class="projTitle2">Shopping Cart</h1>
                    <div class="headingt">
                        <div><h1 class="mycart">My Cart</h1></div>
                        <div class="cartbtt"><a href="#" class="continue">Continue Shopping</a></div>
                    </div>
                </div>
                <div className="contentCart">
                    <div>
                    <table className="tableCart">
                        {this.state.cartOfUser.map((item)=>
                        <tr>
                            <td><p>{item.products[0].name}</p></td>
                            <td><img src={"http://127.0.0.1:8000"+item.products[0].image} alt="" width="150px" height="150px"/></td>
                            <td>{item.products[0].price}</td>
                            <td>
                                <button type="submit" name="plus">+</button>
                                <input class="sl" name="quantity" defaultValue={item.quantity}/>
                                <button type="submit" name="minus">-</button>
                            </td>
                            <td><button>Delete</button></td>
                        </tr>
                        )}
                    </table>
                    </div>
                </div>
                <div className="footerCart"></div>
            </div>
        );
    }

}
export default withRouter(Cart);