import React from 'react';
import bookThumbnail from '../../assets/book.png'

const BookThumbnail = () => {
    return (
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={bookThumbnail} alt="book name" />
      </div>
    );
};

export default BookThumbnail;