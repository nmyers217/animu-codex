import React from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../components/Nav';
import MediaDetail from '../components/MediaDetail';
import Footer from '../components/Footer';

function MediaDetailPage() {
  const { id } = useParams<any>();

  return (
    <>
      <Nav showBack />
      <main className="bg-gray-100 dark:bg-gray-900 pt-16">
        <MediaDetail id={id} />
      </main>
      <Footer />
    </>
  );
}

export default MediaDetailPage;
