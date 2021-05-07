import React from 'react';
import './App.css';
import axios from 'axios';
//import { getMaxListeners } from 'superagent';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal.js';
import Button from 'react-bootstrap/Button'
import UpdateModal from './updateModal';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      name: '',
      showModal: false,
      updatingBook: {},
      isUpdating: false,
      books: [],
    };
  }

  

  saveBookName = (e) => {
    this.setState({name: e.target.value})
  }

  saveBookDescription = (e) => {
    this.setState({description: e.target.value})
  }



  handleCreateBook = (e) => {
    //e.preventDefault();
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

  handleUpdate = (id) => {
    this.buttonHasBeenClicked();
    // make put request when we submit in modal.
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/book/${id}`,
    {
      email: this.props.auth0.user.email,
      description: this.state.description,
      name: this.state.name
    }).then( response => {
      console.log(response.data);
      this.setState({
        isUpdating: true,
        name: response.data.bookName,
        description: response.data.description,
        updatingBook: id,
      })
    });







    // console.log('updating progress', id);
    // console.log(this.state.books)
    // let bookToUpdate = this.state.books.filter
    // (book => book._id === id);
    // console.log(bookToUpdate)
    // this.setState({

    //   isUpdating: true,
    //   name: bookToUpdate.bookName,
    //   description: bookToUpdate.description,
    //   updatingBook: id,
    // })
  }

  handleDelete = (id) => {
    const { user } = this.props.auth0;
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/book/${id}?user=${user.email}`).then(responseData => {
      console.log(responseData);
      this.setState({
        books: responseData.data,
      })
    })
  }

  buttonHasBeenClicked = () => {
    this.setState({
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {

    return (
      <div>
      <Button variant="primary" onClick= {this.buttonHasBeenClicked}>Add Book</Button>
      
      {this.state.showModal ?
      <BookFormModal closeModal={this.closeModal} handleCreateBook={this.handleCreateBook}/> :
      ''}

      {this.state.isUpdating ?
      <UpdateModal closeModal={this.closeModal} handleUpdate={this.handleUpdate}/> :
      ''}

        <h1>books</h1>
        
        {this.state.books && this.state.books.map(book => <h3 key={book._id}>{book.bookName}
        <button onClick={() => this.handleDelete(book._id)}>Delete</button>
        <button onClick={() => this.handleUpdate(book._id)}>Update</button>
        </h3>
        )}

      </div>
    
      //<div>



        /*{ <form onSubmit={this.handleCreateBook}>
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
      </div> }*/
    )
  }
}

export default withAuth0(BestBooks);