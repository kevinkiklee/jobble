export const RECEIVE_IS_MOBILE = 'RECEIVE_IS_MOBILE';

export const receiveIsMobile = isMobile => ({
  type: RECEIVE_IS_MOBILE,
  isMobile,
});

export const setIsMobile = isMobile => dispatch => (
  dispatch(receiveIsMobile(isMobile))
);
