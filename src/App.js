import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
    
      <div >
        <Navbar/>
        <Header/> 
        <Container/>
        <Footer/>        
      </div>
    );
  }
}

 
export default App;
