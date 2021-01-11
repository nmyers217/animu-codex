import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { getAllMedia } from '../api';
import { SearchFormState } from './SearchForm';
import MediaSummary from './MediaSummary';

interface MediaListProps {
  filterState: SearchFormState;
}

function MediaList({ filterState }: MediaListProps) {
  // TODO: replace this junk with useInfiniteQuery
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const { status, data, error, isFetching } = useQuery(
    ['medialist', page, perPage, filterState],
    async () => getAllMedia(page, perPage, filterState),
    {
      // We will consider the data fresh for 5 minutes to save our rate limit
      staleTime: 5 * 60 * 1000,
    }
  );

  return (
    <div className="subpixel-antialiased md:antialiased">
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {(error as Error).message}</span>
      ) : (
        <>
          <div className="divide-y-2 divide-gray-100">
            {data.media.map((m: any) => (
              <MediaSummary key={m.id} media={m} />
            ))}
          </div>

          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default MediaList;
