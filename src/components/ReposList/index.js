import React, {useContext, useEffect} from 'react';
import RepoItem from '../RepoItem';
//import {NavContext} from '../../context';
// import _map from 'lodash.map'

const ReposList = (props) => {
    const {repos, user_name} = props
  //  const { setNextPath } = useContext(NavContext);
    
    return (
        repos.length > 0 && repos.map(item => <RepoItem user_name={user_name} repo={item} key={item.id}/>)
    );
};

export default ReposList;