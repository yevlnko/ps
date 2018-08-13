// Core
import { asyncTypes } from "./asyncTypes";

export const usersActionsAsync = Object.freeze({
    fetchUsersAsync: () => ({
        type: asyncTypes.FETCH_USERS_ASYNC,
    }),
});
