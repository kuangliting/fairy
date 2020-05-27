const Router = require("koa-router");
const {getSwaggerJSDoc} = require('../../util/swagger');
 

// 子路由1：主页
let routerHome = new Router();

routerHome.get("/", async (ctx) => {
  ctx.body = {
    code:0,
    data:[{name:'ssss'}]
  };
});
 
 

// 装载所有路由
let router = new Router();

router.use("/", routerHome.routes(), routerHome.allowedMethods());
 

getSwaggerJSDoc(router);

module.exports = router;
