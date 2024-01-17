import React from "react";
import BookThumbnail from "./BookThumbnail";
import Stars from "./stars";
import AddToCartButton from "./button/AddToCartButton";
import FavouriteButton from "./button/FavouriteButton";

const BookGrid = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="space-y-3">
        <BookThumbnail />

        <div className="space-y-3">
          <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
          <p className="text-xs lg:text-sm">
            By : <span>Jon Duckett</span>
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold lg:text-xl">$62</h4>

            <Stars />
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-sm">
            <AddToCartButton />
            <FavouriteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookGrid;
