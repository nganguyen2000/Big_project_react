import React ,{Component} from 'react';
import './addProduct.css';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {withRouter} from 'react-router-dom';
class Edit extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            categories:[]
        }
        let id = this.props.match.params.id;
        this.getData();
        this.getDeatail(id);
        
        // let name = this.props.match.params.name;
        // console.log(id);
        this.onAddProduct = this.onAddProduct.bind(this);
    }
    getDeatail(id){
        fetch("http://127.0.0.1:8000/api/product/edit/" + id)
                .then(response => {
                        response.json().then((data) =>  {
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

      getData() {
        fetch("http://127.0.0.1:8000/api/addproduct").then((response) => {
          response.json().then((data) => {
           console.log(data);
            this.updateUIcate(data);
          });
        });
      }
      updateUIcate(data) {
        this.setState({
          categories: data,
        });
      }

      onAddProduct(event) {
        event.preventDefault();

        let id = event.target['id'].value;
        let name = event.target['name'].value;
        let price = event.target['price'].value;
        let oldPrice = event.target['oldPrice'].value;
        let image = event.target['image'].files[0];
        let category_id = event.target['category_id'].value;
        let content = event.target['content'].value;
        let quantity = event.target['quantity'].value;
        console.log(content);
        
        let user_id = localStorage.getItem("token");
        //console.log(user_id);

        let productinfo = new FormData();
        productinfo.append('name',name);
        productinfo.append('price',price);
        productinfo.append('oldPrice',oldPrice);
        productinfo.append('image',image);
        productinfo.append('quantity',quantity);
        productinfo.append('content',content);
        productinfo.append('category_id',category_id);
        productinfo.append('user_id',user_id);


        fetch("http://127.0.0.1:8000/api/product/update/" +id,{
            method: "POST",
            body: productinfo
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
                {this.state.products.map(item=>
                <form onSubmit= {this.onAddProduct} method="post" encType="multipart/form-data">
                    <h3 class="title">Update Product</h3>
                    <ul class="form-style-1">
                       <li>
                            <label>Id Product<span class="required">*</span></label>
                            <input type="text" name="id" class="field-long"  defaultValue={item.id} readOnly/>
                        </li>
                        <li>
                            <label>Name Product<span class="required">*</span></label>
                            <input type="text" name="name" class="field-long"  defaultValue={item.name}/>
                        </li>
                        <li>
                            <label>Price <span class="required">*</span></label>
                            <input type="number" name="price" class="field-long"  defaultValue={item.price} />
                        </li>
                        <li>
                            <label>Old Price<span class="required"></span></label>
                            <input type="number" name="oldPrice" class="field-long" defaultValue={item.oldPrice} />
                        </li>
                        <li>
                            <label>Quantity<span class="required"></span></label>
                            <input type="number" name="quantity" class="field-long" defaultValue={item.quantity} />
                        </li>
                        <li>
                            <label>Link image<span class="required"></span></label>
                            <input type="file" name="image" id="image"/>
                        </li>
                       
                        <li>
                            <label>Product Type</label>

                            <select name="category_id" class="field-select">
                            {this.state.categories.map(cate=>
                                <option value={cate.id}>{cate.name}</option>
                            )}
                            </select>
                        </li>
                        <li>
                            <label>Product Detail <span class="required">*</span></label>
                            <textarea name="content" id="field5" class="field-long field-textarea"  defaultValue={item.detail.content}></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Add product" />
                        </li>
                    </ul>
            </form>
             )}
         </div>
                <Footer/>

            </div>
        );
    }

}
export default withRouter(Edit);