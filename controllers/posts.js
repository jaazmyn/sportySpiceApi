import db from "../db/config.db";
import Queries from "../db/queries";

const postsController = {
  getPosts: async (req, res) => {
    const { sort, search, topic } = req.query;
    const query;

    console.log(sort);
    if (sort) {
      query = [Queries.sortedByRating, sort];
    } else if (search) {
      query = [Queries.sortedByRating, search];
    } else {
      query = [Queries.getAll];
    }
    try {
      const result = await db.query(query[0], query[1]);
      res.json({
        message: "sucessfully sent",
        status: 200,
        data: result.rows,
      });
    } catch (e) {
      console.error(Error(e));
    }
  },
  getById: async (req, res) => {
    try {
      const result = await db.query(Queries.getById, [req.params.id]);
      res.json({
        message: "sucessfully sent",
        status: 200,
        data: result.rows,
      });
    } catch (e) {
      console.error(Error(e));
    }
  },
};

export default postsController;
