const Blog = ({ blog }) => {
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
        <p className="text-gray-500">{blog.reading_time} min read</p>
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
      <a href="#" className="underline text-blue-800 ">
        Mark as read
      </a>
    </div>
  );
};

export default Blog;
