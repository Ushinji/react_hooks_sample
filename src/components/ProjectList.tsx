import * as React from 'react';
import { StoreContext } from '../ducks';

const ProjectList: React.FunctionComponent = () => {
  const { state } = React.useContext(StoreContext);
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
