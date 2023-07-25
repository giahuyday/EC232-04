import React, { useState } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

const Datepick = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Datepicker
        id="datepickerId"
        value={date}
        onChange={(newDate) => setDate(newDate)}
      />
    </div>
  );
};

export default Datepick;