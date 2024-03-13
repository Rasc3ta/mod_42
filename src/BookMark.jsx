import PropTypes from 'prop-types';

const BookMark = ({ bookMark }) => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <h3 className='text-lg font-semibold'>{bookMark.title}</h3>
    </div>
  );
}

BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired
};

export default BookMark;