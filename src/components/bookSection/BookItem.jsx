import React from "react";
import BookThumbnail from "./BookThumbnail";
import Stars from "./Stars";
import AddToCartButton from "./button/AddToCartButton";
import FavouriteButton from "./button/FavouriteButton";

const BookItem = ({ book, handleFavourite }) => {
  return (
    <div className="space-y-3">
      <BookThumbnail thumbnail={book.thumbnail} />

      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{book.author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>

          <Stars stars={book.star} />
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <AddToCartButton />
          <FavouriteButton isFavourite={book.isFavourite} bookID={book.id} onFavourite={handleFavourite} />
        </div>
      </div>
    </div>
  );
};

export default BookItem;
