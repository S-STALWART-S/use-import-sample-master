import { exporter } from "@s_stalwart_s/import-export-manager";

const { isArray, isBoolean } = require("lodash");

const { useEffect, useState, useMemo } = require("react");

exporter("nodeModules", {
  react: { useEffect, useState, useMemo },
  lodash: { isArray, isBoolean },
});
