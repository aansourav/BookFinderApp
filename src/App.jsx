import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BookGrid from "./components/bookSection/BookGrid";
import Header from "./components/headerSection/Header";

function App() {
  return (
    <div class="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />

      <div class="my-10 lg:my-14">
        <Header />
        <BookGrid />
      </div>

      <Footer />
    </div>
  );
}

export default App;
