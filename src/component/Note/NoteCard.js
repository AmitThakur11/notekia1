import ColorPalette  from "../Input/ColorPallette";
import { useData } from "../../Conext/dataContext";

const NoteCard = ({ item }) => {
  const { data, setData } = useData();
  const noteColorChange = (color, note) => {
    const newData = data.map((item) =>
      item.id === note.id ? { ...item, color: color } : item
    );
    setData(newData);
  };

  const delData = (id) => {
    let filter = data.filter((item) => item.id !== id);
    setData(filter);
  };

  return (
    <div
      style={{ backgroundColor: `${item?.color.bgColor}` }}
      key={item?.id}
      className="box"
    >
      <div className="title" style={{ color: `${item?.color.titleColor}` }}>{item?.title || "Team Notekia"}
      </div>
      <div className="body"  style={{ color: `${item?.color.bodyColor}` }}>
        {item?.body || "Lets write your first code with us!"}
      </div>
      <ColorPalette palleteFunc={noteColorChange} obj={item} />
      <button onClick={() => delData(item?.id)}>
        <i className="fa fa-trash"></i>
      </button>
      <i className="fa fa-thumb-tack pin"></i>
    </div>
  );
};

export default NoteCard;
