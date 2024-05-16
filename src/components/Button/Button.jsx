const Button = ({ type, color, respond }) => {
  return (
    <button className={`btn btn-outline-${color} mx-2`} onClick={respond}>
      {type}
    </button>
  );
};

export default Button;
