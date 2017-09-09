import { RECEIVE_IS_MOBILE } from '../actions/appActions';

const initialState = {
  isMobile: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IS_MOBILE:
      return Object.assign({}, state, {
        isMobile: action.isMobile,
      });

    default: 
      return state;
  }
};

export default AppReducer;
