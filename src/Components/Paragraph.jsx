const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

require("@s_stalwart_s/import-export-manager").exporter("components.main", {
  Paragraph,
});
