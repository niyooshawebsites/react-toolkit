import Button from "../Button/Button";
import { counterSliceActions } from "../../store/slices/counterSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const UserInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleInc = () => {
    dispatch(counterSliceActions.inc());
  };

  const handleDec = () => {
    dispatch(counterSliceActions.dec());
  };

  const handleReset = () => {
    dispatch(counterSliceActions.reset());
  };

  const handleAdd = () => {
    dispatch(counterSliceActions.add({ num: inputRef.current.value }));
    inputRef.current.value = "";
  };

  const handleSub = () => {
    dispatch(counterSliceActions.sub({ num: inputRef.current.value }));
    inputRef.current.value = "";
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
