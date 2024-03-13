import PropTypes from 'prop-types';

const TotalRead = ({time}) => {
    return (
      <div className="border-2 bg-[#6047EC1a] border-[#6047EC] py-5 px-10 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-[#6047EC]">
          Spent time on read :{" "}
          <span className="flex flex-row flex-nowrap">{time} min</span>
        </h2>
      </div>
    );
};

TotalRead.propTypes = {
    time : PropTypes.number,
};

export default TotalRead;