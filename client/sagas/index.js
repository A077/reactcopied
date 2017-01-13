import { postsSaga } from './posts.saga';

export default function* rootSaga() {
  yield [
    postsSaga(),
  ];
}
