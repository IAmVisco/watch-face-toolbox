import React from 'react'
import Pickr from '@simonwep/pickr'
import { connect } from 'react-redux'
import '@simonwep/pickr/dist/themes/monolith.min.css'
import { UDPATE_COLOR } from '../actions'

class ColorPalette extends React.Component {
  componentDidMount() {
    const pickr = Pickr.create({
      el: '.picker',
      showAlways: true,
      theme: 'monolith',
      position: 'right-end',
      default: this.props.color,
      components: {
        hue: true,
        opacity: true,
        interaction: {
          hex: true,
          input: true
        }
      }
    })

    pickr.on('change', (color, instance) => {
      pickr.applyColor(true)
      this.props.dispatch({ type: UDPATE_COLOR, color: color.toHEXA().toString() })
    })
  }

  render() {
    return (
      <span className="picker" />
    )
  }
}

export default connect(
  state => ({
    color: state.color
  })
)(ColorPalette)
