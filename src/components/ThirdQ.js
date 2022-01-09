import { useState, useEffect } from "react";
import and from "../pics/android.png";
import apl from "../pics/apple.png";
import pwr from "../pics/power.png";
import "../style/ThirdQ.css";
import Photo from "./Photo";
import { ButtonNext } from "pure-react-carousel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropArea } from "./DropArea.js";

const images = [
  {
    id: 1,
    name: "Apple",
    img: apl,
  },
  {
    id: 2,
    name: "Android",
    img: and,
  },
  {
    id: 3,
    name: "PowerPoint",
    img: pwr,
  },
];

const ThirdQ = ({ incressRightAnswers, setResult }) => {
  const [isAnswered, setisAnswered] = useState(false);
  const [imgState, setImgState] = useState(images);
  const [answerState, setAnswerState] = useState({});

  const handleDrop = (item, index) => {
    setImgState((images) => images.filter((image) => image.id !== item.id));
    setAnswerState((answerState) => ({ ...answerState, [index]: item }));
  };


  useEffect(() => {
    const answers = Object.values(answerState)
    if(answers.length === 3) {
      setisAnswered(true);
      if(JSON.stringify(answers.map(answer => answer.id)) === JSON.stringify([2,1,3])) {
        incressRightAnswers();
        alert('תשובה נכונה! לחץ על המשך לתוצאות המבחן')
      } else {
        alert('תשובה לא נכונה, לחץ על המשך לצפייה בתוצאות המבחן')
      }
    }
  }, [answerState]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "wheat",
          dir: "rtl",
        }}
      >
        <h1>שאלה 3:</h1>
        <p>גרור את התמונות לפי סדר ה-ABC באנגלית מימין לשמאל</p>
        <div style={{ display: "flex" }}>
          {imgState.map(({ id, name, img }) => (
            <Photo img={img} name={name} id={id} key={id} />
          ))}
        </div>
        <div style={{display: "flex", gap: 10}}>
          <DropArea answers={answerState} onDrop={handleDrop} index={0} />
          <DropArea answers={answerState} onDrop={handleDrop} index={1} />
          <DropArea answers={answerState} onDrop={handleDrop} index={2} />
        </div>

        <div>
          <ButtonNext className="button" disabled={!isAnswered}>
            המשך
          </ButtonNext>
        </div>
        
      </div>
    </DndProvider>
  );
};

export default ThirdQ;
