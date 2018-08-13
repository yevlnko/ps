// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';


// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    ProfileForm
} from 'components';

// Instruments
import { profileActionsAsync } from "redux/profile/saga/asyncActions";
import { uiActions } from "redux/ui/actions";

const mapDispatchToProps = {
    updateProfileAsync:     profileActionsAsync.updateProfileAsync,
    setProfileEditingState: uiActions.setProfileEditingState,
};

const mapStateToProps = (state) => {
    return {
        isProfileFetching: state.ui.get('isProfileFetching'),
        isProfileEditing:  state.ui.get('isProfileEditing'),
        isAvatarFetching:  state.ui.get('isAvatarFetching'),
        profile:           state.profile,
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Profile extends Component {
    render () {
        const { isAvatarFetching, isProfileFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isProfileFetching || isAvatarFetching } />
                <Navigation />
                <Catcher>
                    <ProfileForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
