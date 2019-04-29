import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import generalEntities from './generalEntities'
import masterEntities from './masterEntities'
import list from './list'

const rootReducer = combineReducers({
  generalEntities,
  masterEntities,
  list,
  routing,
})

export default rootReducer
