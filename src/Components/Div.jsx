const { exporter, imports } = require("@s_stalwart_s/import-export-manager");

const Div = ({ children }) => {
  return <div>{children}</div>;
};

exporter("components.utils", {
  Div,
});
console.log(imports);
