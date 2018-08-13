// Instruments
import { types } from "./types";

export const profileActions = Object.freeze({
    fillProfile: (profile) => ({
        type:    types.FILL_PROFILE,
        payload: profile,
    }),
    clearProfile: () => ({
        type: types.CLEAR_PROFILE,
    }),
    updateAvatar: (avatar) => ({
        type:    types.UPDATE_AVATAR,
        payload: avatar,
    }),
});
