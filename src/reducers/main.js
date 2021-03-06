import info from './info'
import list from './list'

import { createHashHistory } from 'history'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const reducer = history => (
  combineReducers({
    info,
    list,
    router: connectRouter(history)
  })
)

export const history = createHashHistory()

const enhancer = () => (
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
)

export default function configureStore (preloadedState) {
  return createStore(
    reducer(history),
    preloadedState,
    enhancer()
  )
}
