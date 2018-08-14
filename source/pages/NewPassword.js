// Core
import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    NewPasswordForm
} from "components";

// Instruments
import { profileActionsAsync } from "redux/profile/saga/asyncActions";
import { uiActions } from "redux/ui/actions";

const mapDispatchToProps = {
    setPasswordEditingState: uiActions.setPasswordEditingState,
    updateProfileAsync:      profileActionsAsync.updateProfileAsync,
};

const mapStateToProps = (state) => {
    return {
        isPasswordEditing:   state.ui.get("isPasswordEditing"),
        pisPasswordFetching: state.ui.get("pisPasswordFetching"),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class NewPassword extends Component {
    render () {
        const { pisPasswordFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { pisPasswordFetching } />
                <Navigation />
                <Catcher>
                    <NewPasswordForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
