import React from 'react'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'

import Form from './FormComponent'

function FormModal (props) {
    return (
      //   <Modal
      //   {...props}
      //   size="md"
      // >
      //   <Modal.Header closeButton>
      //   </Modal.Header>
      //   <Modal.Body>
      //       <Form />  
      //   </Modal.Body>
      //   <Modal.Footer>
      //     <Button onClick={props.onHide}>Close</Button>
      //   </Modal.Footer>
      // </Modal>
      <>
        {props.show ? 
          (
            <div>
              <Form onHide={props.onHide}/>  
            </div>
          )
          : null
        }
      </>  
    )
}

export default FormModal;