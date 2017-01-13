import { FETCH_MESSAGE } from 'constants';
import { createAction } from 'redux-actions';

export const fetchPosts = createAction(FETCH_MESSAGE);
