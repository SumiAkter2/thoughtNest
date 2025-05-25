import BookMark from "./BookMark";

const BookMarks = ({ bookmark }) => {
  return (
    <div className="md:w-1/3 bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-[#8b3b00]">
        Bookmarked Blogs: {bookmark.length}
      </h1>
      {bookmark.map((bookmarkItem) => (
        <BookMark key={bookmarkItem.id} bookmarkItem={bookmarkItem}></BookMark>
      ))}
    </div>
  );
};

export default BookMarks;
