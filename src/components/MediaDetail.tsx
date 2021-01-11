import React from 'react';
import { useQuery } from 'react-query';

import { getMedia } from '../api';
import LoadingSpinner from './LoadingSpinner';
import MediaSummary from './MediaSummary';

interface MediaDetailProps {
  id: number;
}

function MediaDetail({ id }: MediaDetailProps) {
  const { status, data, error } = useQuery(
    ['media', id],
    async () => getMedia(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
    }
  );

  return (
    <div className="subpixel-antialiased md:antialiased">
      {!id || status === 'loading' ? (
        <div className="container mx-auto max-w-5xl flex items-center justify-center pt-10 pb-16 sm:pt-24 sm:pb-36 lg:pt-40 lg:pb-56 text-center">
          <LoadingSpinner />
        </div>
      ) : status === 'error' ? (
        <span className="text-red-600">Error: {(error as Error).message}</span>
      ) : (
        <div className="flex flex-col">
          <div className="flex-none">
            {data.bannerImage && (
              <img
                alt={`${data.title.english || data.title.romaji} banner`}
                src={data.bannerImage}
              />
            )}
          </div>

          <div className="my-4 md:my-10 lg:my-14 p-4">
            <MediaSummary media={data} truncate={false} card>
              <div className="flex flex-row justify-between items-center mt-2 pt-4 space-x-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() =>
                    window.open(`https://anilist.co/anime/${data.id}`)
                  }
                  className="flex-none text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  AniList
                  <span className="text-gray-100 inline-flex items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </button>

                {data.idMal && (
                  <button
                    onClick={() =>
                      window.open(`https://myanimelist.net/anime/${data.idMal}`)
                    }
                    className="flex-none text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    MyAnimeList
                    <span className="text-gray-100 inline-flex items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </MediaSummary>
          </div>
        </div>
      )}
    </div>
  );
}

export default MediaDetail;
