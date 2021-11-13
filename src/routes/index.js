const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const routes = Router();

routes.get("/", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });

  return res.json(posts);
});

module.exports = (app) => app.use(routes);
