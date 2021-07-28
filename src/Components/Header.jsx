const { exporter } = require("@s_stalwart_s/import-export-manager/");

const Header = ({ children }) => {
  return <h1>{children}</h1>;
};

exporter(["components", "headers"], { Header }, __filename);
