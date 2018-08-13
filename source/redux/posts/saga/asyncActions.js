// Core
import { asyncTypes } from "./asyncTypes";

export const postActionsAsync = Object.freeze({
    createPostAsync: (comment) => ({
        type:    asyncTypes.CREATE_POSTS_ASYNC,
        payload: comment,
    }),
    removePostAsync: (id) => ({
        type:    asyncTypes.REMOVE_POSTS_ASYNC,
        payload: id,
    }),
    likePostAsync: (id) => ({
        type:    asyncTypes.LIKE_POST_ASYNC,
        payload: id,
    }),
    unlikePostAsync: (id) => ({
        type:    asyncTypes.UNLIKE_POST_ASYNC,
        payload: id,
    }),
});
