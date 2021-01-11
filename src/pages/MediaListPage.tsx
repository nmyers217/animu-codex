import React, { useState } from 'react';

import Nav from '../components/Nav';
import SearchForm, {
  defaultFormState,
  SearchFormState,
} from '../components/SearchForm';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';

function MediaListPage() {
  // TODO: support filling this via query string

  const [filterState, setFilterState] = useState<SearchFormState>(
    defaultFormState
  );

  return (
    <>
      <Nav />
      <main className="bg-gray-100 pt-16">
        <SearchForm onSubmit={setFilterState} defaults={filterState} />
        <MediaList filterState={filterState} />
      </main>
      <Footer />
    </>
  );
}

export default MediaListPage;
