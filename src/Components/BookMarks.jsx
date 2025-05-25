import BookMark from "./BookMark";

const BookMarks = ({ bookmark }) => {
  return (
    <div className=" bg-gray-100 p-4">
      <h1 className="text-2xl font-bold ">
        Bookmarked Blogs: {bookmark.length}
      </h1>
      {bookmark.map((bookmarkItem) => (
        <BookMark key={bookmarkItem.id} bookmarkItem={bookmarkItem}></BookMark>
      ))}
    </div>
  );
};

export default BookMarks;
