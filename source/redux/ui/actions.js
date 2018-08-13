// Instruments
import { types } from "./types";

export const uiActions = Object.freeze({
    initialize: () => ({
        type: types.INITIALIZE,
    }),
    initializeSuccess: () => ({
        type: types.INITIALIZE_SUCCESS,
    }),
    setOnlineState: (onlineState) => ({
        type:    types.SET_ONLINE_STATE,
        payload: onlineState,
    }),
    setPostFetchingState: (postFetchingState) => ({
        type:    types.SET_POSTS_FETCHING_STATE,
        payload: postFetchingState,
    }),
    setAuthFetchingState: (authFetchingState) => ({
        type:    types.SET_AUTH_FETCHING_STATE,
        payload: authFetchingState,
    }),
    emmitError: (error, metaMessage = null) => ({
        type:    types.EMMIT_ERROR,
        payload: error,
        error:   true,
        meta:    metaMessage,
    }),
    setProfileFetchingState: (state) => ({
        type:    types.SET_PROFILE_FETCHING_STATE,
        payload: state,
    }),
    setProfileEditingState: (state) => ({
        type:    types.SET_PROFILE_EDITING_STATE,
        payload: state,
    }),
    setAvatarFetchingState: (state) => ({
        type:    types.SET_AVATAR_FETCHING_STATE,
        payload: state,
    }),
    setPasswordEditingState: (state) => ({
        type:    types.SET_PASSWORD_EDITING_STATE,
        payload: state,
    }),
});
