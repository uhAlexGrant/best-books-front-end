import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { render } from '@testing-library/react';


  
class UpdateModal extends React.Component {

  
  // closeModal = () => {
  //   this.setState({
  //     showModal: false,
  //   })
  // }

  render() {
    return(
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form onSubmit={this.props.handleUpdate}>
          <label htmlFor="bookName">Name</label>
          <input id="bookName" name="bookName" type="text" onChange={this.props.handleUpdate}></input>
          <br />
          <label htmlFor="description">Description</label>
          <input id="description" name= "description" onChange={this.props.handleUpdate} ></input>
          <br />
          <input type="submit" />
        </form>
        </Modal.Body>

        <Modal.Footer>
          
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}


export default UpdateModal;