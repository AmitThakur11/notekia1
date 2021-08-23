import "./output.css";

import { useData } from "../../Conext/dataContext";
import NoteCard from "../Note/NoteCard";

const OutputSection = () => {
  const { data } = useData();
  return (
    <div className="result-container">
      <div className="result">
        <h1>Notes.....</h1>
        {data.length === 0 && <NoteCard />}
        <div className="box-container">
          {data?.map((item) => {
            return <NoteCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OutputSection;
