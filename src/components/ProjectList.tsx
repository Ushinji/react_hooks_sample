import * as React from 'react';
import { getProjects } from 'src/ducks/project/operation';
import { StoreContext } from '../ducks';

const ProjectList: React.FunctionComponent = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  React.useEffect(() => {
    getProjects(dispatch);
  }, []);

  if (!state.projectState.length) {
    return <div>Now Loading...</div>;
  }

  return (
    <div>
      <h1>プロジェクト一覧</h1>
      <ul>
        {state.projectState.map(project => {
          return <li key={project.id}>{project.displayName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
