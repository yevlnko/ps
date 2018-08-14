// Core
import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    LoginForm
} from "components";

import { authActions } from "redux/authentication/actions";

const mapDispatchToProps = {
    login: authActions.login,
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
export default class Login extends Component {
    render () {
        const { isAuthFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isAuthFetching } />
                <Navigation />
                <Catcher>
                    <LoginForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
