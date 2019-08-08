import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import '../styles/Layer.scss'
import { UPDATE_ACTIVE_LAYER } from '../actions'

class LayerList extends React.Component {
  handleItemClick = (e) => {
    this.props.dispatch({
      type: UPDATE_ACTIVE_LAYER,
      activeLayer: e.target.dataset.rbEventKey
    })
  }

  render() {
    const layersList = this.props.layers.map((layer, index) =>
      <ListGroup.Item
        action
        key={index}
        eventKey={layer.id}
        onClick={this.handleItemClick}
        className={this.props.activeLayer === layer.id ? 'active' : ''}
      >
        <img
          src={layer.image}
          alt="layer thumbnail"
          height="32"
          width="32"
          className="mr-1" />Layer {layer.id}
      </ListGroup.Item>
    )

    return (
      <div className="mt-4 p-3 shadow">
        <h3 className="mb-3">Layers</h3>
        <ListGroup>
          {layersList}
        </ListGroup>
      </div>

    )
  }
}

export default connect(
  state => ({
    activeLayer: state.activeLayer,
    layers: state.layers
  })
)(LayerList)
