import { useState } from "react";
import Blogs from "./Components/Blogs";
import BookMarks from "./Components/BookMarks";
import Header from "./Components/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);

  //   handle for bookmark
  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
    console.log("added :", newBookmark);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="md:flex justify-between mx-4 mt-6">
        <Blogs handleBookmark={handleBookmark} />
        <BookMarks bookmark={bookmark} />
      </div>
    </div>
  );
}

export default App;
