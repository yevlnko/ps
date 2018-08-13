// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { postsActions } from "redux/posts/actions";
import { uiActions } from "redux/ui/actions";


export function* callCreatePostsWorker ({ payload:comment }) {

    try {
        yield put(uiActions.setPostFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed`, {
            method:  'POST',
            headers: {
                'Authorization': token,
                'Content-Type':  'application/json',
            },
            body: JSON.stringify({ comment }),
        });

        const { data: post, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.createPost(post));

    } catch (err) {
        yield put(uiActions.emmitError(err, 'createPostsWorker'));
    } finally {
        yield put(uiActions.setPostFetchingState(false));
    }

}
