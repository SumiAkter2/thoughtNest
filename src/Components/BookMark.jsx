const BookMark = ({ bookmarkItem }) => {
  return (
    <div className="mt-4 bg-[#8b3b003b] p-2 rounded-md">
      <h1 className="my-4 text-lg font-bold">{bookmarkItem.title}</h1>
    </div>
  );
};

export default BookMark;
