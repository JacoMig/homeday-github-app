import React, {useEffect, useState, useContext} from 'react';
import {fetchUser, fetchRepos} from '../../../api';
import UserInfo from '../../UserInfo';
import ReposList from '../../ReposList';
import Loading from '../../ui/Loading';
import {NavContext} from '../../../context';

const UserReposList = (props) => {
    const {match} = props
    const user_name = match.params.user_name || null
    const { setNext, setNextPath } = useContext(NavContext);

    const [userData, setUserData] = useState({});
    const [reposData, setReposData] = useState([]);
    const [errorFetchUser, setErrorFetchUser] = useState(null);
    const [errorFetchRepos, setErrorFetchRepos] = useState(null);
    
    const fetchData = async () => {
        // Fetch User
        const user = await fetchUser(user_name)
        if(user.status !== 200){
            setErrorFetchUser(user.errorMsg)
            setNext(state => ({...state, disabled: true}))
        }else {
            // If Fetching User is 200 proceed with Fetching Repos
            setUserData(user.data);
            const repos = await fetchRepos(user_name)
            if(repos.status !== 200){
                setErrorFetchRepos(repos.errorMsg)
                setNext(state => ({...state, disabled: true}))
            }else {
                setReposData(repos.data) 
                setNext(state => ({...state, disabled: false}))
            }
        }
    }


    useEffect(() => {
        if(user_name){
            fetchData()
        }
    }, [user_name])
    
    useEffect(() => {
        if(reposData.length > 0){
            setNextPath(`/${user_name}/${reposData[0].name}`)
        }
        
    }, [reposData])

    return (
        <>
            {errorFetchUser 
                && 
                    <p className="error-message">{errorFetchUser}</p>
                || 
                    <UserInfo  user={userData} reposCount={reposData.length} />
            }
            {errorFetchRepos 
                && (
                    <p className="error-message">{errorFetchRepos}</p>
                ) 
                || (
                    reposData.length === 0 &&
                        <Loading />
                    ||
                        <ReposList repos={reposData} user_name={user_name} />
                )
            }
        </>
    );
    
    
   
        

   
};

export default UserReposList;