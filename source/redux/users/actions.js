// Instruments
import { types } from "./types";

export const usersActions = Object.freeze({
    fillUsers: (users) => ({
        type:    types.FILL_USERS,
        payload: users,
    }),
    clearUsers: () => ({
        type: types.CLEAR_USERS,
    }),
});
