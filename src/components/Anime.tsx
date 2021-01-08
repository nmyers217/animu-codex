import React from 'react';
import { useQuery } from 'react-query';

import { getAnime } from '../api';

interface AnimeProps {
  id: number;
}

function Anime({ id }: AnimeProps) {
  const { status, data, error, isFetching } = useQuery(
    ['anime', id],
    async () => getAnime(id),
    {
      enabled: !!id,
    }
  );

  return (
    <div>
      {!id || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {(error as Error).message}</span>
      ) : (
        <>
          <h1>{data.title.english}</h1>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default Anime;
