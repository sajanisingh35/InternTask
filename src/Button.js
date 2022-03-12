import logo from "./logo.svg";
import "./App.css";

function Button(props) {
  return (
    <div className="App">
      <div className="mt-5 mb-5" justify-content="space-between">
        <button className={props.data.className}>{props.data.details}</button>
      </div>
    </div>
  );
}

export default Button;
