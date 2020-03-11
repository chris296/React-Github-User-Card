import React from 'react';

const FollowerCard = props => {

        return(
        <div className='card'>
          <img src={props.follower.avatar_url}/>
          <div>
            <h3>{props.follower.login}</h3>
          </div>
        </div>
        )
}

export default FollowerCard;