import React, {useEffect, useState, useContext} from 'react';
import UserForm from '../../UserForm';
// import {NavContext} from '../../../context';


const User = (props) => {
    const {history} = props;
    // const { setPrev } = useContext(NavContext);
    const [userVal, setUserVal] = useState({name: '', email: '', agree: false})
    
    const onSubmit = () => {
        history.push(`/${userVal.name}`)
    }

    /* useEffect(() => {
       
    }, []) */

    return (
        <>
            <UserForm 
                userVal={userVal}
                setUserVal={setUserVal}
                onSubmit={onSubmit}
            />
           
        </>
    );
};

export default User;