"use strict";

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _cli = _interopRequireDefault(require("@wdio/cli"));

var _wdio = _interopRequireDefault(require("./wdio.conf"));

var _base = _interopRequireDefault(require("../configs/base.conf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const dir = './tmp';
// const mergedConfigPath = `${dir}/merged.conf.js`
// const conf = merge(wdioConf, uiConf);
// fs.emptyDirSync(dir)
// fs.writeFileSync(mergedConfigPath, JSON.stringify(conf))
const wdioConfPath = './wdio.conf.js';
const specPath = './test/features/sniptech.feature';
const wdio = new _cli.default(wdioConfPath, {
  spec: specPath
});
wdio.run().then(exitCode => {
  process.exit(exitCode);
}, error => {
  console.error('Launcher failed to start the test', error.stacktrace);
  process.exit(1);
});