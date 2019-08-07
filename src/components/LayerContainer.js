import React from 'react'
import { connect } from 'react-redux'
import Layer from './Layer'

class LayerContainer extends React.Component {
  render() {
    return this.props.layers.map((layer, index) =>
      <Layer key={index} {...layer} />
    )
  }
}

export default connect(
  state => ({
    layers: state.layers
  })
)(LayerContainer)
