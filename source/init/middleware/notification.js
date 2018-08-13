import { notificationsActions } from "redux/notifications/actions";

export const notification = (store) => (next) => (action) => {
    if (action.error) {
        store.dispatch(notificationsActions.showNotification(action.payload));
    }

    return next(action);
};
