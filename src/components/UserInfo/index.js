import React from 'react';

const UserInfo = (props) => {
    const {user, reposCount} = props
    console.log(props)
    return (
        Object.keys(user).length > 0 &&
            <div className="user has-text-centered my-6">
                <h2 className="is-size-3">{user.name}</h2>
                <p>
                    <em>{user.location}</em><br />
                </p>
                <p>
                    <strong>Followers: </strong><span>{user.followers}</span>
                </p>
                <p>
                    <strong>Repos: </strong><span>{reposCount}</span>
                </p>
            </div>  
    );
};

export default UserInfo;