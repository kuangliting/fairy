module.exports.setup = (router) => {
  /**
   * @swagger
   * /user/list:
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
  router.get("/user/list", (ctx) => {
    ctx.set("Content-Type", "application/json");
    ctx.body = JSON.stringify({ code: 200, data: [] });
  });
  /**
   * @swagger
   * /users:
   *   post:
   *     description: Returns users
   *     tags: [Users]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: users
   */
//   *     parameters:
//   *       - $ref: '#/parameters/username'
  router.post("/user", (ctx) => {

    ctx.set("Content-Type", "application/json");
    ctx.body = JSON.stringify({ code: 200, data: [] });
  });
};
