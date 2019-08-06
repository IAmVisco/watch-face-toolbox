import React from 'react'
import '../styles/App.scss'
import Header from './Header'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <Container fluid>
          <Row>
            <Col xs="3"></Col>
            <Col>
              <canvas ref="canvas" />
            </Col>
            <Col xs="3"></Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
