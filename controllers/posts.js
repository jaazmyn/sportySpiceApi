import db from "../db/config.db";
import Queries from "../db/queries";

const postsController = {
  getPosts: async (req, res) => {
    try {
      const result = await db.query(Queries.getAll);
      res.json({
        message: "sucessfully sent",
        status: 200,
        data: result.rows,
      });
    } catch (e) {
      error(Error(e));
    }
  },
  logRequest: (req, res, next) => {
    console.log("GET /posts");
    console.log("IP INC: " + req.ip);
    next();
  },
};

export default postsController;
