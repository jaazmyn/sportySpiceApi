import db from "../db/config.db";
import Queries from "../db/queries";

const postsController = {
  getPosts: async (req, res) => {
    try {
      console.log(Queries.getAll);
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
  getById: async (req, res) => {
    try {
      console.log(Queries.getAll);
      const result = await db.query(Queries.getById, [req.params.id]);
      res.json({
        message: "sucessfully sent",
        status: 200,
        data: result.rows,
      });
    } catch (e) {
      error(Error(e));
    }
  },
};

export default postsController;
