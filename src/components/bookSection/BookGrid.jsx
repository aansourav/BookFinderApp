import BookItem from "./BookItem";

const BookGrid = ({ books, handleFavourite }) => {
  const initialBook = {
    id: crypto.randomUUID(),
    title: "JavaScript and Jquery",
    author: "Jon Duckett",
    price: 62,
    star: 4,
    yearOfPublish: 2019,
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg",
    isFavourite: false,
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} handleFavourite={handleFavourite} />
      ))}
    </div>
  );
};

export default BookGrid;
