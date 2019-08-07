import React from 'react'
import '../styles/Canvas.scss'
import bg from '../assets/test.png'

class Layer extends React.Component {
  ctx = undefined
  canvasWidth = 500
  canvasHeight = 600
  img = new Image()
  state = {
    imageX: 0,
    imageY: 0,
    offsetX: 0,
    offsetY: 0,
    hitPosX: 0,
    hitPosY: 0,
    canvasMouseX: 0,
    canvasMouseY: 0,
    isDragging: false
  }

  updateCanvasMousePosition = (e, isDragging) => {
    const canvasMouseX = parseInt(e.clientX - this.state.offsetX)
    const canvasMouseY = parseInt(e.clientY - this.state.offsetY)
    const hitPosX = canvasMouseX - this.state.imageX
    const hitPosY = canvasMouseY - this.state.imageY
    this.setState({
      canvasMouseX,
      canvasMouseY,
      hitPosX,
      hitPosY,
      isDragging
    })
  }

  mouseHit = ({ buttons, clientX, clientY }) => {
    const { imageX, imageY, offsetX, offsetY } = this.state
    return buttons === 1
      && clientX >= imageX + offsetX && clientX <= imageX + this.img.width + offsetX
      && clientY >= imageY + offsetY && clientY <= imageY + this.img.height + offsetY
  }

  handleMouseDown = (e) => {
    if (!this.mouseHit(e))
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
    if (!this.mouseHit(e))
      return

    this.setState({
      canvasMouseX: parseInt(e.clientX - this.state.offsetX),
      canvasMouseY: parseInt(e.clientY - this.state.offsetY),
    })

    if (this.state.isDragging) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      const imageX = this.state.canvasMouseX - this.state.hitPosX
      const imageY = this.state.canvasMouseY - this.state.hitPosY
      this.ctx.drawImage(this.img, imageX, imageY)
      this.setState({ imageX, imageY })
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
    this.ctx = this.refs.canvas.getContext('2d')
    window.addEventListener('resize', this.updateCanvasOffset)
    this.updateCanvasOffset()
    this.img.src = bg
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.state.imageX, this.state.imageY)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <canvas
        ref="canvas"
        width={this.canvasWidth}
        height={this.canvasHeight}
        className="m-auto shadow"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        onMouseOut={this.handleMouseOut}
      />
    )
  }
}

export default Layer
