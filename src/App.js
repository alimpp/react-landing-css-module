import BaseButton from "./components/base/button";
import BaseInput from "./components/base/input";

function App() {
  return (
    <div className="container">
      <BaseButton>Hello world</BaseButton>
      <BaseInput label="Username" />
    </div>
  );
}

export default App;
