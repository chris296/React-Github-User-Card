import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = props => {

     return(
        <div>
             {props.followers.map(item =>(
                 <FollowerCard key={props.followers.id} follower={item} />
             ))} 
         </div>
     )
}

export default FollowerList;