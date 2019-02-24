import { Reducer } from 'redux';
import { ProjectActions } from './actions';
import { ActionTypes } from './types';

export type ProjectState = Project[];

export interface Project {
  id: number;
  displayName: string;
}

const initialState: Project[] = [];

const reducer: Reducer<ProjectState, ProjectActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return Object.assign([], state, action.payload.projects);
    default:
      return state;
  }
};

export default reducer;
