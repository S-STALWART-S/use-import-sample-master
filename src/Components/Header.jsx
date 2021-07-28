const { exporter } = require("~/Scripts/importExportManager");

const Header = ({ children }) => {
  return <h1>{children}</h1>;
};

exporter("components.headers", { Header }, __filename);
