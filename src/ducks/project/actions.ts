import { Action } from '../';
import { Project } from './reducers';
import { ActionTypes } from './types';

export type InitializeProjectAction = Action<ActionTypes.INITIALIZE, { projects: Project[] }>;

export const initialize = (projects: Project[]): InitializeProjectAction => {
  return {
    type: ActionTypes.INITIALIZE,
    payload: { projects },
  };
};

export type ProjectActions = InitializeProjectAction;
