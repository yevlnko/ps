// Core
import { Map } from "immutable";
import { authReducer } from "../reducer";

// Instruments
import { authActions } from "../actions";

const initialState = Map({
    isAuthenticated: false,
});

describe("auth Reducer:", () => {
    test("should return initial State", () => {
        expect(authReducer(undefined, { type: "@@INIT" })).toEqual(
            initialState
        );
    });
    test("should handle LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTHENTICATE_SUCCESS", () => {
        expect(authReducer(undefined, authActions.loginSuccess())).toEqual(
            initialState.set("isAuthenticated", true)
        );
        expect(authReducer(undefined, authActions.signupSuccess())).toEqual(
            initialState.set("isAuthenticated", true)
        );
        expect(
            authReducer(undefined, authActions.authenticateSuccess())
        ).toEqual(initialState.set("isAuthenticated", true));
    });

    test("should handle LOGOUT_SUCCESS", () => {
        const authenticatedState = initialState.set("isAuthenticated", true);

        expect(
            authReducer(authenticatedState, authActions.logoutSuccess())
        ).toEqual(authenticatedState.set("isAuthenticated", false));
    });
});
