const { imports, exporter } = require("@s_stalwart_s/import-export-manager");

const {
  nodeModules: {
    react: { useEffect },
  },
} = imports;

console.log(imports);

function App() {
  useEffect(() => {
    console.log("YaY!");
  }, []);

  return (
    <center>
      <div className="App">
        <header className="App-header">
          <h1>Welcome !</h1>
        </header>
      </div>
    </center>
  );
}

exporter("components", { App });
