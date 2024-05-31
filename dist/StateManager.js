"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// StateManager class
class StateManager {
    constructor(reducer, initialState) {
        this.listeners = [];
        this.reducer = reducer;
        this.state = initialState;
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.notify();
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    unsubscribe(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }
    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}
exports.default = StateManager;
