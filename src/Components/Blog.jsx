import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkRead, bookmark }) => {
  const isBookmarked = bookmark.some((b) => b.id === blog.id);
  return (
    <div className="mx-6 mb-12">
      <img className="w-full" src={blog.cover} alt="blog-img" />
      <div className="my-4 flex justify-between items-start  ">
        <div className=" flex justify-start items-center gap-4">
          <img className="w-16" src={blog.author_img} alt="author-img" />
          <div>
            <h4 className="text-xl font-bold">{blog.author}</h4>
            <p className="text-gray-500">{blog.posted_date}</p>
          </div>
        </div>
        <div className="text-gray-500 flex justify-center items-center gap-x-2">
          <p>{blog.reading_time} min read</p>
          <button
            className="cursor-pointer"
            onClick={() => handleBookmark(blog)}
          >
            {isBookmarked ? (
              <FaBookmark className="text-red-500" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
        </div>
      </div>
      <h1 className="my-6 text-4xl font-bold leading-normal">{blog.title}</h1>
      <div className="flex gap-x-2 mb-6 text-gray-500">
        {blog.hashtags.map((hashtag, idx) => (
          <a href={`#${hashtag}`} key={idx}>
            {" "}
            #{hashtag}
          </a>
        ))}
      </div>
      <button
        className="underline text-blue-800 cursor-pointer"
        onClick={() => handleMarkRead(blog.id, blog?.reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
