const Koa = require("koa");
const KoaStatic = require("koa-static");
const app = new Koa();
const user = require("./src/router");
const koaSwagger = require("koa2-swagger-ui");
const Router = require("koa-router");
const { getSwaggerJSDoc } = require("./util/swagger");

let router = new Router();

//router.use("/", routerHome.routes(), routerHome.allowedMethods());

getSwaggerJSDoc(router);

app.use(
  koaSwagger({
    routePrefix: "/swagger", // host at /swagger instead of default /docs
    // swaggerOptions: {
    //   url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    // },
    swaggerOptions: {
      // passed to SwaggerUi()
      //dom_id: 'swagger-ui-container',//开启不显示
      url: "/v2/swagger.json", // link to swagger.json
      supportedSubmitMethods: ["get", "post", "put", "delete", "patch"],
      //docExpansion: 'none',
      //jsonEditor: false,
      //defaultModelRendering: 'schema',·
      //showRequestHeaders: false,
      //swaggerVersion: 'x.x.x' // read from package.json,
    },
    //routePrefix: '/docs', // route where the view is returned
    //hideTopbar: false, // hide swagger top bar
  })
);

app.use(KoaStatic("./static"));

app.use(router.routes()).use(router.allowedMethods());
//app.use(user.routes()).use(router.allowedMethods());

app.listen(3000);
