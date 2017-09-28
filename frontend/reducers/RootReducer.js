import { combineReducers } from 'redux'
import DataReducer from './DataReducer'
import AppReducer from './AppReducer'

const RootReducer = combineReducers({
  data: DataReducer,
  app: AppReducer,
})

export default RootReducer
