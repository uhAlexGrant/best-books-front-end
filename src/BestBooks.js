import React from 'react';
import './App.css';
import axios from 'axios';
//import { getMaxListeners } from 'superagent';
import {withAuth0} from '@auth0/auth0-react';




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    const {user} = this.props.auth0;
    const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/book?user=${user.email}`
      )
      console.log('found it', bookData)
      this.setState({
        books: bookData.data.favoriteBooks,
      });
      console.log(bookData);
    }
  render(){

    return(
      <div>
      <h1>books</h1>
      {this.state.books && this.state.books.map(book => <h3 key={book._id}>{book.bookName}</h3>)}
      </div>
    )
  }
}

export default withAuth0(BestBooks);