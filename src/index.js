require("~/requires");

const {
  imports: {
    nodeModules: {
      reactDOM: { render },
    },
    components: { App },
  },
  imports,
} = require("@s_stalwart_s/import-export-manager");
console.log(imports);

render(<App />, document.getElementById("root"));
