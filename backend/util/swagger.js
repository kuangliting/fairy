const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  info: {
    title: "API",
    version: "1.0.0",
    description: "API",
  },
  host: "localhost:3000",
  basePath: "/", // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // 写有注解的router的存放地址
};

const swaggerSpec = swaggerJSDoc(options);

module.exports.getSwaggerJSDoc = function (router) {
  // 通过路由获取生成的注解文件
  //console.log("swaggerSpec-------------------------");
  //console.log(swaggerSpec);
  router.get("/v2/swagger.json", async function (ctx) {
    ctx.set("Content-Type", "application/json");
    // console.log("swaggerSpec-------------------------");
    // console.log(swaggerSpec);
    ctx.body = swaggerSpec;
  });
  return router;
  
};
//http://localhost:3000/swagger