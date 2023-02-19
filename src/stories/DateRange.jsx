import { useState } from "react";

function DateRange() {
  const [date, setDate] = useState();

  return (
    <div>
      <h1>Date Range</h1>
      <div>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
    </div>
  )
}

export default DateRange;