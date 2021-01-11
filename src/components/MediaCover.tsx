import React from 'react';
import { Link } from 'react-router-dom';

interface MediaCoverProps {
  id: string;
  title: any;
  coverImage: any;
  dontShrink?: boolean;
}

function MediaCover({
  id,
  title,
  coverImage,
  dontShrink = false,
}: MediaCoverProps) {
  const preferredTitle = title.english || title.romaji;
  return (
    <>
      <Link to={`/media/${id}`}>
        <div className={`${dontShrink ? 'hidden' : 'block md:hidden'}`}>
          {coverImage.medium && (
            <img alt={`${preferredTitle} cover`} src={coverImage.medium} />
          )}
        </div>
        <div className={`${dontShrink ? 'block' : 'hidden md:block'}`}>
          {coverImage.large && (
            <img alt={`${preferredTitle} cover`} src={coverImage.large} />
          )}
        </div>
      </Link>
    </>
  );
}

export default MediaCover;
