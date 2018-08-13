// Core
import { call, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';


// Instruments
import { api } from 'config';
import { authActions } from "redux/authentication/actions";
import { uiActions } from "redux/ui/actions";
import { profileActions } from "redux/profile/actions";
import { book } from "navigation/book";


export function* callLoginWorker ({ payload: credentials }) {

    try {
        yield put(uiActions.setAuthFetchingState(true));

        const response = yield call(fetch, `${api}/user/login`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const { data: profile, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        if (credentials.remember) {
            yield localStorage.setItem('token', profile.token);
        }

        yield put(authActions.loginSuccess());
        yield put(profileActions.fillProfile(profile));
        yield put(replace(book.feed));
        yield put(actions.reset('forms.login'));

    } catch (err) {

        yield put(authActions.loginFail(err));

    } finally {

        yield put(uiActions.setAuthFetchingState(false));

    }

}
