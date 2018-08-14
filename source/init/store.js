// Core
import { createStore, applyMiddleware, compose } from "redux";

// Instruments
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { sagaMiddleware, middleware, dev, history } from "./middleware";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devTools ? devTools : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export { store, history };

sagaMiddleware.run(rootSaga);
