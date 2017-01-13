import { handleActions } from 'redux-actions';
import { FETCH_MESSAGE_SUCCESS, FETCH_MESSAGE_FAILED } from 'constants';

export const postsInitialState = {
  message: '',
  showError: false,
  errorMessage: 'Failed to load posts',
};

const handler = handleActions({
  [FETCH_MESSAGE_SUCCESS](state, action) {
    return Object.assign({}, state, {
      message: action.payload,
      showError: false,
    });
  },
  [FETCH_MESSAGE_FAILED](state) {
    return Object.assign({}, state, {
      showError: true,
    });
  },
}, postsInitialState);

export default handler;
