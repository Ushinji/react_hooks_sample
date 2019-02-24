import { createContext, Dispatch as ReactDispatch } from 'react';
import { combineReducers } from 'redux';
import project, { InitializeProjectAction, ProjectState } from './project';

export type Action<T extends string, P = void> = P extends {}
  ? {
      type: T;
      payload: { [K in keyof P]: P[K] };
    }
  : {
      type: Text;
    };

export type Actions = InitializeProjectAction;

export interface RootState {
  projectState: ProjectState;
}

export const rootReducer = combineReducers({
  projectState: project,
});

export const initialState = rootReducer(undefined, { type: 'INIT' });

export type Dispatch = ReactDispatch<Actions>;

export const StoreContext = createContext<{
  state: RootState;
  dispatch: Dispatch;
}>(null as any);
