import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RepoItem = ({repo, user_name}) => {
    
    console.log(repo)
    
    return (
        <a href={`/user/${user_name}/${repo.name}`} className="mb-6 is-block box repo">
            
                <article className="is-flex">
                    <figure className="image is-64x64 repo-image">
                        {repo.owner.avatar_url && 
                            <img src={repo.owner.avatar_url} alt="Owner Image" />
                            ||
                            <FontAwesomeIcon icon="user" />
                        }
                    </figure>
                <div className="repo-info pl-6">
                        <div className="repo-info-headline">
                            <h2 className="is-size-3">{repo.name}</h2>
                            {repo.description && <p>{repo.description}</p>}
                        </div>
                        <ul className="repo-info-list is-flex">
                            
                            <li>
                                {repo.language}
                            </li>
                            
                            <li>
                                <FontAwesomeIcon icon="star" />
                                <span className="pl-2">{repo.stargazers_count}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="code-branch" />
                                <span className="pl-2">{repo.forks_count}</span>
                            </li>
                        </ul>
                </div>
                </article>
            
        </a>
    );
};

export default RepoItem;

