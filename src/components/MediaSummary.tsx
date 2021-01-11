import React from 'react';

import MediaTitle from './MediaTitle';
import MediaCover from './MediaCover';
import MediaBadges from './MediaBadges';
import MediaDescription from './MediaDescription';
import MediaStatus from './MediaStatus';

interface MediaSummaryProps {
  media: any;
}

const formatDate = function (date: {
  year: number;
  month: number;
  day: number;
}) {
  return new Date(
    `${date.year}-${date.month}-${date.day}`
  ).toLocaleDateString();
};

function MediaSummary({ media }: MediaSummaryProps) {
  return (
    <div className="container bg-white max-w-5xl mx-auto px-4 py-6 flex space-x-4 justify-between">
      <div className="flex flex-none justify-center items-center">
        <MediaCover
          id={media.id}
          title={media.title}
          coverImage={media.coverImage}
        />
      </div>

      <div className="flex flex-col flex-grow space-y-4 border-l-4 border-opacity-75 border-purple-600">
        <div className="px-2 pb-2 flex flex-row justify-between border-b border-gray-200">
          <div>
            <MediaTitle id={media.id} {...media.title} />
          </div>

          <div className="flex flex-col justify-around">
            <div className="flex flex-row justify-end">
              <MediaStatus status={media.status} />
            </div>

            <div className="font-sans font-normal text-gray-400 tracking-tight text-right">
              {formatDate(media.startDate)} - {formatDate(media.endDate)}
            </div>
          </div>
        </div>

        {/* TODO: fill in seasons, episodies, or volumes, chapters */}
        {/* TODO: badges */}
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

        <div className="px-2">
          <MediaDescription
            description={media.description}
            truncateLength={225}
          />
        </div>
      </div>
    </div>
  );
}

export default MediaSummary;
