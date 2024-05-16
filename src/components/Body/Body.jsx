import UserInput from "../UserInput/UserInput";

const Body = () => {
  return (
    <div className="card-body">
      <div className="upper-controls my-3"></div>
      <div className="user-input my-3">
        <UserInput />
      </div>
      <div className="user-input my-3"></div>
    </div>
  );
};

export default Body;
