import React from 'react';
import './App.css';
import axios from 'axios';
//import { getMaxListeners } from 'superagent';
import { withAuth0 } from '@auth0/auth0-react';




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      name: '',
    };
  }

  

  saveBookName = (e) => {
    this.setState({name: e.target.value})
  }

  saveBookDescription = (e) => {
    this.setState({description: e.target.value})
  }



  handleCreateBook = (e) => {
    e.preventDefault();
    const bookName = e.target.bookName.value;
    const description = e.target.description.value;
    console.log(bookName, description)
    this.setState( {
     description: description,
     name: bookName,
   })
    const { user } = this.props.auth0;
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/book?user=${user.email}`,{bookName, description}
     )
    .then(response => console.log(response.data));
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/book?user=${user.email}`
    )
    console.log('found it', bookData)
    this.setState({
      books: bookData.data.favoriteBooks,
    });
    console.log(bookData);
  }
  render() {

    return (
      <div>



        <form onSubmit={this.handleCreateBook}>
          <label htmlFor="bookName">Name</label>
          <input id="bookName" name="bookName" type="text" ></input>
          <br />
          <label htmlFor="description">Description</label>
          <input id="description" name= "description" type="text" ></input>
          <br />
          <input type="submit" />
        </form>

        <h1>books</h1>
        {this.state.books && this.state.books.map(book => <h3 key={book._id}>{book.bookName}</h3>)}
      </div>
    )
  }
}

export default withAuth0(BestBooks);