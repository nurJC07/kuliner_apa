import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import City from './pages/City';
import RestaurantDetail from'./pages/RestaurantDetail'



class App extends Component {
  render(){
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/city/:city_id" component={City} />
      <Route exact path="/restaurant/:restaurant_id" component={RestaurantDetail} />
      
      <Footer/>
    </Router>
   
    );
  }
}

export default App;
