import { Reducer } from 'redux';
import { ProjectActions } from './actions';
import { ActionTypes } from './types';

export type ProjectState = Project[];

export interface Project {
  id: number;
  displayName: string;
}

const initialState: Project[] = [
  {
    id: 1,
    displayName: 'TEST_PROJECT1',
  },
  {
    id: 2,
    displayName: 'TEST_PROJECT2',
  },
];

const reducer: Reducer<ProjectState, ProjectActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET:
      return Object.assign({}, state, {
        project: action.payload.project,
      });
    default:
      return state;
  }
};

export default reducer;
