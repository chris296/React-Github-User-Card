import React from 'react';

const UserCard = props => {

        return(
        <div className="card">
          <img src={props.userdata.avatar_url}/>
          <div>
            <h3>{props.userdata.name}</h3>
            <p>{props.userdata.login}</p>
            <p>Location: {props.userdata.location}</p>
            <p>Public Repos: {props.userdata.public_repos}</p>
          </div>
        </div>
        )
}

export default UserCard;