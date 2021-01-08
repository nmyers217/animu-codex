import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { getAllMedia } from '../api';

interface AnimeListProps {}

function AnimeList(props: AnimeListProps) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const { status, data, error, isFetching } = useQuery(
    // TODO: this will change once we support sorts and filters
    ['animelist', page, perPage],
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
            <div key={m.id}>
              {m.title.english && <h3>{m.title.english}</h3>}
              {m.title.romanji && <h3>{m.title.romanji}</h3>}

              {m.coverImage.medium && (
                <img
                  alt={`${m.title.english || m.title.romanji} cover`}
                  src={m.coverImage.medium}
                />
              )}

              <p>
                {m.type && <span>{m.type}</span>}
                {m.status && <span> | {m.status}</span>}
              </p>

              {/* NOTE: the description can have <br> in it */}
              {/* TODO: proper truncation */}
              {m.description &&
                m.description
                  .split('<br>')
                  .map((line: string) => <p>{line}</p>)
                  .shift()}
            </div>
          ))}

          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default AnimeList;
