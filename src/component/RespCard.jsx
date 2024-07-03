import React, { useState } from "react";
import back from "../images/bg-card-back.png";
import front from "../images/bg-card-front.png";
import correct from "../images/icon-complete.svg";

export default function RespCard() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="mainContainer">
      <div>
        <div className="frontCard">
          <img src={front} alt="Credit Card Front" />
          <h2>{cardNumber || "0000 0000 0000 0000"}</h2>
          <div className="jane">
            <p>{cardName || "Jane Appleseed"}</p>
            <p>{expiryDate ? expiryDate.slice(5, 7) + "/" + expiryDate.slice(2, 4) : "00/00"}</p>
          </div>
        </div>
        <div className="backCard">
          <img src={back} alt="Credit Card Back" />
        </div>
      </div>

      <div className="cardDetails">
        {!confirmed ? (
          <form onSubmit={handleSubmit}>
            <div className="holder">
              <label htmlFor="cardHolder">CARDHOLDER NAME</label>
              <br />
              <input
                type="text"
                id="cardName"
                value={cardName}
                placeholder="e.g. Jane Appleseed"
                required
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div className="number">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <br />
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                maxLength="16"
                placeholder="e.g. 1234 5678 9123 0000"
                required
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div className="cardBottom">
              <div>
                <label htmlFor="expiryDate">EXP. DATE (MM/YY)</label>
                <br />
                <input
                  type="month"
                  id="expiryDate"
                  value={expiryDate}
                  required
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cvv">CVV</label>
                <br />
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  maxLength={3}
                  placeholder="e.g. 123"
                  required
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>

            <button >Confirm</button>
          </form>
        ) : (
          <ThankYou setConfirmed={setConfirmed} />
        )}
      </div>
    </div>
  );
}

function ThankYou({ setConfirmed }) {
  return (
    <div className="thankYouContainer">
      <div> <img src={correct} alt="" /> </div>
      <h1>Thank you!</h1>
      <p>We've added your card details</p>
      <button onClick={() => setConfirmed(false)}>Continue</button>
    </div>
  );
}
