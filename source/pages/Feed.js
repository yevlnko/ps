// Core
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { fromJS } from "immutable";
import { connect } from "react-redux";

// Components
import { Spinner, Catcher, Posts, Notifications, Navigation } from "components";

// Instruments
import { postsActions } from "redux/posts/actions";
import { postActionsAsync } from "redux/posts/saga/asyncActions";
import { usersActionsAsync } from "redux/users/saga/asyncActions";

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                ...postsActions,
                ...postActionsAsync,
                ...usersActionsAsync,
                // fetchPosts:      postsActions.fetchPosts,
                // createPostAsync: postActionsAsync.createPostAsync,
                // removePostAsync: postActionsAsync.removePostAsync,
                // likePostAsync:   postActionsAsync.likePostAsync,
                // unlikePostAsync: postActionsAsync.unlikePostAsync,
            },
            dispatch
        ),
    };
};

const mapStateToProps = (state) => {
    return {
        isPostFetching: state.ui.get("isPostFetching"),
        posts:          state.posts,
        profile:        state.profile,
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Feed extends Component {
    static defaultProps = {
        isFeedFetching: false,
        profile:        fromJS({
            id:     "123",
            avatar:
                "http://i0.kym-cdn.com/entries/icons/original/000/000/774/lime-cat.jpg",
            firstName: "Cat",
        }),
        actions: {
            fetchUsers: () => {},
            createPost: () => {},
        },
    };

    render () {
        const { actions, isPostFetching, profile, posts } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isPostFetching } />
                <Navigation />
                <Catcher>
                    <Posts actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}
