import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';

class App extends React.Component {

  state = {
    userdata: {}
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
  }
  
  


  render() {
    return (
      <div>
        <h1>github user card</h1>
        <UserCard userdata={this.state.userdata} />
        <FollowerList />
      </div>
    )
  }
}



export default App;
