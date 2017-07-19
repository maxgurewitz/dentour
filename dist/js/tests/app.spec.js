"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const ava_1 = require("ava");
ava_1.default('foo', t => t.true(app_1.default.middleware.length > 0));
//# sourceMappingURL=app.spec.js.map