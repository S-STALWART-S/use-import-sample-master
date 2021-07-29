const { exporter } = require("@s_stalwart_s/import-export-manager");

const messages = {
  helloMessage: "Hello everyone. im Soheil at your services :)",
};

exporter("constants", { messages });
// access to hello message: constants.messages.helloMessages
