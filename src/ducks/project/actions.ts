import { Action } from '../';
import { Project } from './reducers';
import { ActionTypes } from './types';

export type SetProjectAction = Action<ActionTypes.SET, { project: Project }>;

export const set = (project: Project): SetProjectAction => {
  return {
    type: ActionTypes.SET,
    payload: { project },
  };
};

export type ProjectActions = SetProjectAction;
