// import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import {NavContext} from './context'
import './styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faStar, faCodeBranch, faGlobe } from '@fortawesome/free-solid-svg-icons'
library.add( faUser, faStar, faCodeBranch, faGlobe); 


function App() {
  const [next, setNext] = useState({visible: true, disabled: false});
  const [nextPath, setNextPath] = useState('/search');
  
  return (
    <NavContext.Provider value={{next, nextPath, setNext, setNextPath}}>
      <div className="App">
        <Header />
        {/* <div className="App-title has-text-centered container p-6">
          <h1 className="title">Title</h1>
          <h2 className="subtitle">Subtitle</h2>
        </div> */}
        <Router>
          <main className="App-main container">
            <Routes />
          </main>
          <Footer />
        </Router>
      </div>
    </NavContext.Provider>
  );
}

export default App;
