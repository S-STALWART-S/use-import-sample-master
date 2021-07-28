import logo from "./logo.svg";
import "./App.css";

import { imports } from "@s_stalwart_s/import-export-manager";

require("~/Components/Header");
require("~/Components/Div");
require("~/Components/Paragraph");

const {
  components: {
    headers: { Header },
  },
} = imports;

console.log(imports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {/* <Div>Hello!</Div> */}
        </a>
      </header>
    </div>
  );
}

export default App;
