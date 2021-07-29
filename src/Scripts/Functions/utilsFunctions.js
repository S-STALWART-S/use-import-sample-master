const { exporter } = require("@s_stalwart_s/import-export-manager");

const function1 = () => console.log("Hey! im function1");

const function2 = () => console.log("Hey! im function2");

exporter("scripts.functions.utilsFunctions", { function1, function2 });
