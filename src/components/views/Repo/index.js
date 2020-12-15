import React, {useState, useEffect, useContext} from 'react';
import RepoBox from './RepoBox';
import Loading from '../../ui/Loading';
import {fetchRepo, fetchRepos} from '../../../api';
import {NavContext} from '../../../context';

export const nextRepoName = (repos, current_repo_name) => {
    const index = repos.findIndex(repo => repo.name === current_repo_name)
    if(repos[index + 1]){
        return repos[index + 1].name
    }else {
        return null
    }
}

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
                const next = nextRepoName(repos.data, repo_name)
                if(next){
                    setNext(state => ({...state, disabled: false}))
                    setNextPath(`/${user_name}/${next}`)
                }else {
                    setNext(state => ({...state, disabled: true}))    
                }
            }else {
                setNext(state => ({...state, disabled: true}))
            }
        }else {
            repo.status !== 200 ? setErrorFetchRepo(repo.errorMsg) : setRepoData(repo.data)
            setNext(state => ({...state, disabled: true}))
        }
        
    } 


    useEffect(() => {
        repo_name && fetchData()
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