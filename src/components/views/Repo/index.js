import React, {useState, useEffect, useContext} from 'react';
import RepoBox from './RepoBox';
import Loading from '../../ui/Loading';
import {fetchRepo, fetchRepos} from '../../../api';
import {NavContext} from '../../../context';

const Repo = (props) => {
    const {setNextPath, setNext} = useContext(NavContext);
    const {match} = props;
    const repo_name = match.params.repo_name;
    const user_name = match.params.user_name;
    const [errorFetchRepo, setErrorFetchRepo] = useState(null);
    const [repoData, setRepoData] = useState({});

    const fetchData = async () => {
        const repo = await fetchRepo(user_name, repo_name)
        if(repo.status === 200) {
            setRepoData(repo.data)
            const repos = await fetchRepos(user_name)
            if(repos.status === 200){
                // Find the next repo in the collection for navigation
                const repo_index = repos.data.findIndex(repo => repo.name === repo_name)
                setNext(state => ({...state, disabled: false}))
                setNextPath(`/user/${user_name}/${repos.data[repo_index+1].name}`)
            }else {
                setNext(state => ({...state, disabled: true}))
            }
        }else {
            repo.status !== 200 ? setErrorFetchRepo(repo.errorMsg) : setRepoData(repo.data)
            setNext(state => ({...state, disabled: true}))
        }
        
    } 


    useEffect(() => {
        if(repo_name){
            fetchData()
        }
    }, [repo_name]) 

   

    return (
        <>
            {errorFetchRepo 
            && ( <p className="help is-danger">{errorFetchRepo}</p> )
            || (
                Object.keys(repoData).length === 0 
                &&
                    <Loading />
                ||
                    <RepoBox repo={repoData}/>
            )
                
            }
            
        </>
    );
};

export default Repo;