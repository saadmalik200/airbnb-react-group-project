import React from "react";

import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";

function FormCalender() {
  const { pickedDates } = useDatePickGetter();

  const resetFunc = useDatePickReset();
  const startDate = pickedDates.firstPickedDate?.toString();
  const endDate = pickedDates.secondPickedDate?.toString();
  console.log(startDate, endDate);

  return (
    <div>
      <DatePicker disablePreviousDays />
      <button type="button" onClick={resetFunc}>
        Reset
      </button>
    </div>
  );
}

export default FormCalender;
