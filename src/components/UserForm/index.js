import React, {useState, useContext, useEffect} from 'react';
import ErrorBox from '../ui/ErrorBox';
import {NavContext} from '../../context';
import './style.scss';

const nameErr = 'Please enter a username';
const emailErr = 'Please enter a valid email';
const agreeErr = 'Please agree the terms and service';

const UserForm = (props) => {
    
    const { setNextPath, setNext } = useContext(NavContext);

    const {setUserVal, userVal, onSubmit} = props;
    const [errors, setErrors] = useState({
        name: true,
        email: true,
        agree: true,
    })
    const [isSubmit, setIsSubmit] = useState(false)
    
    const checkForm = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        if(!Object.keys(errors).some((key) => errors[key])){
            onSubmit()
            console.log("send Form")
        }else {
            console.log("dont send Form")
        }  
    }

    const validationForm = (name, value) => {
        let error = false;
        switch(name){
            case 'name':
                value === '' ?  error = true : error = false
            break;
            case 'email':
                const regex = /\S+@\S+\.\S+/;
                !regex.test(value) || value === '' ? error = true : error = false
                console.log(regex.test(value))
            break;
            case 'agree':
                !value ?  error = true : error = false
            break;
        }
        setErrors(state => ({...state, [name]: error}))
        setUserVal(state => ( {...state, [name]: value} ) )
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value =  name !== 'agree' ? e.target.value : e.target.checked;
        validationForm(name, value)
        !isSubmit && setIsSubmit(true) 
    }

    const setNextButtonPath = () => {
        if(Object.keys(errors).every(key => !errors[key])){
            setNext(state => ({...state, disabled: false}))
        }else {
            setNext(state => ({...state, disabled: true}))
        }
    }

    useEffect(() => {
        setNextButtonPath()
    }, [errors])

    useEffect(() => {
        if(userVal.name !== ''){
            setNextPath(`/user/${userVal.name}`)
        }
    }, [userVal])

    useEffect(() => {
        setNextButtonPath()
    }, [])


    return (
        <div className="box form-user">
            <form onSubmit={checkForm}>
                <div className="field name">
                    <label className="label">Username</label>
                    <div className="control">
                        <input 
                            className={`input ${isSubmit && errors.name ? 'is-danger' : ''} `}
                            type='text' 
                            onChange={handleChange} 
                            value={userVal.name} 
                            name="name"/>
                    </div>
                    {isSubmit && <ErrorBox isValid={!errors.name} message={nameErr} /> }
                </div>
                <div className="field email">
                    <label className="label">Email</label>
                    <div className="control">
                        <input 
                            type='text' 
                            className={`input ${isSubmit && errors.email ? 'is-danger' : ''} `}
                            name="email"
                            value={userVal.email}
                            onChange={handleChange} />
                    </div>
                    {isSubmit && <ErrorBox isValid={!errors.email} message={emailErr} /> }
                </div>
                <div className="field agree">
                    <div className="control">
                        <input
                            type="checkbox"
                            onChange={handleChange} 
                            checked={userVal.agree}
                            name="agree"
                            id="agree"
                            /> 
                        <label htmlFor="agree">Agree with terms and service</label>
                    </div>
                    {isSubmit && <ErrorBox isValid={!errors.agree} message={agreeErr} /> }
                </div>
                <button className="button is-info is-medium has-text-centered" type='submit'>Fetch user</button>
            </form>
        </div>
    );
};

export default UserForm;