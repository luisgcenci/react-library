const Button = ({ title, onClick, color, backgroundColor, padding, fontSize, border }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        style={{
          padding: padding ? padding : "1vh 4vw",
          fontSize: fontSize ? fontSize : "14px",
          border: border ? border : "none",
          borderRadius: "5px",
          color: color ? color : "#FFFFFF",
          backgroundColor: backgroundColor ? backgroundColor : "#eb8b35",
          boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {title ? title : "Button"}
      </button>
    </div>
  );
};

export default Button;
