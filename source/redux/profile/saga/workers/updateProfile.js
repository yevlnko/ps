// Core
import { call, put, select } from 'redux-saga/effects';
import { actions } from "react-redux-form";

// Instruments
import { api } from "config";
import { profileActions } from "redux/profile/actions";
import { uiActions } from "redux/ui/actions";
import { profileActionsAsync } from "../asyncActions";


export function* callUpdateProfileWorker ({
    payload: {
        firstName,
        lastName,
        avatar = [],
        oldPassword,
        newPassword: password,
    },
}) {

    try {

        yield put(uiActions.setProfileFetchingState(true));

        if (avatar.length) {
            yield put(profileActionsAsync.updateAvatarAsync(avatar));
        }

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/user`, {
            method:  'PUT',
            headers: {
                'Authorization': token,
                'Content-Type':  'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                oldPassword,
                password,
            }),
        });

        const { data: user, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(profileActions.fillProfile(user));
        yield put(actions.reset('forms.user.password.oldPassword'));
        yield put(actions.reset('forms.user.password.newPassword'));

    } catch (err) {
        yield put(uiActions.emmitError(err));
    } finally {
        yield put(uiActions.setProfileFetchingState(false));
    }


}
