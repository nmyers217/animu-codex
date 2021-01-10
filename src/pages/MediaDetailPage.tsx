import React from 'react';
import { useParams } from 'react-router-dom';

import MediaDetail from '../components/MediaDetail';

function MediaDetailPage() {
  const { id } = useParams<any>();

  return (
    <>
      <MediaDetail id={id} />
    </>
  );
}

export default MediaDetailPage;
