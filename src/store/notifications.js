import { makeAutoObservable } from "mobx";

class Notifications {
    notification = null;

    constructor() {
        makeAutoObservable(this)
    }

    setNotification(notification) {
        this.notification = notification;
    }
}

export default Notifications;