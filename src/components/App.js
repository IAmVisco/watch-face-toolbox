import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/App.scss'
import Header from './Header'
import LayerContainer from './LayerContainer'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fluid>
          <Row>
            <Col xs="3" className="blue"></Col>
            <Col className="layers-container">
              <LayerContainer />
            </Col>
            <Col xs="3" className="pink"></Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
