import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';

import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { getAllMedia } from '../api';
import { SearchFormState } from './SearchForm';
import MediaSummary from './MediaSummary';
import LoadingSpinner from './LoadingSpinner';

interface MediaListProps {
  filterState: SearchFormState;
}

function MediaList({ filterState }: MediaListProps) {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['medialist', filterState],
    async ({ pageParam = 1 }) => {
      try {
        return await getAllMedia(pageParam, filterState);
      } catch (e) {
        alert(e);
        throw e;
      }
    },
    {
      // We will consider the data fresh for 5 minutes to save our rate limit
      staleTime: 5 * 60 * 1000,
      getNextPageParam: (lastPage) =>
        lastPage.pageInfo.hasNextPage
          ? lastPage.pageInfo.currentPage + 1
          : false,
    }
  );
  const loadMoreRef = useRef<any>();

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <div className="subpixel-antialiased md:antialiased">
      {status === 'loading' ? (
        <div className="container mx-auto max-w-5xl flex items-center justify-center pt-10 pb-16 sm:pt-24 sm:pb-36 lg:pt-40 lg:pb-56 text-center">
          <LoadingSpinner />
        </div>
      ) : status === 'error' ? (
        <span className="text-red-600">Error: {(error as Error).message}</span>
      ) : (
        <>
          {data && data.pages.length > 0 && data.pages[0].media.length > 0 && (
            <>
              <div className="divide-y-2 divide-gray-100 dark:divide-gray-700">
                {data.pages
                  .flatMap((page) => page.media)
                  .map((media: any, i: number) => (
                    <MediaSummary key={media.id} media={media} />
                  ))}
              </div>

              <div className="pt-10 pb-16 text-center">
                <button
                  ref={loadMoreRef}
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                  className="inline-flex justify-center items-center w-52 px-4 py-2 border border-transparent text-base leading-6 fond-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 active:bg-indigo-700"
                >
                  {isFetchingNextPage ? (
                    <LoadingSpinner />
                  ) : hasNextPage ? (
                    'Load Newer'
                  ) : (
                    'Nothing more to load'
                  )}
                </button>
              </div>
            </>
          )}

          {(!data ||
            data.pages.length === 0 ||
            data.pages[0].media.length === 0) && (
            <div className="pt-10 pb-16 sm:pt-24 sm:pb-36 lg:pt-40 lg:pb-56 text-center">
              <svg
                width="96"
                height="96"
                fill="none"
                className="mx-auto mb-6 text-gray-900"
              >
                <path
                  d="M36 28.024A18.05 18.05 0 0025.022 39M59.999 28.024A18.05 18.05 0 0170.975 39"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <ellipse
                  cx="37.5"
                  cy="43.5"
                  rx="4.5"
                  ry="7.5"
                  fill="currentColor"
                ></ellipse>
                <ellipse
                  cx="58.5"
                  cy="43.5"
                  rx="4.5"
                  ry="7.5"
                  fill="currentColor"
                ></ellipse>
                <path
                  d="M24.673 75.42a9.003 9.003 0 008.879 5.563m-8.88-5.562A8.973 8.973 0 0124 72c0-7.97 9-18 9-18s9 10.03 9 18a9 9 0 01-8.448 8.983m-8.88-5.562C16.919 68.817 12 58.983 12 48c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36a35.877 35.877 0 01-14.448-3.017"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M41.997 71.75A14.94 14.94 0 0148 70.5c2.399 0 4.658.56 6.661 1.556a3 3 0 003.999-4.066 12 12 0 00-10.662-6.49 11.955 11.955 0 00-7.974 3.032c1.11 2.37 1.917 4.876 1.972 7.217z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="text-lg leading-5 font-medium text-gray-900 mb-3">
                Sorry! There are no results for “{filterState.search}”.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MediaList;
