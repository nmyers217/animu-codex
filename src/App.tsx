import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import MediaListPage from './pages/MediaListPage';
import MediaDetailPage from './pages/MediaDetailPage';
import PageNotFound from './pages/PageNotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/media" />
          </Route>

          <Route exact path="/media">
            <MediaListPage />
          </Route>

          <Route path="/media/:id">
            <MediaDetailPage />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
