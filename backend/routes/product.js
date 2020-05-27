module.exports.setup = (router) => {
  /**
   * @swagger
   * /product/list:
   *   get:
   *     description: Returns users
   *     tags:
   *      - Users
   *     produces:
   *      - application/json
   *     responses:
   *       200:
   *         description: users
   */
  router.get("/product/list", (ctx) => {
    ctx.set("Content-Type", "application/json");
    ctx.body = JSON.stringify({ code: 200, data: [] });
  });
  /**
   * @swagger
   * /product:
   *   post:
   *     description: Returns users
   *     tags: [Users]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: users
   */
  router.post("/product", (ctx) => {
    ctx.set("Content-Type", "application/json");
    ctx.body = JSON.stringify({ code: 200, data: [] });
  });
};
