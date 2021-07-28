const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

require("~/Scripts/importExportManager").exporter("components.main", {
  Paragraph,
  __filename,
});
