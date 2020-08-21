import React, { component, Component } from 'react';
import './products.css';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {
    withRouter,
    Link
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
        let id=this.props.item;
        this.DeleteProduct(id);
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
    DeleteProduct(id){
        return(event)=>{
        fetch("http://127.0.0.1:8000/api/delete/product/"+id,{
            method:"DELETE",
            headers:{
                "content-Type":"application/json"
            },
        }).then(response=>{
            console.log(response);
            alert("already delete products");
        }).then((response) => {
            this.refresh();
        });}

    }
    refresh = () => {
        window.location.reload();
    }
   

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
                                <td> <img src={"http://127.0.0.1:8000"+product.image} alt="" width="150px" height="150px"/></td>
                                <td>{product.price}</td>
                                <td>{product.oldPrice}</td>
                                <td>{product.quantity}</td>
                                <td><button className="bt_delete" type="submit" onClick={this.DeleteProduct(product.id)}>Delete</button></td>
                                <Link to={"/edit/" + product.id}><button className="bt_update" type="">Update</button></Link>
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
