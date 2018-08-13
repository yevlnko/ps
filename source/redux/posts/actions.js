// Instruments
import { types } from "./types";

export const postsActions = Object.freeze({
    fetchPosts: () => ({
        type: types.FETCH_POSTS,
    }),
    fetchPostsFail: (error) => ({
        type:    types.FETCH_POSTS_FAIL,
        payload: error,
        error:   true,
    }),
    fetchPostsSuccess: (posts) => ({
        type:    types.FETCH_POSTS_SUCCESS,
        payload: posts,
    }),
    createPost: (post) => ({
        type:    types.CREATE_POSTS,
        payload: post,
    }),
    removePost: (id) => ({
        type:    types.REMOVE_POSTS,
        payload: id,
    }),
    likePost: (data) => ({
        type:    types.LIKE_POST,
        payload: data,
    }),
    unlikePost: (data) => ({
        type:    types.UNLIKE_POST,
        payload: data,
    }),
});
