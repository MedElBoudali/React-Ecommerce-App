import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './RootReducer';

// Logger must be the last or we get undefined actions
const middlewares = [ReduxThunk, logger];

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const Persistor = persistStore(Store);

export default { Store, Persistor };
