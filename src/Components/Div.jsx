const Div = ({ children }) => {
  return <div>{children}</div>;
};

require("@s_stalwart_s/import-export-manager").exporter("components.utils", {
  Div,
});
