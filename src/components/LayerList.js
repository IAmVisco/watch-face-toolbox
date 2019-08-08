import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { UPDATE_ACTIVE_LAYER } from '../actions'

class LayerList extends React.Component {
  handleItemClick = (e) => {
    this.props.dispatch({
      type: UPDATE_ACTIVE_LAYER,
      activeLayer: e.target.dataset.rbEventKey
    })
  }

  componentDidMount() {

  }

  render() {
    // TODO: Set default active
    const layersList = this.props.layers.map((layer, index) =>
      <ListGroup.Item
        action
        key={index}
        eventKey={layer.id}
        onClick={this.handleItemClick}>Layer {layer.id}</ListGroup.Item>
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
