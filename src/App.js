import React, {useState, useEffect} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const loader = document.querySelector(".loader-container");
      if (loader) {
        loader.remove();
        setLoading(!loading);
      }
    });
  }, []);

  if (loading) {
    return null;
  }


  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/projects' component={Projects}/>
      <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
