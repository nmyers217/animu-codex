import React, { FunctionComponent } from 'react';

interface BadgeProps {
  color: string;
}

interface MediaBadgesProps {
  type: 'ANIME' | 'MANGA';
  format: string;
  season?: string;
  seasonYear?: number;
  episodes?: number;
  volumes?: number;
  chapters?: number;
}

const Badge: FunctionComponent<BadgeProps> = ({ color, children }) => {
  return (
    <div
      className={`rounded-xl text-white ${color} px-2 py-1 text-xs font-bold capitalize`}
    >
      {children}
    </div>
  );
};

function MediaBadges({
  type,
  format,
  season,
  seasonYear,
  episodes,
  volumes,
  chapters,
}: MediaBadgesProps) {
  const color = type === 'ANIME' ? 'bg-indigo-500' : 'bg-yellow-500';

  const badges = [
    { show: true, content: type.toLowerCase(), color },
    {
      show: format && format !== type,
      content: format?.toLowerCase(),
      color: 'bg-purple-500',
    },
    {
      show: !!season,
      content: `${season?.toLowerCase()} ${seasonYear}`.trim(),
      color: 'bg-blue-500',
    },
    {
      show: !!episodes,
      content: `${episodes} episodes`,
      color: 'bg-yellow-500',
    },
    { show: !!volumes, content: `${volumes} volumes`, color: 'bg-green-500' },
    {
      show: !!chapters,
      content: `${chapters} chapters`,
      color: 'bg-pink-500',
    },
  ].filter((e) => e.show);

  return (
    <div className="flex flex-row items-center space-x-2">
      {badges.map(({ content, color }, i) => (
        <Badge key={i} color={color}>
          <span>{content}</span>
        </Badge>
      ))}
    </div>
  );
}

export default MediaBadges;
