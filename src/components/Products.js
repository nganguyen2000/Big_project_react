import React, { component, Component } from 'react';
import './products.css';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {
    withRouter
} from "react-router-dom";
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsOfUser: []
        }
        let token = localStorage.getItem("token");
        console.log(token);
        this.getDataProducts(token);
        // let id=this.props.item;
        // this.onDelete(id);
    }

    getDataProducts(token) {
        fetch("http://127.0.0.1:8000/api/show/products", {
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
            productsOfUser: data,
        });
    }


    // getDataProducts(user_id){
    //     fetch("http://127.0.0.1:8000/api/show/products",{
    //         headers: {
    //             "Content-Type":"application/json",
    //             "Authorization":user_id
    //         },
    //     }).then(response => {
    //             response.json().then((data) => {
    //                     this.setState({productsOfUser:data});
    //             });
    //     });
    // }

    render() {
        return (
            <div>
                <HeaderAdmin />
                <div className="container1">
                    <table>
                        <tr>
                            <th>Id Product</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Old Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        {this.state.productsOfUser.map((product) =>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.image}</td>
                                <td>{product.price}</td>
                                <td>{product.oldPrice}</td>
                                <td>{product.quantity}</td>
                                <td><button>Delete</button></td>
                                <td><button>Edit</button></td>
                            </tr>
                        )}


                    </table>
                </div>
                <Footer />
            </div>
        );
    }

}
export default withRouter(Products);
