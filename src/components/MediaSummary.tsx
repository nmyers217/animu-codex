import React from 'react';
import { Link } from 'react-router-dom';

import MediaTitle from './MediaTitle';

interface MediaSummaryProps {
  media: any;
}

function MediaSummary({ media }: MediaSummaryProps) {
  return (
    <div className="container mx-auto px-4 py-6 flex space-x-4 justify-between">
      {/* TODO: break these into MediaBanner ? */}
      <div className="flex flex-none justify-center items-center">
        <div className="block md:hidden">
          {media.coverImage.medium && (
            <img
              alt={`${media.title.english || media.title.romanji} cover`}
              src={media.coverImage.medium}
            />
          )}
        </div>
        <div className="hidden md:block">
          {media.coverImage.large && (
            <img
              alt={`${media.title.english || media.title.romanji} cover`}
              src={media.coverImage.large}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow border-l-2 border-blue-500 px-2">
        {/* TODO: proper link styling */}
        <div className="mb-4">
          <Link to={`/media/${media.id}`}>
            <MediaTitle {...media.title} />
          </Link>
        </div>

        {/* TODO: fill in seasons, episodies, or volumes, chapters */}
        {/* TODO: badges */}
        <p>
          {media.type && <span>{media.type}</span>}
          {media.status && <span> | {media.status}</span>}
        </p>

        {/* TODO: Break this out into a MediaDescription component */}
        {/* NOTE: the description can have <br> in it */}
        {/* TODO: proper truncation */}
        {media.description &&
          media.description
            .split('<br>')
            .map((line: string, i: number) => (
              <p key={i} className="leading-relaxed">
                {line}
              </p>
            ))
            .shift()}
      </div>
    </div>
  );
}

export default MediaSummary;
