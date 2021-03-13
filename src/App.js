import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col ,CardBody} from 'reactstrap';
import { Modal, Form } from 'react-bootstrap';
import { Component } from 'react';
import  "../src/App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      showDialogBox:false
    }
  }
  render() {
    return (
      <div>
        <div className="header">Vocab</div>
        <div className="body">
        <Row>
      <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger"
          onClick={() => this.setState({ showDialogBox: true })}>Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger" onClick={() => this.setState({ showDialogBox: true })}>Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger" onClick={() => this.setState({ showDialogBox: true })} >Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>   <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger" onClick={() => this.setState({ showDialogBox: true })} >Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>   
      <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
     <Modal
      size="lg"
      show={this.state.showDialogBox}
      animation={true}
      className=" "
      onHide={() => this.setState({ showDialogBox: false })}
      aria-labelledby="example-modal-sizes-title-lg"
     >
     <Modal.Header>
         <Modal.Title>Your KYC is incomplete</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <Row>
             <Col>
                 Please Complete Your KYC To Subscribe Bonds.
             </Col>
         </Row>
     </Modal.Body>
  </Modal>
      </div>
    )
  }
}



export default App;