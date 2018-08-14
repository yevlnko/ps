// Core
import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    SignupForm
} from "components";

import { authActions } from "redux/authentication/actions";

const mapDispatchToProps = {
    signup: authActions.signup,
};

const mapStateToProps = (state) => {
    return {
        isAuthFetching: state.ui.get("isAuthFetching"),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Signup extends Component {
    render () {
        const { isAuthFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isAuthFetching } />
                <Navigation />
                <Catcher>
                    <SignupForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
