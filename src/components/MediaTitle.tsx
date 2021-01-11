import React from 'react';
import { Link } from 'react-router-dom';

interface MediaTitleProps {
  english?: string;
  romanji?: string;
  native?: string;
}

function MediaTitle({ english, romanji, native }: MediaTitleProps) {
  const preferred = english || romanji;
  const hasNative = !!native;

  return (
    <>
      <h2 className="text-2xl font-medium text-gray-900 title-font">
        {preferred}
      </h2>
      {hasNative && (
        <h2 className="text-xl font-medium text-gray-700 title-font">
          {native}
        </h2>
      )}
    </>
  );
}

export default MediaTitle;
