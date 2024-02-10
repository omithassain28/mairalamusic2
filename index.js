import { execSync } from "child_process";
const keep_alive = require('./build/src/keep_alive.js');
execSync("npx tsc");
