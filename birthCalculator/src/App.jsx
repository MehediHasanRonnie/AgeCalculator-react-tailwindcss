import { useState } from "react";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function App() {
  const [age, setAge] = useState(null);
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj);
    const ageDays = differenceInDays(today, birthDateObj);
    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="text-3xl font-bold flex justify-center text-gray-700">
          Age Calculator
        </h1>
        <h4 className="text-sm mt-2 flex justify-center  text-gray-700">
          Age in Years, Months and Days
        </h4>
        <div className="block max-w-sm">
          <AgeCalculatorForm calculateAge={calculateAge} />
          {age && <AgeResult age={age} />}
        </div>
      </div>
    </div>
  );
}

export default App;
