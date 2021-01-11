import React from 'react';

interface Date {
  month?: number;
  day?: number;
  year?: number;
}

interface MediaDateProps {
  startDate: Date;
  endDate: Date;
}

const formatDate = function (date: Date) {
  return new Date(
    `${date.year}-${date.month}-${date.day}`
  ).toLocaleDateString();
};

function MediaDates({ startDate, endDate }: MediaDateProps) {
  return (
    <div className="font-sans font-normal text-gray-400 tracking-tight text-right">
      {startDate.day ? (
        <>
          <span>{formatDate(startDate)}</span>
          {' - '}
          <span>{endDate.day ? formatDate(endDate) : 'Present'}</span>
        </>
      ) : (
        <span className="mr-8">TBD</span>
      )}
    </div>
  );
}

export default MediaDates;
