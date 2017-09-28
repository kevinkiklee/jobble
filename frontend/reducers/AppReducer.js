import { RECEIVE_IS_MOBILE } from '../actions/appActions'

const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_IS_MOBILE:
      return { ...state, isMobile: action.isMobile }

    default:
      return state
  }
}

export default AppReducer
