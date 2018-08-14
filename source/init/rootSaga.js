// Core
import { all } from "redux-saga/effects";

// Instruments
import { postsWatchers } from "redux/posts/saga";
import { authWatchers } from "redux/authentication/saga";
import { uiWatchers } from "redux/ui/saga";
import { usersWatchers } from "redux/users/saga";
import { profileWatchers } from "redux/profile/saga/index";

export function* rootSaga () {
    yield all([
        // postsWatchers
        postsWatchers.watchFetchPosts(),
        postsWatchers.watchCreatePosts(),
        postsWatchers.watchRemovePosts(),
        postsWatchers.watchLikePosts(),
        postsWatchers.watchUnlikePosts(),

        // authWatchers
        authWatchers.watchSignUp(),
        authWatchers.watchLogin(),
        authWatchers.watchLogout(),
        authWatchers.watchAuthenticate(),

        // uiWatchers
        uiWatchers.watchInitialize(),

        // usersWatchers
        usersWatchers.watchFetchUsers(),

        // profileWatchers
        profileWatchers.watchUpdateProfile(),
        profileWatchers.watchUpdateAvatar()
    ]);
}
