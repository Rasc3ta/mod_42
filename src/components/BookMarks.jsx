import PropTypes from "prop-types";
import BookMark from "../BookMark";

const BookMarks = ({ bookMark }) => {
  return (
    <div className="bg-[#1111110d] p-5 rounded-lg">
      <h2 className="font-bold text-2xl mb-4">Bookmarked Blogs : {bookMark.length}</h2>
      <div className="flex flex-col gap-4">
        {bookMark.map((bookmark) => (
          <BookMark key={bookmark.id} bookMark={bookmark}></BookMark>
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMark: PropTypes.array.isRequired,
};

export default BookMarks;
