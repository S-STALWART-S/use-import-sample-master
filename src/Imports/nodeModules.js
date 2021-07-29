import { exporter } from "@s_stalwart_s/import-export-manager";
import { useEffect, useState, useMemo } from "react";
import { render } from "react-dom";
import { isArray, isBoolean } from "lodash";

exporter("nodeModules", {
  react: { useEffect, useState, useMemo },
  reactDOM: { render },
  lodash: { isArray, isBoolean },
});
