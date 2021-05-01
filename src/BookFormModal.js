import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';


  function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  }
  render(){
    return (
      <>
          <Button variant="primary" onClick={handleShow}>
      Launch demo modal
      </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.props.handleCreateBook}>
                <label htmlFor="bookName">Name</label>
                <input id="bookName" type="text" onInput={this.saveBookName}></input>
                <br />
                <label htmlFor="description">Description</label>
                <input id="description" type="text" onInput={this.saveBookDescription}></input>
                <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
              <Button variant="primary" onClick={handleClose}>
          Save Changes
          </Button>
            </Modal.Footer>
          </Modal>
        </>
  
    )
  }



export default BookFormModal;
