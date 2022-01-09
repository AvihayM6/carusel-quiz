import { ButtonNext } from "pure-react-carousel";
import { useState } from "react";
import "../style/SecondQ.css";

const SecondQ = ({ incressRightAnswers }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  let inputTxt = "";
  const ans = "אגדה";

  const handleClick = () => {
    setIsAnswered(true);

    if (!inputTxt.localeCompare(ans)) {
      incressRightAnswers();
      alert("ענית על התשובה נכון, לחץ המשך על מנת להתקדם");
    } else {
      alert("ענית על התשובה לא נכון, לחץ המשך על מנת להתקדם");
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "wheat",
      }}
    >
      <h1>שאלה 2:</h1>
      <div>
        אם תרצו אין זו
        <input
          type="text"
          className="input"
          placeholder="השלם את המשפט"
          onChange={(e) => (inputTxt = e.target.value.trim())}
          disabled={isAnswered}
        />
      </div>
      <div>
        <button
          className="button selfBtn2"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          disabled={isAnswered}
        >
          בדוק
        </button>
        <ButtonNext className="button selfButtonNext" disabled={!isAnswered}>
          המשך
        </ButtonNext>
      </div>
    </div>
  );
};

export default SecondQ;
