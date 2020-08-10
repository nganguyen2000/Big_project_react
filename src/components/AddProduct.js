import React, { component, Component } from "react";
import './addProduct.css';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          products:[],
          product:[]
        };

        this.getData();
        this.onAddProduct = this.onAddProduct.bind(this);
       
       
      }
      getData() {
        fetch("http://127.0.0.1:8000/api/addproduct").then((response) => {
          response.json().then((data) => {
           console.log(data);
            this.updateUI(data);
          });
        });
      }
      updateUI(data) {
        this.setState({
          categories: data,
        });
      }

      onAddProduct(event) {
        event.preventDefault();

        let name = event.target['name'].value;
        let price = event.target['price'].value;
        let oldPrice = event.target['oldPrice'].value;
        let image = event.target['image'].value;
        let category_id = event.target['category_id'].value;
        let content = event.target['content'].value;
        let quantity = event.target['quantity'].value;
        console.log(content);
        
        let user_id = localStorage.getItem("token");
        console.log(user_id);

        let productinfo = {
           
            name:name,
            price:price,
            oldPrice: oldPrice,
            image:image,
            quantity:quantity,
            content:content,
            category_id:category_id,
            user_id:user_id
           
        }

        let productInJson = JSON.stringify(productinfo);
        console.log(productInJson);

        fetch("http://127.0.0.1:8000/api/add-product", {
            method: "post",
            headers: {
                "Content-Type":"applicati0on/json"
            },
            body: productInJson
        })
        .then((response) => {
            console.log(response);
            alert ("congulation!");
        });
    }
    
render(){
    return(
        <div>
            <HeaderAdmin/>
            <div>
            <form onSubmit = {this.onAddProduct} method="post">
                    <h3 class="title">Add New Product</h3>
                    <ul class="form-style-1">
                        <li>
                            <label>Name Product <span class="required">*</span></label>
                            <input type="text" name="name" class="field-long" />
                        </li>
                        <li>
                            <label>Price <span class="required">*</span></label>
                            <input type="number" name="price" class="field-long" />
                        </li>
                        <li>
                            <label>Old Price<span class="required"></span></label>
                            <input type="number" name="oldPrice" class="field-long" />
                        </li>
                        <li>
                            <label>Quantity<span class="required"></span></label>
                            <input type="number" name="quantity" class="field-long" />
                        </li>
                        <li>
                            <label>Link image<span class="required"></span></label>
                            <input type="text" name="image" class="field-long" />
                        </li>
                       
                        <li>
                            <label>Product Type</label>
                            <select name="category_id" class="field-select">
                            {
                                this.state.categories.map((cate)=>(
                                <option value={cate.id}>{cate.name}</option>
                                
                                ))
                            }
                            
                            </select>
                        </li>
                        <li>
                            <label>Product Detail <span class="required">*</span></label>
                            <textarea name="content" id="field5" class="field-long field-textarea"></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Add product" />
                        </li>
                    </ul>
            </form>
            </div>
            <Footer/>
        </div>
    );
}
 
}
export default AddProduct;
