const Div = ({ children }) => {
  return <div>{children}</div>;
};

require("~/Scripts/importExportManager").exporter("components.utils", {
  Div,
  __filename,
});
