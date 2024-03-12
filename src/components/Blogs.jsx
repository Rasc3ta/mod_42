import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2>Blogs Length : {blogs.length}</h2>

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>
      ))}
    </div>
  );
};

export default Blogs;