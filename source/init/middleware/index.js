// Core
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';


// Instruments
import { customThank } from './customThank';
import { notification } from './notification';


const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const dev = process.env.NODE_ENV === 'development';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const middleware = [sagaMiddleware, customThank, routerMiddleware];

if (dev) {
    middleware.push(logger);
    middleware.push(notification);
}

export { middleware, dev, sagaMiddleware, history };
