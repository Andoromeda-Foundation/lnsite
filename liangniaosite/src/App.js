import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './pages/pageHome'
import Apps from './pages/pageApps'
import Blog from './pages/pageBlog'
import About from './pages/pageAbout'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/apps" component={Apps}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/about" component={About}/>

          <Footer />
      </div>
    );
  }
}

export default App;
