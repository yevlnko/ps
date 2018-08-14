// Core
import { call, put } from "redux-saga/effects";
import { actions } from "react-redux-form";

// Instruments
import { api } from "config";
import { authActions } from "redux/authentication/actions";
import { uiActions } from "redux/ui/actions";
import { profileActions } from "redux/profile/actions";

export function* callAuthenticateWorker ({ payload: token }) {
    try {
        const response = yield call(fetch, `${api}/user/login`, {
            method:  "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        const { data: profile, message } = yield call([
            response,
            response.json
        ]);

        if (response.status !== 200) {
            if (response.status === 401) {
                yield localStorage.removeItem("token");

                return null;
            }
            throw new Error(message);
        }

        yield put(authActions.authenticateSuccess());
        yield put(profileActions.fillProfile(profile));

        yield put(
            actions.change("forms.user.profile.firstName", profile.firstName)
        );
        yield put(
            actions.change("forms.user.profile.lastName", profile.lastName)
        );
    } catch (err) {
        yield put(authActions.signupFail(err));
    } finally {
        yield put(uiActions.initializeSuccess(false));
    }
}
