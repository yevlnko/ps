import { authActions } from "../actions";
import { types } from "../types";

// GLOBAL VARIABLE
// __.credentials  from setup JEST FILE
// __.error from setup JEST FILE

describe('Auth actions:', () => {

    describe('login:', () => {
        test('LOGIN', () => {
            expect(
                authActions.login(__.credentials)
            ).toEqual(
                {
                    type:    types.LOGIN,
                    payload: __.credentials,
                }
            );
        });
        test('LOGIN_SUCCESS', () => {
            expect(
                authActions.loginSuccess()
            ).toEqual(
                {
                    type: types.LOGIN_SUCCESS,
                }
            );
        });
        test('LOGIN_FAIL', () => {
            expect(
                authActions.loginFail(__.error)
            ).toEqual(
                {
                    type:    types.LOGIN_FAIL,
                    payload: __.error,
                    error:   true,
                }
            );
        });
    });

    describe('authenticate:', () => {
        test('AUTHENTICATE', () => {
            expect(
                authActions.authenticate(__.token)
            ).toEqual(
                {
                    type:    types.AUTHENTICATE,
                    payload: __.token,
                }
            );
        });
        test('AUTHENTICATE_SUCCESS', () => {
            expect(
                authActions.authenticateSuccess()
            ).toEqual(
                {
                    type: types.AUTHENTICATE_SUCCESS,
                }
            );
        });
        test('AUTHENTICATE_FAIL', () => {
            expect(
                authActions.authenticateFail(__.error)
            ).toEqual(
                {
                    type:    types.AUTHENTICATE_FAIL,
                    payload: __.error,
                    error:   true,
                }
            );
        });
    });

    describe('signup:', () => {
        test('SIGNUP', () => {
            expect(
                authActions.signup(__.credentials)
            ).toEqual(
                {
                    type:    types.SIGNUP,
                    payload: __.credentials,
                }
            );
        });
        test('SIGNUP_SUCCESS', () => {
            expect(
                authActions.signupSuccess()
            ).toEqual(
                {
                    type: types.SIGNUP_SUCCESS,
                }
            );
        });
        test('SIGNUP_FAIL', () => {
            expect(
                authActions.signupFail(__.error)
            ).toEqual(
                {
                    type:    types.SIGNUP_FAIL,
                    payload: __.error,
                    error:   true,
                }
            );
        });
    });

    describe('logout:', () => {
        test('LOGOUT', () => {
            expect(
                authActions.logout()
            ).toEqual(
                {
                    type: types.LOGOUT,
                }
            );
        });
        test('LOGOUT_SUCCESS', () => {
            expect(
                authActions.logoutSuccess()
            ).toEqual(
                {
                    type: types.LOGOUT_SUCCESS,
                }
            );
        });
        test('LOGOUT_FAIL', () => {
            expect(
                authActions.logoutFail(__.error)
            ).toEqual(
                {
                    type:    types.LOGOUT_FAIL,
                    payload: __.error,
                    error:   true,
                }
            );
        });
    });

});
