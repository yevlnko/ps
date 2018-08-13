// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import { api, groupID } from 'config';
import { postsActions } from "redux/posts/actions";
import { uiActions } from "redux/ui/actions";


export function* callFetchPostsWorker () {

    try {
        yield put(uiActions.setPostFetchingState(true));
        const response = yield call(fetch, `${api}/feed`, {
            method:  'GET',
            headers: {
                'x-no-auth': groupID,
            },
        });
        const { data: posts, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.fetchPostsSuccess(posts));

    } catch (err) {
        yield put(postsActions.fetchPostsFail(err));
    } finally {
        yield put(uiActions.setPostFetchingState(false));
    }

}
