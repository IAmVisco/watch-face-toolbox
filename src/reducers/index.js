import { ADD_LAYER, UPDATE_ACTIVE_LAYER, UDPATE_COLOR } from '../actions'
import clock from '../assets/test.png'
import cake from '../assets/cake.jpg'

const initialState = {
  activeLayer: '1',
  color: '#eb0c0c',
  layers: [
    {
      id: '2',
      image: clock
    },
    {
      id: '1',
      image: cake
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LAYER: {
      return state
    }
    case UPDATE_ACTIVE_LAYER: {
      return {
        ...state,
        activeLayer: action.activeLayer
      }
    }
    case UDPATE_COLOR: {
      return {
        ...state,
        color: action.color
      }
    }
    default: {
      return state
    }
  }
}
