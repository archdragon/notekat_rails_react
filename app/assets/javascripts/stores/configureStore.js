import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

export default function configureStore(initialState) {
  //const store = createStore(rootReducer, initialState)
  const store = createStoreWithMiddleware(rootReducer)

  return store
}
