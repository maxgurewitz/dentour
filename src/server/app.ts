import * as Koa from 'koa';

const app = new Koa();

const helloWorld: Koa.Middleware = ctx => {
  ctx.body = 'Hello Koa';
};

app.use(helloWorld);

export default app;
