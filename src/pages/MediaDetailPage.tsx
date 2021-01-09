import React from 'react';
import { useParams } from 'react-router-dom';

import Media from '../components/Media';

function MediaDetailPage() {
  const { id } = useParams<any>();

  return (
    <>
      <Media id={id} />
    </>
  );
}

export default MediaDetailPage;
