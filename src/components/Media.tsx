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

          {/* TODO: what happens if its a manga */}

          {data.bannerImage && (
            <img
              alt={`${data.title.english || data.title.romaji} banner`}
              src={data.bannerImage}
            />
          )}

          <h1>{data.title.english}</h1>

          {data.coverImage && (
            <img
              alt={`${data.title.english || data.title.romaji} cover`}
              src={data.coverImage.large}
            />
          )}

          {/* TODO: Make a trailer component */}
          {/* NOTE: Right now only youtube and dailymotion are supported */}
          {data.trailer &&
            ['youtube', 'dailymotion'].includes(data.trailer.site) && (
              <embed
                title={`${data.title.english || data.title.romaji} trailer`}
                src={
                  data.trailer.site === 'youtube'
                    ? `https://www.youtube.com/embed/${data.trailer.id}`
                    : `https://www.dailymotion.com/embed/video/${data.trailer.id}`
                }
              />
            )}

          <p>
            <span>{data.type}</span> | <span>{data.status}</span>
          </p>
          {/* TODO: date component for start and end date */}
          {/* TODO: Season and episodes */}
          {/* TODO: Stats */}

          {/* NOTE: the description can have <br> in it */}
          {data.description &&
            data.description
              .split('<br>')
              .map((line: string, i: number) => <p key={i}>{line}</p>)}

          {/* TODO: put the rest on here */}

          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default Media;
