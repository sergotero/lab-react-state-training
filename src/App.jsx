import LikeButton from "./components/like-button";
import Counter from "./components/counter";
import ClickablePicture from "./components/clickable-picture";

function App() {
  return (
    <div className="App d-flex p-2">
      <div className="row">
        <div className="col-12">
          <LikeButton />
          <Counter />
          <ClickablePicture />
        </div>
      </div>
    </div>
  );
}

export default App;
