import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const [customDate, setCustomDate] = useState({
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  });

  console.log(moment().format('YYYY-DD-MM'))

  useEffect(() => {
    const { startDate, endDate } = customDate;
    if(startDate && endDate) {
      console.log(startDate, endDate)
    }
  }, [customDate.startDate, customDate.endDate])

  return (
    <div className="App">
      <h3>Exprimental Date Range</h3>
      <div>
        <input 
          value={customDate.startDate}
          name='startDate' type="date" 
          onChange={(e) => {
            setCustomDate({
              ...customDate,
              startDate: e.target.value
            })
          }} 
        />
        <input 
          value={customDate.endDate}
          name='endDate' type="date" 
          onChange={(e) => {
            setCustomDate({
              ...customDate,
              endDate: e.target.value
            })
          }} 
        />
      </div>
    </div>
  );
}

export default App;
