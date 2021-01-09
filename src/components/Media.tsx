import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getMedia } from '../api';

interface MediaProps {
  id: number;
}

function Media({ id }: MediaProps) {
  const history = useHistory();
  const { status, data, error, isFetching } = useQuery(
    ['media', id],
    async () => getMedia(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
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
          <p>
            <button onClick={() => history.goBack()}>{'< back'}</button>
          </p>
          <h1>{data.title.english}</h1>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default Media;
