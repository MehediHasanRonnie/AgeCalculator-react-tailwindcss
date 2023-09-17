import PropTypes from "prop-types";
const AgeResult = ({ age }) => {
  return (
    <div className="py-2.5 px-5 mr-2 mb-2 bg-white rounded-lg border border-gray-200">
      <h4 className="text-sm font-medium p-1 px-2 py-2 text-blue-700">
        {`You are ${age.years} Years, ${age.months} Months, ${age.days} Days old.`}
      </h4>
    </div>
  );
};
AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};
export default AgeResult;
