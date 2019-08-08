import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import Layer from './Layer'
import '../styles/Layer.scss'

class LayerContainer extends React.Component {
  render() {
    const layers = this.props.layers.map((layer, index) =>
      <Layer key={index} {...layer} activeLayer={this.props.activeLayer} />
    )
    return (
      <Col className="layers-container">
        {layers}
      </Col>
    )
  }
}

export default connect(
  state => ({
    activeLayer: state.activeLayer,
    layers: state.layers
  })
)(LayerContainer)
