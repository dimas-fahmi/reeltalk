import "./Cards.css";

const Cards = ({ children, className = "" }) => {
  return (
    <div className={"cards drag-to-scroll no-scrollbar " + className}>
      {children}
    </div>
  );
};

export default Cards;
