import {
  FETCH_MESSAGE,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILED,
} from 'constants';
import { PostsService } from 'services';
import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

export function* fetchPosts() {
  try {
    const posts = yield call(fetch, PostsService.getMessage());
    const toJson = yield posts.json();
    yield put({ type: FETCH_MESSAGE_SUCCESS, payload: toJson });
  } catch (e) {
    yield put({ type: FETCH_MESSAGE_FAILED, paload: e });
  }
}

function* fetchPostsWatcher() {
  yield* takeEvery(FETCH_MESSAGE, fetchPosts);
}

export function* postsSaga() {
	yield fork(fetchPostsWatcher);
}