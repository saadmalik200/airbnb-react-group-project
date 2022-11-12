import "./header-styles/Calander.css";
import {
  DatePicker,
  useDatePickReset,
  useDatePickGetter,
} from "@bcad1591/react-date-picker";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const Calander = () => {
  const { pickedDates } = useDatePickGetter();
  const { dispatch } = useContext(Context);

  const firstDate = pickedDates.firstPickedDate?.toString().slice(4, 10);
  const secondDate = pickedDates.secondPickedDate?.toString().slice(4, 10);

  useEffect(() => {
    dispatch({ type: "date", first: firstDate, second: secondDate });
  }, [firstDate, secondDate]);

  return (
    <div className="calander-container">
      <DatePicker disablePreviousDays />
    </div>
  );
};
export default Calander;
