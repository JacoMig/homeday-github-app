import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
const RepoBox = ({repo}) => {
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    
    useEffect(() => {
        if(repo.created_at){
            const dCreate = new Date(repo.created_at);
            setCreatedAt(`${dCreate.getDate()}/${dCreate.getMonth()}/${dCreate.getFullYear()}`)
        }
        if(repo.updated_at){
            const dUpdate = new Date(repo.updated_at);
            setUpdatedAt(`${dUpdate.getDate()}/${dUpdate.getMonth()}/${dUpdate.getFullYear()}`)
        }
    }, [repo])
    
    return (
        <div className="box">
            <h1>{repo.name}</h1>
            <div className="subtitle pt-4 is-flex is-align-content-center">
                <div>
                    <figure className="image is-64x64 repo-image">
                        {repo.owner.avatar_url && 
                            <img src={repo.owner.avatar_url} alt="Owner Image" />
                            ||
                            <FontAwesomeIcon icon="user" />
                        }
                    </figure>
                </div>
                <div className="pl-5">
                    <p>by <em>{repo.owner.login}</em></p>
                    {createdAt !== '' && <p>created on <em>{createdAt}</em></p>}
                    {updatedAt !== '' && <p>updated on <em>{updatedAt}</em></p>}
                </div>
            </div>
            <div className="repo-info">
                {repo.description && <p>{repo.description}</p>}
                <ul className="row">
                   
                        {repo.language && 
                            <li>
                                <span>{repo.language}</span>
                            </li>
                        }
                        <li>
                            <FontAwesomeIcon size={'lg'} icon="star" />
                            <span className="pl-2">{repo.stargazers_count}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon size={'lg'} icon="code-branch" />
                            <span className="pl-2">{repo.forks_count}</span>
                        </li>
                   
                </ul>
                <ul className="row">
                    {repo.svn_url && 
                        <li>
                            <a href={repo.svn_url} target="_blank">Link to repo</a>
                        </li>
                    }
                    {repo.homepage && 
                        <li>
                            <FontAwesomeIcon size={'lg'} icon="globe" />
                            <a href={repo.homepage} className="pl-3" target="_blank">Homepage</a>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default RepoBox;