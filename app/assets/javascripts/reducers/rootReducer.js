import { combineReducers } from 'redux'
import notebooks from './notebooksReducer'
import noteItems from './noteItemsReducer'

const rootReducer = combineReducers({
  notebooks,
  noteItems
})

export default rootReducer
