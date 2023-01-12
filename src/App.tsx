import {Admin, Resource, ListGuesser} from 'react-admin';
import fakeRestDataProvider from 'ra-data-fakerest';

import data from './data';

export const App = () => {
  const dataProvider = fakeRestDataProvider(data, true);

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="patients" list={ListGuesser} />
    </Admin>
  );
};
