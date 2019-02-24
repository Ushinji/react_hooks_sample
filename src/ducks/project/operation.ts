import { Dispatch } from '..';
import { initialize } from './actions';
import { Project } from './reducers';

export const getProjects = async (dispatch: Dispatch) => {
  const res = await fetch('http://localhost:3001/projects');
  console.log(res);
  const projects = (await res.json()) as Project[];
  console.log(projects);
  dispatch(initialize(projects));
};

// export const updateProject = async (id: number, displayName: string) => {
//   const data = {
//     displayName,
//   };
//   const res = await fetch(`http:/localhost:3001/projects/${id}`, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRF-Token': 'TEST_CSRF_TOKEN',
//     },
//   });
//   return (await res.json()) as Project;
// };
