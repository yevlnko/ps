// Core
import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";
import { replace } from "react-router-redux";
import { actions } from "react-redux-form";

// Instruments
import { api } from "config";
import { authActions } from "redux/authentication/actions";
import { uiActions } from "redux/ui/actions";
import { profileActions } from "redux/profile/actions";
import { book } from "navigation/book";
import { callLoginWorker } from "../workers/login";

const apiUrl = `${api}/user/login`;
const loginActions = authActions.login(__.credentials);

const saga = cloneableGenerator(callLoginWorker)(loginActions);

describe("login saga:", () => {
    test("should dispatch SET_AUTH_FETCHING_STATE action", () => {
        expect(saga.next().value).toEqual(
            put(uiActions.setAuthFetchingState(true))
        );
    });
    test("should call fetch request", () => {
        expect(saga.next().value).toEqual(
            call(fetch, apiUrl, {
                method:  "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(__.credentials),
            })
        );
    });
    test("should handle !== 200", () => {
        const clone = saga.clone();

        expect(clone.next(__.fetchResponseFail).value).toEqual(
            call([__.fetchResponseFail, __.fetchResponseFail.json])
        );

        expect(clone.next(__.responseDataFail).value).toEqual(
            put(authActions.loginFail(__.error))
        );

        expect(clone.next().value).toEqual(
            put(uiActions.setAuthFetchingState(false))
        );

        expect(clone.next().done).toEqual(true);
    });
    test("fetch request should complete successfully", () => {
        expect(saga.next(__.fetchResponseSuccess).value).toEqual(
            call([__.fetchResponseSuccess, __.fetchResponseSuccess.json])
        );
    });
    test("localStorage should contain a token", () => {
        expect(saga.next(__.responseDataSuccess).value).toBeUndefined();

        expect(localStorage.getItem("token")).toBe(JSON.stringify(__.token));

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });

    test("should dispatch LOGIN_SUCCESS", () => {
        expect(saga.next().value).toEqual(put(authActions.loginSuccess()));
    });

    test("should dispatch FILL_PROFILE", () => {
        expect(saga.next().value).toEqual(
            put(profileActions.fillProfile(__.userProfile))
        );
    });

    test("should call React Router replace", () => {
        expect(saga.next().value).toEqual(put(replace(book.feed)));
    });

    test("should call React Redux Form reset", () => {
        expect(saga.next().value).toEqual(put(actions.reset("forms.login")));
    });

    test("should call SET_AUTH_FETCHING_STATE", () => {
        expect(saga.next().value).toEqual(
            put(uiActions.setAuthFetchingState(false))
        );
    });

    test("should finish", () => {
        expect(saga.next().done).toEqual(true);
    });
});
