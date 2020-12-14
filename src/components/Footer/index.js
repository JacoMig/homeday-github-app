import React, {useContext, useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import {NavContext} from '../../context';
import './style.scss'
const Footer = (props) => {
    const {history, location} = props
    const {  next, nextPath } = useContext(NavContext);
    const [prev, setPrev] = useState(false)
    
    // console.log(location)
    
    useEffect(() => {
        location.pathname !== '/' ? setPrev(true) : setPrev(false)
    },[location.pathname])
    
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                {prev &&
                    <button className="prev mr-6 button is-danger is-outlined" onClick={() => history.goBack()}>Prev</button>}
                {next &&
                    <button className="next ml-6 button is-danger is-outlined" disabled={next.disabled} onClick={() => history.push(nextPath)}>Next</button>}
            </div>    
        </footer>
    );
};

export default withRouter(Footer);