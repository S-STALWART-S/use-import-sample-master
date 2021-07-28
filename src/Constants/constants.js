const { exporter } = require("@s_stalwart_s/import-export-manager");

const constants = {
  helloMessage: "Hello everyone. im Soheil at your services :)",
};

exporter("constants", { constants });
