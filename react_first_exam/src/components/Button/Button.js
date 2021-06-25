import "./Button.css";

const Button = ({ color, text, colorHandler }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={() => colorHandler(color)}>
      {text}
    </button>
  );
};

export default Button;
