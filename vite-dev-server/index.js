const koa = require("koa");
const fs = require("fs");
const path = require("path");

const app = new koa();

// 当请求来临以后会直接进入到 use 注册的回调函数中
app.use((ctx) => {
  console.log(ctx);
  if (ctx.request.url === "/") {
    const indexContent = fs.readFileSync(
      path.resolve(__dirname, "./index.html")
    );
    ctx.response.body = indexContent;
    ctx.response.set("content-type", "text/html");
  }
  if (ctx.request.url === "/main.js") {
    ctx.response.body = fs.readFileSync(path.resolve(__dirname, "./main.js"));
    ctx.response.set("content-type", "text/javascript");
  }
  if (ctx.request.url === "/App.vue") {
    ctx.response.body = fs.readFileSync(path.resolve(__dirname, "./App.vue"));
    ctx.response.set("content-type", "text/javascript");
  }
});

app.listen(8888, () => {
  console.log("vite dec server listening on 8888");
});
