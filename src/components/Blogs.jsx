import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookMark, handleSpentTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleSpentTime={handleSpentTime}
          handleBookMark={handleBookMark}
        ></Blog>
      ))}
    </div>
  );
};


Blogs.propTypes = {
  handleBookMark: PropTypes.func,
  handleSpentTime: PropTypes.func,
};


export default Blogs;