import React from 'react';
import { Link } from 'react-router-dom';

interface MediaCoverProps {
  id: string;
  title: any;
  coverImage: any;
}

function MediaCover({ id, title, coverImage }: MediaCoverProps) {
  const preferredTitle = title.english || title.romaji;
  return (
    <>
      <Link to={`/media/${id}`}>
        <div className="block md:hidden">
          {coverImage.medium && (
            <img alt={`${preferredTitle} cover`} src={coverImage.medium} />
          )}
        </div>
        <div className="hidden md:block">
          {coverImage.large && (
            <img alt={`${preferredTitle} cover`} src={coverImage.large} />
          )}
        </div>
      </Link>
    </>
  );
}

export default MediaCover;
