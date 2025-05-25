import { useState } from "react";
import Blogs from "./Components/Blogs";
import BookMarks from "./Components/BookMarks";
import Header from "./Components/Header";
import SpentTime from "./Components/SpentTime";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  //   handle for bookmark
  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
    // console.log("added :", newBookmark);
  };
  // handle for mark as read:
  const handleMarkRead = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    console.log(newTime);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="md:flex justify-between mx-4 mt-6">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkRead={handleMarkRead}
        />
        <div className="md:w-1/3">
          <SpentTime readingTime={readingTime} />
          <BookMarks bookmark={bookmark} />
        </div>
      </div>
    </div>
  );
}

export default App;
