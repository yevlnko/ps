import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from "redux/authentication/types";
import { callSignUpWorker } from "./workers/signup";
import { callLoginWorker } from "./workers/login";
import { callAuthenticateWorker } from "./workers/authenticate";
import { callLogoutWorker } from "./workers/logout";


export const authWatchers = Object.freeze({
    * watchSignUp () {
        yield takeEvery(types.SIGNUP, callSignUpWorker);
    },
    * watchLogin () {
        yield takeEvery(types.LOGIN, callLoginWorker);
    },
    * watchAuthenticate () {
        yield takeEvery(types.AUTHENTICATE, callAuthenticateWorker);
    },
    * watchLogout () {
        yield takeEvery(types.LOGOUT, callLogoutWorker);
    },
});
