"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
const helloWorld = ctx => {
    ctx.body = 'Hello Koa';
};
app.use(helloWorld);
exports.default = app;
//# sourceMappingURL=app.js.map