// Core
import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

// Instruments
import { postsReducer as posts } from "redux/posts/reducer";
import { notificationsReducer as notifications } from "redux/notifications/reducer";
import { uiReducer as ui } from "redux/ui/reducer";
import { authReducer as authentication } from "redux/authentication/reducer";
import { profileReducer as profile } from "redux/profile/reducer";
import { formsReducer as forms } from "redux/forms/reducer";
import { usersReducer as users } from "redux/users/reducer";

export const rootReducer = combineReducers({
    router,
    posts,
    notifications,
    ui,
    authentication,
    profile,
    forms,
    users,
});
