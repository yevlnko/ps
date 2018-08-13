// Core
import { Map } from 'immutable';

// Instruments
import { types } from "./types";

const initialState = Map({
    isAuthenticated: false,
});

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
        case types.AUTHENTICATE_SUCCESS:
            return state.set('isAuthenticated', true);

        case types.LOGOUT_SUCCESS:
            return state.set('isAuthenticated', false);


        default:
            return state;
    }
};
