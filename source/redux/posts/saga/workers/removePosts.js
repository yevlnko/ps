// Core
import { call, put, select } from "redux-saga/effects";

// Instruments
import { api } from "config";
import { postsActions } from "redux/posts/actions";
import { uiActions } from "redux/ui/actions";

export function* callRemovePostsWorker ({ payload: id }) {
    try {
        yield put(uiActions.setPostFetchingState(true));

        const token = yield select((state) => state.profile.get("token"));

        const response = yield call(fetch, `${api}/feed/${id}`, {
            method:  "DELETE",
            headers: {
                Authorization:  token,
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }
        yield put(postsActions.removePost(id));
    } catch (err) {
        yield put(uiActions.emmitError(err, "removePostsWorker"));
    } finally {
        yield put(uiActions.setPostFetchingState(false));
    }
}
