import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
//import LoginButton from './LoginButton.js';
//import LogoutButton from './LogoutButton.js';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react'
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import BestBooks from './BestBooks';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      userName: '',
      favoriteBooks: [],
      userEmail: '',
    }
  }

  render() {
    console.log('app', this.props);
    const { isAuthenticated} = this.props.auth0;
    //console.log(user);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">{isAuthenticated ? <BestBooks />: <Login />}
                
              </Route>
              <Route exact path="/profile">
              {isAuthenticated ?
              <MyFavoriteBooks /> :
              ''}
              </Route>
            </Switch>
            <Footer id='footer' />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
