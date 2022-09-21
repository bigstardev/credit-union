import "./loan.css";

export default function Loan({ data }) {
  const [name, details] = data;
  return (
    <div className="loan">
      <h1>{name}</h1>
      <ul className="detail-list">
        {details.map((userData) => (
          <li key={userData.Borrower} className="detail">
            {userData.Borrower} - {userData.Amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
