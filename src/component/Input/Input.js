import "./input.css";
import { v4 as uuidv4 } from "uuid";

import { useData } from "../../Conext/dataContext";
import ColorPalette from "./ColorPallette";
const UserInput = () => {
  const { msg, setMsg, setData, getInput } = useData();

  const saveData = () => {
    if (msg.title && msg.body) {
      setData((data) => [...data, { ...msg, id: uuidv4() }]);
      setMsg({
        title: "",
        body: "",
        id: "",
        color: { bgColor: "white", titleColor: "crimson", bodyColor: "black" }
      });
      return;
    }
    alert("empty field");
  };

  const inputCol = (color) => {
    setMsg((msg) => {
      return { ...msg, color: color };
    });
  };
  return (
    <div className="input">
      <input
        value={msg.title}
        onChange={(e) => getInput(e)}
        placeholder="enter title"
        name="title"
      />
      <textarea
        value={msg.body}
        onChange={(e) => getInput(e)}
        placeholder="enter body "
        name="body"
      ></textarea>
      <button onClick={() => saveData()}>
        <i className="fa fa-plus"></i>
      </button>
      <ColorPalette palleteFunc={inputCol} />
    </div>
  );
};

export default UserInput;
