interface Action<T> {
    type: string;
    payload?: Partial<T>;
}
type Reducer<T> = (state: T, action: Action<T>) => T;
declare class StateManager<T> {
    private state;
    private listeners;
    private reducer;
    constructor(reducer: Reducer<T>, initialState: T);
    getState(): T;
    dispatch(action: Action<T>): void;
    subscribe(listener: (state: T) => void): void;
    unsubscribe(listener: (state: T) => void): void;
    private notify;
}
export default StateManager;
