import PropTypes from "prop-types";
import bookMarkIcon from "../assets/images/bookMark.png";


const Blog = ({ blog, handleBookMark }) => {
  const { title } = blog;

  return (
    <div className="border-[.25rem] border-red-400 my-2 rounded-2xl p-4 flex flex-col gap-4 ">
      {/* cover */}
      <img
        src={blog.cover}
        className="max-w-[1024px] max-h-[300px] object-cover object-center"
      />
      {/* profile pic and other data */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={blog.author_img} className="h-[60px] rounded-full" />
          {/* author name and date posted */}
          <div>
            <h3 className="text-2xl font-bold">{blog.author}</h3>
            <p className="font-semibold text-[#11111199]">{blog.posted_date}</p>
          </div>
        </div>
        {/* read time and bookmark button */}
        <div className="flex gap-2">
          <span className="text-xl font-medium text-[#11111199]">
            {blog.reading_time} min read
          </span>
          <button onClick={handleBookMark}>
            <img src={bookMarkIcon} />
          </button>
        </div>
      </div>
      {/* title */}
      <h2 className="text-4xl font-bold">{title}</h2>
      {/* hashtags */}
      <ul className="flex gap-4 text-[#11111199]">
        {blog.hashtags.map((tag) => (
          <li className="text-xl font-medium" key={blog.id}>
            #{tag}
          </li>
        ))}
      </ul>
      {/* mark as read */}
      <button className="flex justify-center max-w-[130px] underline text-[#6047EC] text-xl font-semibold">
        Mark as read
      </button>
    </div>
  );
};


Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;
