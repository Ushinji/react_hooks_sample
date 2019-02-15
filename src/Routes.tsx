import * as React from 'react';
import { Route, Switch } from 'react-router';
import Counter from './components/Counter';
import HookedCounter from './components/HookedCounter';
import ProjectDetail from './components/ProjectDetail';
import RootPage from './components/RootPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={'/'} component={RootPage} />
      <Route exact={true} path={'/counter'} component={Counter} />
      <Route exact={true} path={'/hooked_counter'} component={HookedCounter} />
      <Route exact={true} path={'/projects'} component={ProjectDetail} />
    </Switch>
  );
};

export default Routes;
