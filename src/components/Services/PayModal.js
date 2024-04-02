import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./PayModal.css";
import HoverRating from "./HoverRating";

function PayModal(props) {
  const [showEval, setShowEval] = useState(false);
  const [amount, setAmount] = useState('50,000');
  const handlePayButtonClick = (event) => {
    event.preventDefault();
    setAmount('0,000');
    setTimeout(() => {
      setShowEval(true); // This will be executed after the delay
    }, 1000);
    
  };

//   const handleCloseEval = () => {
//     setShowEval(false);
//   };
  return ReactDOM.createPortal(
    <>
      <div className="pay-modal" onClick={props.onClose}></div>
      <div className="pay-content">
        {!showEval && (
          <>
            <div className="pay-types">
              <fieldset className="pay-fieldset">
                <legend>Select a payment way:</legend>

                <div>
                  <input
                    type="radio"
                    id="D17"
                    name="payWay"
                    value="D17"
                  />
                  <label for="D17">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    ></img>{" "}
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="Visa"
                    name="payWay"
                    value="Visa"
                  />
                  <label for="Visa">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      alt=""
                    ></img>{" "}
                  </label>
                </div>
              </fieldset>
            </div>
            <label className="total">Amount: {amount} dt</label>
            <div className="buttons">
              <button onClick={props.onClose} className="close-pay-button">
                Close
              </button>
              <button
                onClick={handlePayButtonClick}
                className="order-pay-button"
              >
                Pay
              </button>
            </div>
          </>
        )}
        {showEval && (
          <>
          <div className="rating-container">
            <h2>How was your experience ?</h2>
            <HoverRating onSubmit={props.onClose} ></HoverRating>
         </div> </>
        )}
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default PayModal;
