import React from 'react';
import axios from 'axios';

class FollowerList extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/chris296/followers')
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default FollowerList;