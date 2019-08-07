import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/App.scss'
import Layer from './Layer'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fluid>
          <Row>
            <Col xs="3" className="red"></Col>
            <Col className="d-flex">
              <Layer />
            </Col>
            <Col xs="3" className="red"></Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
