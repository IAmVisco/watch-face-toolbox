import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/App.scss'
import Header from './Header'
import ColorPalette from './ColorPalette'
import LayerContainer from './LayerContainer'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fluid>
          <Row>
            <Col xs="3" className="blue">

            </Col>
            <LayerContainer />
            <Col xs="3" className="mt-3">
              <ColorPalette />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
