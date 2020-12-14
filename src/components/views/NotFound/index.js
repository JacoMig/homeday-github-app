import React, {useContext, useEffect} from 'react';
import {NavContext} from '../../../context';
import './style.scss';
const NotFound = () => {
    const { setNext } = useContext(NavContext);

    useEffect(() => {
        setNext(state => ({...state, disabled: true}))
    },[])

    return (
        <div className="notFound">
            <h3 className="help is-danger">Sorry this page does not exist!</h3>
        </div>
    );
};

export default NotFound;