import "./RT_Card_Detail.css";

const RT_Card_Detail = ({ children }) => {
  return (
    <div className="rt-cards-detail drag-to-scroll no-scrollbar" id="RTCD">
      {children}
    </div>
  );
};

export default RT_Card_Detail;
