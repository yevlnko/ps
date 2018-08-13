// Core
import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

// Pages
import Private from './Private';
import Public from './Public';

import Loading from 'components/Loading';

// Instruments
import { uiActions } from "redux/ui/actions";
import { socketActions } from "redux/socket/actions";
import { socket, joinSocketChannel } from "init/socket";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authentication.get('isAuthenticated'),
        isInitialized:   state.ui.get('isInitialized'),
    };
};

const mapDispatchToProps = {
    initialize: uiActions.initialize,
    ...socketActions,
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
    componentDidMount () {
        const { initialize, listenConnection } = this.props;

        initialize();
        joinSocketChannel();
        listenConnection();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;


        return isInitialized ? (
            <Switch>
                {isAuthenticated && <Private listenPosts = { listenPosts } />}
                <Public />
            </Switch>
        ): <Loading />;
    }
}
