import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/App.scss'
import Header from './Header'
import bg from '../assets/test.png'

class App extends React.Component {
  img = new Image()
  state = {
    offsetX: 0,
    offsetY: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    canvasMouseX: 0,
    canvasMouseY: 0,
    isDragging: false
  }

  updateCanvasMousePosition = (e, isDragging) => {
    this.setState({
      canvasMouseX: parseInt(e.clientX - this.state.offsetX),
      canvasMouseY: parseInt(e.clientY - this.state.offsetY),
      isDragging
    })
  }

  handleMouseDown = (e) => {
    console.log(e.buttons)
    if (!(e.buttons === 1))
      return
    this.updateCanvasMousePosition(e, true)
  }

  handleMouseUp = (e) => {
    this.updateCanvasMousePosition(e, false)
  }

  handleMouseOut = (e) => {
    this.updateCanvasMousePosition(e, false)
  }

  handleMouseMove = (e) => {
    if (!(e.buttons === 1))
      return

    this.setState({
      canvasMouseX: parseInt(e.clientX - this.state.offsetX),
      canvasMouseY: parseInt(e.clientY - this.state.offsetY),
    })

    if (this.state.isDragging) {
      this.state.ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight)
      this.state.ctx.drawImage(this.img, this.state.canvasMouseX - this.img.width / 2, this.state.canvasMouseY - this.img.height / 2)
    }
  }

  updateCanvasOffset = () => {
    const offset = this.refs.canvas.getBoundingClientRect()
    this.setState({
      offsetX: offset.x,
      offsetY: offset.y
    })
  }

  componentDidMount() {
    this.setState({
      ctx: this.refs.canvas.getContext('2d'),
      canvasWidth: this.refs.canvas.width,
      canvasHeight: this.refs.canvas.height
    })
    window.addEventListener('resize', this.updateCanvasOffset)
    this.updateCanvasOffset()
    this.img.src = bg
    this.img.onload = () => {
      this.state.ctx.drawImage(this.img, 0, 0)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fluid>
          <Row>
            <Col xs="3" className="red"></Col>
            <Col className="d-flex">
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
              <canvas
                ref="canvas"
                width="500"
                height="600"
                className="m-auto"
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
            </Col>
            <Col xs="3" className="red"></Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
