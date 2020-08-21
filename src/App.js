import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Admin from './components/Admin';
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './components/UserHome';
import Detail from './components/Detail';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Edit from './components/Edit';
import Addtocart from './components/Addtocart';
import Cart from './components/Cart';

class App extends React.Component{
  render(){
    return (
      <Router>
        <switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/admin" exact>
            <Admin/>
          </Route>
         <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/userhome" exact>
            <UserHome/>
          </Route>
          <Route  path={"/detail/:id"}>
            <Detail/>
        </Route>
        <Route  path={"/addtocart/:id"}>
            <Addtocart/>
        </Route>
        <Route path="/addProduct" exact>
            <AddProduct/>
        </Route>
        <Route path="/manageProducts" exact>
            <Products/>
        </Route>
        <Route path={"/edit/:id"} exact>
            <Edit/>
        </Route>
        <Route path="/cart" exact>
            <Cart/>
        </Route>
        </switch>
        
      </Router>
       
       
     
      )
  }
 
}

export default App;
