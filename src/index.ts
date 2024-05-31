// Action type
interface Action<T> {
    type: string;
    payload?: Partial<T>;
}

// Reducer type
type Reducer<T> = (state: T, action: Action<T>) => T;

// StateManager class
class StateManager<T> {
    private state: T;
    private listeners: ((state: T) => void)[] = [];
    private reducer: Reducer<T>;

    constructor(reducer: Reducer<T>, initialState: T) {
        this.reducer = reducer;
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action<T>): void {
        this.state = this.reducer(this.state, action);
        this.notify();
    }

    subscribe(listener: (state: T) => void): void {
        this.listeners.push(listener);
    }

    unsubscribe(listener: (state: T) => void): void {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    private notify(): void {
        this.listeners.forEach(listener => listener(this.state));
    }
}

export default StateManager;
