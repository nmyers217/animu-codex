import React from 'react';
import { Link } from 'react-router-dom';

interface MediaTitleProps {
  id: string;
  english?: string;
  romaji?: string;
  native?: string;
}

function MediaTitle({ id, english, romaji, native }: MediaTitleProps) {
  const preferred = english || romaji || '<No Translation>';
  const hasNative = !!native;

  return (
    <>
      <h2 className="text-2xl font-medium text-gray-900 title-font">
        <Link
          to={`/media/${id}`}
          className="hover:underline hover:text-purple-600"
        >
          {preferred}
          <br />
          {hasNative && <span>{native}</span>}
        </Link>
      </h2>
    </>
  );
}

export default MediaTitle;
