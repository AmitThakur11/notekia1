import { color } from "./utils";

export const ColorPalette = ({ palleteFunc, ...props }) => {
  return (
    <div className="input-color-pallete">
      {color.map((col) => {
        return (
          <div
            key={col}
            onClick={() => palleteFunc(col, props.obj)}
            className="color"
            style={{ backgroundColor: `${col.bgColor}` }}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorPalette;
