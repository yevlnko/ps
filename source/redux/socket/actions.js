// Instruments
import { socket } from "init/socket";
import { uiActions } from "redux/ui/actions";
import { postsActions } from "redux/posts/actions";


export const socketActions = Object.freeze({
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState(true));
        });
        socket.on('disconnect', () => {
            dispatch(uiActions.setOnlineState(false));
        });
    },
    listenPosts: () => (dispatch, getState) => {

        const currentUserID = getState().profile.get('id');

        socket.on('create', (response) => {
            const { data: post, meta } = JSON.parse(response);

            if (currentUserID === meta.userID) {
                return null;
            }

            dispatch(postsActions.createPost(post));
        });

        socket.on('remove', (response) => {
            const { data: postId, meta } = JSON.parse(response);

            if (currentUserID === meta.userID) {
                return null;
            }

            dispatch(postsActions.removePost(postId));
        });


        socket.on('like', (response) => {
            const {
                data: { userID, postID },
                meta,
            } = JSON.parse(response);

            if (currentUserID === meta.userID) {
                return null;
            }

            if (meta.action === 'like') {
                const liker = getState()
                    .users.find((user) => user.get('id') === userID)
                    .delete('avatar');

                dispatch(
                    postsActions.likePost({
                        id: postID,
                        liker,
                    })
                );

                return null;
            }

            dispatch(postsActions.unlikePost({
                id:     postID,
                userId: userID,
            }));

        });

    },
});
