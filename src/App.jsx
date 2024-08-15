import Form from "./components/Form.jsx";
import "./app.css";

function App() {
  return (
    <div className={"hero-container"}>
      <div className="image-container">
        <img src="/hemen.png" alt="Person 1" className="image1" />
        <img src="/someone.png" alt="Person 2" className="image2" />
      </div>
      <Form />
    </div>
  );
}

export default App;
