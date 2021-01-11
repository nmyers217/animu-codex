import React, { useRef, useState } from 'react';

import Nav from '../components/Nav';
import SearchForm, {
  defaultFormState,
  SearchFormState,
} from '../components/SearchForm';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function MediaListPage() {
  // TODO: support filling this via query string

  const [filterState, setFilterState] = useState<SearchFormState>(
    defaultFormState
  );

  const topRef = useRef<any>();

  return (
    <>
      <Nav />
      <main ref={topRef} className="bg-gray-100 dark:bg-gray-900 pt-16">
        <div className="flex-col">
          <SearchForm onSubmit={setFilterState} defaults={filterState} />
          <MediaList filterState={filterState} />
        </div>
      </main>
      <ScrollToTop topRef={topRef} />
      <Footer />
    </>
  );
}

export default MediaListPage;
