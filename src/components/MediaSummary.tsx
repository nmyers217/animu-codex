import React from 'react';
import { Link } from 'react-router-dom';

interface MediaSummaryProps {
  media: any;
}

function MediaSummary({ media }: MediaSummaryProps) {
  return (
    <>
      {media.title.english && (
        <Link to={`/media/${media.id}`}>
          <h3>{media.title.english}</h3>
        </Link>
      )}
      {media.title.romanji && (
        <Link to={`/media/${media.id}`}>
          <h3>{media.title.romanji}</h3>
        </Link>
      )}

      {media.coverImage.medium && (
        <img
          alt={`${media.title.english || media.title.romanji} cover`}
          src={media.coverImage.medium}
        />
      )}

      <p>
        {media.type && <span>{media.type}</span>}
        {media.status && <span> | {media.status}</span>}
      </p>

      {/* NOTE: the description can have <br> in it */}
      {/* TODO: proper truncation */}
      {media.description &&
        media.description
          .split('<br>')
          .map((line: string, i: number) => <p key={i}>{line}</p>)
          .shift()}
    </>
  );
}

export default MediaSummary;
