import Button from "../Button/Button";
import { counterActions } from "../../store/Store";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const UserInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleInc = () => {
    dispatch(counterActions.inc());
  };

  const handleDec = () => {
    dispatch(counterActions.dec());
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputRef.current.value }));
  };

  const handleSub = () => {
    dispatch(counterActions.sub({ num: inputRef.current.value }));
  };
  return (
    <>
      <Button type={"Dec"} color={"primary"} respond={handleDec} />
      <Button type={"Reset"} color={"warning"} respond={handleReset} />
      <Button type={"Inc"} color={"secondary"} respond={handleInc} />
      <input
        type="number"
        className="form-control my-3"
        placeholder="Enter number"
        ref={inputRef}
        required
      />
      <Button type={"Add"} color={"info"} respond={handleAdd} />
      <Button type={"Sub"} color={"success"} respond={handleSub} />
    </>
  );
};

export default UserInput;
