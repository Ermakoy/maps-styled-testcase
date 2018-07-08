import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { List } from './modules';
import DataProvider from 'app/components/modules/DataProvider';
import CycleMap from 'app/components/modules/Map';
import { Layout } from 'app/components/modules/Layout';

const App: React.StatelessComponent = () => (
  <Switch>
    <Route
      path="/"
      render={() => (
        <Layout>
          <DataProvider
            render={({ data, updateSelectedRide, selectedRide }) => (
              <React.Fragment>
                <List updateSelectedRide={updateSelectedRide} items={data} />
                <CycleMap selectedRide={selectedRide} items={data} />
              </React.Fragment>
            )}
          />
        </Layout>
      )}
    />
  </Switch>
);

export default hot(module)(App);
