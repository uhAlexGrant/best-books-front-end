import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';
import {withAuth0} from '@auth0/auth0-react'

class MyFavoriteBooks extends React.Component {
  render() {
    const {user, isAuthenticated} = this.props.auth0;
    console.log(user);
    return(
      <div className= 'userInfo'>
      <Jumbotron >
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
      {isAuthenticated ?
      user.name :
      ''}
      {isAuthenticated ?
      <img src={user.picture} alt= 'google profile pic'/> :
      ''}
      {isAuthenticated ?
      user.email :
      ''}
      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
