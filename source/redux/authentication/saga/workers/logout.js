// Core
import { call, put } from "redux-saga/effects";
import { replace } from "react-router-redux";
import { actions } from "react-redux-form";

// Instruments
import { api } from "config";
import { authActions } from "redux/authentication/actions";
import { uiActions } from "redux/ui/actions";
import { profileActions } from "redux/profile/actions";
import { book } from "navigation/book";

export function* callLogoutWorker () {
    try {
        yield put(uiActions.setPostFetchingState(true));

        const token = yield localStorage.getItem("token");

        const response = yield call(fetch, `${api}/user/logout`, {
            method:  "GET",
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        yield put(authActions.logoutSuccess());
    } catch (err) {
        yield put(authActions.logoutFail(err));
    } finally {
        yield localStorage.removeItem("token");
        yield put(replace(book.feed));
        yield put(actions.reset("forms.login"));
        yield put(actions.reset("forms.profile"));
        yield put(profileActions.clearProfile());
        yield put(uiActions.setAuthFetchingState(false));
    }
}
