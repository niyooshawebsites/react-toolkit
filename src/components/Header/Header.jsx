import { useSelector } from "react-redux";

const Header = () => {
  const { counter } = useSelector((state) => state.counter_slice);
  return (
    <div className="card-header">
      <div className="card-title">
        <h1 className="display-1">{counter} </h1>
      </div>
    </div>
  );
};

export default Header;
