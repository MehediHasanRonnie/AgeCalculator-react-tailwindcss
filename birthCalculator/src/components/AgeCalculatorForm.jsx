import { useState } from "react";
import PropTypes from "prop-types";

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };
  return (
    <form onSubmit={handleSubmit} className=" flex mt-3 p-3">
      <input
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        value={birthDate}
        type="date"
        onChange={handleChangeDate}
      />
      <button
        className=" disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        disabled={!birthDate}
        type="submit"
      >
        Calculate Age
      </button>
    </form>
  );
};
AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};
export default AgeCalculatorForm;
