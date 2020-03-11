import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';

class App extends React.Component {

  state = {
    userdata: {},
    followers: []
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/chris296')
    .then(res => {
      console.log(res);
      this.setState({
        userdata: res.data
      })
    })
    .catch(err => console.log(err.message));
    axios
    .get('https://api.github.com/users/chris296/followers')
    .then(res=> {
      console.log(res);
      this.setState({
        followers: res.data
      })
    })
    .catch(err => console.log(err.message));
  }
  
  


  render() {
    return (
      <div className='container'>
        <h1>Github User Card</h1>
        <UserCard userdata={this.state.userdata} />
        <h1>Followers:</h1>
        <div className='followercon'>
        <FollowerList followers={this.state.followers}/>
        </div>
      </div>
    )
  }
}



export default App;
