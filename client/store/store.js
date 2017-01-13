import { createStore, applyMiddleware } from 'redux';
import Sagas from 'sagas';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'middleware';
import rootReducer from 'reducers';

function configure() {
  const sagaMiddleware = createSagaMiddleware();
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    sagaMiddleware
  )(create);

  const store = createStoreWithMiddleware(rootReducer);

  sagaMiddleware.run(Sagas);

  return store;
}

export const store = configure();
