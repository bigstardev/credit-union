import React, { useEffect, useState } from "react";
import "./app.css";
import { loansData } from "../../constant";
import Loan from "../../component/loan";

const organizeLoanData = (data) => {
  const newLoans = {};
  for (let loan of data) {
    if (newLoans[loan.name])
      newLoans[loan.name] = [...newLoans[loan.name], loan];
    else newLoans[loan.name] = [loan];
  }
  return Object.entries(newLoans);
};

export default function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    setLoans(organizeLoanData(loansData));
  }, []);

  return (
    <div className="loans-organized">
      {loans.map((loan, index) => (
        <Loan key={index} data={loan} />
      ))}
    </div>
  );
}
