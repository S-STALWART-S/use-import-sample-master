const { lazy } = require("react");

//* Super stuff =>

const imports = {};
const filesPath = [];

//* Local stuff =>

const pathSplitter = (path) => {
  if (!Array.isArray(path)) path = path.split(".");
  return path;
};

const assigner = (imports, path, value) => {
  const newPath = pathSplitter(path);

  const lastKeyIndex = newPath.length - 1;

  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = newPath[i];
    if (!(key in imports)) {
      imports[key] = {};
    }
    imports = imports[key];
  }

  imports[newPath[lastKeyIndex]] = {
    ...imports[newPath[lastKeyIndex]],
    ...value,
  };
};

//* Global stuff =>

/**
 * @param {string} path - Object path to save value
 * @param {string} componentName - Object key to access this component
 * @param {string} fileSRC - File address using __filename
 * @return {undefined} undefined
 */
const lazyExporter = (path, componentName, fileSRC) => {
  path = pathSplitter(path);
  fileSRC = fileSRC.split("/src")[1];
  assigner(imports, path, {
    [componentName]: () => lazy(() => import(fileSRC)),
  });
};

/**
 * @param {string} keyPath - Object path to save value
 * @param {object} value - Your value in Object
 * @param {string} filePath - Your filePath using __filename
 * @return {undefined} undefined
 */
const exporter = (keyPath, value, filePath) => {
  if (filePath && typeof filePath === "string") {
    const path = filePath.split("/src")[1];
    filesPath.push(path);
  }
  assigner(imports, keyPath, value);
  return () => console.log("I DON'T RETURN ANYTHING!");
};

const autoRequire = () => filesPath.forEach((filePath) => require(filePath));

module.exports = { exporter, imports, lazyExporter, autoRequire };
