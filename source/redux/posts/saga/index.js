import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from "redux/posts/types";
import { asyncTypes } from "./asyncTypes";
import { callFetchPostsWorker } from "./workers/fetchPosts";
import { callCreatePostsWorker } from "./workers/createPosts";
import { callRemovePostsWorker } from "./workers/removePosts";
import { callLikePostWorker } from "./workers/likePost";
import { callUnlikePostWorker } from "./workers/unlikePost";

export const postsWatchers = Object.freeze({
    * watchFetchPosts () {
        yield takeEvery(types.FETCH_POSTS, callFetchPostsWorker);
    },
    * watchCreatePosts () {
        yield takeEvery(asyncTypes.CREATE_POSTS_ASYNC, callCreatePostsWorker);
    },
    * watchRemovePosts () {
        yield takeEvery(asyncTypes.REMOVE_POSTS_ASYNC, callRemovePostsWorker);
    },
    * watchLikePosts () {
        yield takeEvery(asyncTypes.LIKE_POST_ASYNC, callLikePostWorker);
    },
    * watchUnlikePosts () {
        yield takeEvery(asyncTypes.UNLIKE_POST_ASYNC, callUnlikePostWorker);
    },
});
