import { combineReducers } from 'redux'
import undoable from 'redux-undo'

const initialState = {
    counter: 0
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            // return { counter: state.counter + 1 }
            return { counter: action.payload }

        case "DECREMENT":
            return { counter: state.counter - 1 }
        default:
            return state;
    }
}

function secondReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            // return { counter: state.counter + 1 }
            return { second: action.payload }

        case "DECREMENT":
            return { second: state.counter - 1 }
        default:
            return state;
    }
}

const initialState1 = {
    second: 0
  }
  
function draggableReducer (state = initialState1, action) {
    switch (action.type) {
      case "DRAG":
        return { second: action.payload }

      default:
        return state
    }
  }


export default combineReducers({
    rootReducer,
    secondReducer,
    draggable: undoable(draggableReducer, {
      limit: 10
    })
  })    
  

// export default rootReducer;
