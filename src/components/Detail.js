import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './detail.css';
import {withRouter} from 'react-router-dom';
class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
        let id = this.props.match.params.id;
      // console.log(id);
      this.getDeatail(id);
    }
    getDeatail(id){
        fetch("http://127.0.0.1:8000/api/home/detail/" + id)
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
    render(){
        return(
            <div>
                <Header/>
                <div>
                    {this.state.products.map(item=>
                    <div className="content1">
                        <div className="ct_detail1">
                        <img src={"http://127.0.0.1:8000"+item.image} alt="" width="350px" height="350px"/>
                        </div>
                        
                        <div className="ct_detail2">
                            <h2>{item.name}</h2>
                            <p>{item.detail.content}</p>
                            <p>Quantity: 1</p>
                            <h5>{item.oldPrice} VND</h5>
                            <h4>{item.price} VND</h4>
                            <br/>
                            <br/>
                            <button>Add to cart</button>
                           
                        </div>
                    
                     </div>
                    )}
                   
                </div>
                <Footer/>

            </div>
        );
    }

}
export default withRouter(Detail);
