// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import { notificationsActions } from "redux/notifications/actions";

// Components
import Notification from 'components/Notification';

const Notifications = ({ notifications, hideNotification }) =>
    notifications.map((notification) => (
        <Notification
            hideNotification = { hideNotification }
            key = { notification.id }
            { ...notification }
        />
    ));

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    };
};

const mapDispatchToProps = {
    hideNotification: notificationsActions.hideNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
