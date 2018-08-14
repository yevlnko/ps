// Instruments
import { profileReducer } from "../reducer";
import { profileActions } from "../actions";

describe("profile Reducer:", () => {
    test("should return initial State", () => {
        expect(profileReducer(undefined, { type: "@@INIT" })).toMatchSnapshot();
    });

    test("should handle FILL_PROFILE", () => {
        expect(
            profileReducer(
                undefined,
                profileActions.fillProfile(__.userProfile)
            )
        ).toMatchSnapshot();
    });

    test("should handle CLEAR_PROFILE", () => {
        expect(
            profileReducer(undefined, profileActions.clearProfile())
        ).toMatchSnapshot();
    });

    test("should handle UPDATE_AVATAR", () => {
        expect(
            profileReducer(undefined, profileActions.updateAvatar([]))
        ).toMatchSnapshot();
    });
});
