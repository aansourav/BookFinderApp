import { useState } from "react";
import bookData from "./assets/bookData.json";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BookGrid from "./components/bookSection/BookGrid";
import Header from "./components/headerSection/Header";

function App() {
  const [books, setBooks] = useState(bookData);

  const handleFavourite = (bookID) => {
    const favouriteBookIndex = books.findIndex((book) => book.id === bookID);
    const newBooks = [...books];
    newBooks[favouriteBookIndex].isFavourite = !newBooks[favouriteBookIndex].isFavourite;
    setBooks(newBooks);
  };

  const handleSearch = (searchText) => {
    const searchedBooks = books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
    setBooks([...searchedBooks]);
  };

  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />
      <div className="my-10 lg:my-14">
        <Header handleSearch={handleSearch} />
        <BookGrid books={books} handleFavourite={handleFavourite} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
