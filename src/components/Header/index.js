import React,{useState} from 'react';
import logo from '../../github.svg';
import './style.scss'
const Header = () => {
    const [toggleMobile, setToggleMobile] = useState(false)
    return (
        <header>
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src={logo} width="112" alt="github logo" height="28" />
                        </a>
                        <a onClick={() => setToggleMobile(state => !state)} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarMenu" className={`navbar-menu ${toggleMobile ? 'is-active' : ''}`} >
                        <div className="navbar-start">
                            <a href="/" className="navbar-item">
                                Home
                            </a>
                            <a href="/search" className="navbar-item">
                                Search
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;