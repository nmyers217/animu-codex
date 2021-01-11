import React from 'react';

interface MediaStatusProps {
  status:
    | 'FINISHED'
    | 'RELEASING'
    | 'NOT_YET_RELEASED'
    | 'CANCELLED'
    | 'HIATUS';
}

function MediaStatus({ status }: MediaStatusProps) {
  const color = (() => {
    switch (status) {
      case 'FINISHED':
        return 'border-red-400';
      case 'RELEASING':
        return 'border-green-400';
      case 'NOT_YET_RELEASED':
        return 'border-yellow-400';
      default:
        return 'border-gray-400;';
    }
  })();

  return (
    <div
      className={`rounded-full bg-white border-4 ${color} p-1 text-xs dark:text-white dark:bg-gray-800 dark:bg-opacity-40`}
    >
      <span className="font-medium capitalize">
        {status.toLowerCase().replace(/_/g, ' ')}
      </span>
    </div>
  );
}

export default MediaStatus;
