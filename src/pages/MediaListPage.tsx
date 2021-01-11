import React from 'react';

import Nav from '../components/Nav';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';

function MediaListPage() {
  return (
    <>
      <Nav />
      <main className="bg-gray-100 pt-16">
        <MediaList />
      </main>
      <Footer />
    </>
  );
}

export default MediaListPage;
