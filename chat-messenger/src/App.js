import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './layout/MainNavbar'
import MainProfile from './layout/MainProfile'
import Chatboxes from './layout/Chat'
import FooterPage from './layout/foot'
var styles1 = {
  
    display: 'inline-block',
};


function App() {
  return (
    <div className="App">
      <MainNavbar />

        <div class="row">
          <MainProfile /><Chatboxes />
        </div>



      
    
      

    <FooterPage />
    </div>

  );
}

export default App;
