import { takeEvery } from "redux-saga/effects";

// Instruments
import { types } from "redux/ui/types";
import { callInitializeWorker } from "./workers/initialize";

export const uiWatchers = Object.freeze({
    * watchInitialize () {
        yield takeEvery(types.INITIALIZE, callInitializeWorker);
    },
});
