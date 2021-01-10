import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { getAllMedia } from '../api';
import MediaSummary from './MediaSummary';

interface MediaListProps {}

function MediaList(props: MediaListProps) {
  // TODO: replace this junk with useInfiniteQuery
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const { status, data, error, isFetching } = useQuery(
    ['medialist', page, perPage],
    async () => getAllMedia(page, perPage),
    {
      // We will consider the data fresh for 5 minutes to save our rate limit
      staleTime: 5 * 60 * 1000,
    }
  );

  return (
    <div>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {(error as Error).message}</span>
      ) : (
        <>
          <h1>{`Page ${data.pageInfo.currentPage}/${data.pageInfo.lastPage}`}</h1>

          {data.media.map((m: any) => (
            <MediaSummary key={m.id} media={m} />
          ))}

          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default MediaList;
