import { ADD_LAYER } from '../actions'
import clock from '../assets/test.png'
import cake from '../assets/cake.jpg'

const initialState = {
  layers: [
    {
      id: 2,
      image: clock
    },
    {
      id: 1,
      image: cake
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LAYER: {
      return state
    }
    default: {
      return state
    }
  }
}
