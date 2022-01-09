import { useDrag } from "react-dnd";

const Photo = ({ img, name, id }) => {
  const [{}, dragRef] = useDrag({
    type: "Answer",
    item: { img, name, id }
  });
  return (
    <div ref={dragRef}>
      <img src={img} alt={name} key={id} width="100px" className="img-map" />
    </div>
  );
};

export default Photo;
