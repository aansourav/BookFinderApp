import React from 'react';

const BookThumbnail = ({ thumbnail }) => {
  return (
    <div className="flex w-[300px] h-[300px] items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
      <img className="max-w-[144px] " src={thumbnail} alt="book name" />
    </div>
  );
};

export default BookThumbnail;