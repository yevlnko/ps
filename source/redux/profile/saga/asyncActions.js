// Core
import { asyncTypes } from "./asyncTypes";

export const profileActionsAsync = Object.freeze({
    updateProfileAsync: (profile) => ({
        type:    asyncTypes.UPDATE_PROFILE_ASYNC,
        payload: profile,
    }),
    updateAvatarAsync: (avatar) => ({
        type:    asyncTypes.UPDATE_AVATAR_ASYNC,
        payload: avatar,
    }),
});
