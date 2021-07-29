require("~/requires");

const {
  imports: {
    nodeModules: {
      reactDOM: { render },
    },
    components: { App },
  },
} = require("@s_stalwart_s/import-export-manager");

render(<App />, document.getElementById("root"));
