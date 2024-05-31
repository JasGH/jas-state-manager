# Jas State Manager (Redux-Style)

A simple state management library in TypeScript (Redux-style).

## Installation

```sh
npm install jas-state-manager
```

## Usage in TypeScript

```typescript
import StateManager from 'jas-state-manager';

// Define the state interface
interface AppState {
  count: number;
  user: {
    name: string;
    age: number;
  };
}

// Initial state
const initialState: AppState = {
  count: 0,
  user: {
    name: 'John Doe',
    age: 30,
  },
};

// Reducer function
const reducer = (state: AppState, action: { type: string; payload?: Partial<AppState> }): AppState => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload!.count! };
    case 'SET_USER':
      return { ...state, user: { ...state.user, ...action.payload!.user! } };
    default:
      return state;
  }
};

// Create an instance of StateManager
const stateManager = new StateManager(reducer, initialState);

// Subscribe to state changes
stateManager.subscribe((state) => {
  console.log('State changed:', state);
});

// Dispatch actions to update the state
stateManager.dispatch({ type: 'SET_COUNT', payload: { count: 1 } });
stateManager.dispatch({ type: 'SET_USER', payload: { user: { name: 'Jane Doe', age: 25 } } });
```

## Usage in JavaScript

```javascript
import StateManager from 'jas-state-manager';

// Initial state
const initialState = {
  count: 0,
  user: {
    name: 'John Doe',
    age: 30,
  },
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload.count };
    case 'SET_USER':
      return { ...state, user: { ...state.user, ...action.payload.user } };
    default:
      return state;
  }
};

// Create an instance of StateManager
const stateManager = new StateManager(reducer, initialState);

// Subscribe to state changes
stateManager.subscribe((state) => {
  console.log('State changed:', state);
});

// Dispatch actions to update the state
stateManager.dispatch({ type: 'SET_COUNT', payload: { count: 1 } });
stateManager.dispatch({ type: 'SET_USER', payload: { user: { name: 'Jane Doe', age: 25 } } });
```

## API

### `StateManager<T>`

#### `constructor(reducer: Reducer<T>, initialState: T)`

Creates a new instance of `StateManager` with the given reducer and initial state.

#### `getState(): T`

Returns the current state.

#### `dispatch(action: Action<T>): void`

Dispatches an action to update the state.

#### `subscribe(listener: (state: T) => void): void`

Subscribes to state changes.

#### `unsubscribe(listener: (state: T) => void): void`

Unsubscribes from state changes.
