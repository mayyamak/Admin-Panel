import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from '../reducers'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);
const history = createBrowserHistory()

export default configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        apiMiddleware,
        routerMiddleware(createBrowserHistory()),
        thunk,
      ),
    )
  )

  return store
}
