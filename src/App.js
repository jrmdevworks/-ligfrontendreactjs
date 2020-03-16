import React,{ Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import Homepage from "./components/Homepage";
import Samplepage from "./components/pages/Samplepage";
//import logo from './logo.svg';
//import './App.css';

class App extends Component{

  render(){
    return(
      <Router>      
         <Header />
         <div className="body-container clearfix">         
            <Route exact path="/" component={Homepage}/>  
            <Route path="/sample-page" component={Samplepage}/> 
            <Sidebar />
            <div className="padd-t2 padd-b1 text-right clearfix">	
              <button id="go-top-btn" title="Go to top" onClick={this.scrollToTop}><i className="arrow-black arrow-up"></i></button>	
            </div>
         </div>
         <Footer />
      </Router>
    );   
  }

  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
}

export default App;
