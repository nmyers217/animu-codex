import React from 'react';

interface MediaDescriptionProps {
  description: string;
  truncateLength?: number;
}

function trunc(str: string, len: number) {
  const first = str.split('<br>').shift();

  const words = (first || '').split(' ');
  let content = '';
  while (content.length < len && words.length > 0) {
    content += ' ' + words.shift();
  }

  const terminator = words.length > 0 ? '...' : '';
  return (content + terminator).trim();
}

function MediaDescription({
  description,
  truncateLength,
}: MediaDescriptionProps) {
  const html = truncateLength!!
    ? trunc(description, truncateLength)
    : description;

  return (
    // NOTE: the descriptions from AniList have html in them.
    // Instead of parsing, let's just trust they already stopped the XSS attacks for us :)
    <div
      style={{ textIndent: '1.5rem' }}
      className="tracking-normal leading-relaxed text-justify dark:text-gray-400"
      dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }}
    ></div>
  );
}

export default MediaDescription;
