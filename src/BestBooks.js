import React from 'react';
import './App.css';
import axios from 'axios';





class BestBooks extends React.Component {
  componentDidMount = async() => {

      const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/book`
      )
      console.log('found it', bookData)
    }
  render(){

    return(<h1>books</h1>
    )
  }
}

export default BestBooks;