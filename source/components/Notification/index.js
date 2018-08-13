// Core
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

// Instruments
import Styles from './styles.m.css';

export default class Notification extends Component {
    state = {
        notificationIn: true,
    };

    _hideNotification = () => {
        this.setState({
            notificationIn: false,
        });
        clearTimeout(this.timeout);
    };

    _handleNotificationAppear = (postman) => {
        gsap.fromTo(
            postman,
            0.5,
            { opacity: 0 },
            {
                opacity:    1,
                onComplete: () => {
                    this.timeout = setTimeout(this._hideNotification, 5000);
                },
            }
        );
    };

    _handleNotificationDisappear = (postman) => {
        const { hideNotification, id } = this.props;

        gsap.fromTo(
            postman,
            0.5,
            { opacity: 1 },
            {
                opacity:    0,
                onComplete: () => {
                    hideNotification(id);
                },
            }
        );
    };

    render () {
        const { error } = this.props;
        const { notificationIn } = this.state;

        return (
            <Transition
                appear
                in = { notificationIn }
                timeout = { 5000 }
                onClick = { this._hideNotification }
                onEnter = { this._handleNotificationAppear }
                onExit = { this._handleNotificationDisappear }>
                <section className = { Styles.notification }>
                    <h6>Error!</h6>
                    <span>
                        <span>Message:</span>
                        <span>{error.message}</span>
                    </span>
                </section>
            </Transition>
        );
    }
}
