// Core
import { call, put, select } from "redux-saga/effects";

// Instruments
import { api } from "config";
import { usersActions } from "redux/users/actions";
import { uiActions } from "redux/ui/actions";

export function* callFetchUserWorker () {
    try {
        yield put(uiActions.setPostFetchingState(true));

        const token = yield select((state) => state.profile.get("token"));

        const response = yield call(fetch, `${api}/user/all`, {
            method:  "GET",
            headers: {
                Authorization: token,
            },
        });

        const { data: users, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(usersActions.fillUsers(users));
    } catch (err) {
        yield put(uiActions.emmitError(err, callFetchUserWorker));
    } finally {
        yield put(uiActions.setPostFetchingState(false));
    }
}
