const { imports, exporter } = require("@s_stalwart_s/import-export-manager");

console.log(imports);
const {
  nodeModules: {
    react: { useEffect },
  },
  components: {
    utils: { Div },
    main: { Paragraph },
    headers: { Header },
  },
} = imports;

function App() {
  useEffect(() => {
    console.log("YaY!");
  }, []);

  return (
    <center>
      <div className="App">
        <Div>
          <Header>
            <Paragraph>Hallo!</Paragraph>
          </Header>
        </Div>
      </div>
    </center>
  );
}

exporter("components", { App });
