import React, {useEffect,useContext, useState} from 'react';
import ReposList from '../../ReposList';
import {fetchRepos} from '../../../api';
import Loading from '../../ui/Loading'
import {NavContext} from '../../../context';
import './style.scss';

const Home = () => {
  const [reposData, setReposData] = useState([]);
  const [errorFetchRepos, setErrorFetchRepos] = useState('');
  const { setNext } = useContext(NavContext);
  
  const getTopStarsRepos = (repos) => {
    const filtered = repos.sort((a,b) => b.stargazers_count - a.stargazers_count).splice(0, 3)
    return filtered
  }

  const fetchData = async () => {
    const repos = await fetchRepos('homeday-de')
    repos.errorMsg !== "" ? setErrorFetchRepos(repos.errorMsg) : setReposData(getTopStarsRepos(repos.data)) 
  }

  useEffect(() => {
     fetchData()
     setNext(state => ({...state, disabled: false}))
  }, [])

  return (
      <>
        <div className="fetch-cta-block has-text-centered">
          <a className="button is-info is-size-3" href="/search">Fetch a User</a>         
        </div>
        <h4 className="is-size-3 has-text-centered mb-6">
            Top 3 Repos from <span className="has-text-weight-medium">homeday-de</span>
        </h4> 
        {errorFetchRepos 
          && (
            <p className="help is-danger">{errorFetchRepos}</p>
          ) 
          || (
            reposData.length > 0 
            &&
              <ReposList repos={reposData} user_name={'homeday-de'} />
            ||
              <Loading />
          )
        }
      </>
  );
};

export default Home;