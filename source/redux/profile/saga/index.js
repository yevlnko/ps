import { takeEvery } from "redux-saga/effects";

// Instruments
// import { types } from "redux/posts/types";
import { asyncTypes } from "./asyncTypes";
import { callUpdateProfileWorker } from "./workers/updateProfile";
import { callUpdateAvatarWorker } from "./workers/updateAvatar";

export const profileWatchers = Object.freeze({
    * watchUpdateProfile () {
        yield takeEvery(
            asyncTypes.UPDATE_PROFILE_ASYNC,
            callUpdateProfileWorker
        );
    },
    * watchUpdateAvatar () {
        yield takeEvery(asyncTypes.UPDATE_AVATAR_ASYNC, callUpdateAvatarWorker);
    },
});
