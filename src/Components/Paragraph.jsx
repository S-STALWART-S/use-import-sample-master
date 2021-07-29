const { exporter } = require("@s_stalwart_s/import-export-manager");

const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

exporter("components.main", {
  Paragraph,
});
