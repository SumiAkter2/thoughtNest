import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleMarkRead, bookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          bookmark={bookmark}
          key={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleMarkRead={handleMarkRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
