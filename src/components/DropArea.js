import { useDrop } from "react-dnd";

export const DropArea = ({ onDrop, answers, index }) => {
  const answer = answers[index];
  const [{}, dropRef] = useDrop({
    accept: "Answer",
    drop: (item) => {
        if(answer) return
      onDrop && onDrop(item, index);
    },
  });

  return (
    <div
      ref={dropRef}
      className="container"
      style={{
        border: "3px solid wheat",
        height: "130px",
        width: "130px",
        display: "flex",
        alignItems:"center"
      }}
    >
      {answer ? (
        <img src={answer.img} alt={answer.name} width="100px" className="img-map" />
      ) : (
        "Drop the answer here"
      )}
    </div>
  );
};
