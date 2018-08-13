// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { postsActions } from "redux/posts/actions";
import { uiActions } from "redux/ui/actions";


export function* callLikePostWorker ({ payload:id }) {

    try {
        yield put(uiActions.setPostFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed/like/${id}`, {
            method:  'PUT',
            headers: {
                'Authorization': token,
            },
        });


        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        const liker = yield select((state) => state.profile.removeAll(['avatar', 'token']));


        yield put(postsActions.likePost({ liker, id }));

    } catch (err) {
        yield put(uiActions.emmitError(err, 'likePostsWorker'));
    } finally {
        yield put(uiActions.setPostFetchingState(false));
    }

}
