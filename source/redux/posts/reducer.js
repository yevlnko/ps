// Instruments
import { types } from "./types";
import { fromJS, List } from 'immutable';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return fromJS(action.payload);

        case types.CREATE_POSTS:
            return state.unshift(fromJS(action.payload));


        case types.REMOVE_POSTS:
            return state.filter((post) => {
                return post.get('id') !== action.payload;
            });


        case types.LIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(
                        (post) => post.get('id') === action.payload.id,
                    ),
                    'likes'
                ],
                (likes) => likes.unshift(action.payload.liker),
            );

        case types.UNLIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(
                        (post) => post.get('id') === action.payload.id,
                    ),
                    'likes'
                ],
                (likes) =>
                    likes.filter(
                        (like) => like.get('id') !== action.payload.userId,
                    ),
            );

        default:
            return state;
    }
};
