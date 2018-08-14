// Core
import { call, put, select } from "redux-saga/effects";
import { actions } from "react-redux-form";

// Instruments
import { api } from "config";
import { profileActions } from "redux/profile/actions";
import { uiActions } from "redux/ui/actions";
// import { profileActionsAsync } from "../asyncActions";

export function* callUpdateAvatarWorker ({ payload: [avatar] }) {
    try {
        console.log(avatar);

        yield put(uiActions.setProfileFetchingState(true));

        const token = yield select((state) => state.profile.get("token"));
        const body = yield new FormData();

        yield call([body, body.append], "avatar", avatar);

        const response = yield call(fetch, `${api}/image`, {
            method:  "POST",
            headers: {
                Authorization: token,
            },
            body,
        });

        const {
            data: { avatar: newAvatar },
            message,
        } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.updateAvatar(newAvatar));
        yield put(actions.reset("forms.user.password.oldPassword"));
        yield put(actions.reset("forms.user.password.newPassword"));
    } catch (err) {
        yield put(uiActions.emmitError(err));
    } finally {
        yield put(uiActions.setProfileFetchingState(false));
    }
}
