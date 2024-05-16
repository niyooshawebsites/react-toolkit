import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import myStore from "./store/Store";

function App() {
  const style = {
    width: "400px",
  };

  return (
    <Provider store={myStore}>
      <div className="card text-center" style={style}>
        <Header />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
