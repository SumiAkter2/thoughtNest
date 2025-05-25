const BookMarks = ({ bookmark }) => {
  return (
    <div className="md:w-1/3">
      <h1>Book Mark added: {bookmark.length}</h1>
    </div>
  );
};

export default BookMarks;
