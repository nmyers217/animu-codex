import React, { FunctionComponent } from 'react';

import MediaTitle from './MediaTitle';
import MediaCover from './MediaCover';
import MediaBadges from './MediaBadges';
import MediaDescription from './MediaDescription';
import MediaStatus from './MediaStatus';
import MediaDates from './MediaDates';

interface MediaSummaryProps {
  media: any;
  truncate?: boolean;
  card?: boolean;
}

const MediaSummary: FunctionComponent<MediaSummaryProps> = ({
  media,
  truncate = true,
  card = true,
  children,
}) => {
  return (
    <div
      className={`container bg-white max-w-5xl mx-auto ${
        card && 'rounded-xl shadow-lg border-transparent'
      } flex sm:space-x-4 sm:justify-between dark:bg-gray-800 dark:bg-opacity-40`}
    >
      <div className="ml-4 hidden sm:flex flex-none justify-center items-center">
        <MediaCover
          id={media.id}
          title={media.title}
          coverImage={media.coverImage}
        />
      </div>

      <div className="flex flex-col flex-grow space-y-4 sm:border-l-4 sm:border-opacity-75 sm:border-purple-600 sm:dark:border-indigo-600">
        <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 sm:divide-y-0">
          <div className="flex flex-row items-center space-x-4 divide-x-1 divide-gray-200 dark:divide-gray-700">
            <div className="sm:hidden">
              <MediaCover
                id={media.id}
                title={media.title}
                coverImage={media.coverImage}
              />
            </div>
            <div>
              <MediaTitle id={media.id} {...media.title} />
            </div>
          </div>

          <div className="p-2 sm:p-4 flex flex-none flex-row-reverse justify-between items-center sm:flex-col sm:justify-around sm:items-stretch">
            <div className="flex flex-row justify-end items-center">
              <MediaStatus status={media.status} />
            </div>

            <div>
              <MediaDates startDate={media.startDate} endDate={media.endDate} />
            </div>
          </div>
        </div>

        <div className="px-2">
          <MediaBadges
            type={media.type}
            format={media.format}
            season={media.season}
            seasonYear={media.seasonYear}
            episodes={media.episodes}
            volumes={media.volumes}
            chapters={media.chapters}
          />
        </div>

        <div className="px-2 pb-4">
          {media.description && (
            <MediaDescription
              description={media.description}
              truncateLength={truncate ? 225 : undefined}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MediaSummary;
