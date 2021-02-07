import ServiceObject from "../services/filterQueryString";
import db from "../db/config.db";
import Queries from "../db/postsQueries";

const postsController = {
  getPosts: async (req, res) => {
    let queryArguments = ServiceObject.filterQuery(req.query);

    try {
      const result = await db.query(queryArguments[0], queryArguments[1]);
      res.json({
        message: "sucessfully sent",
        status: res.statusCode,
        count: result.rows.length,
        data: result.rows,
      });
    } catch (e) {
      console.error(Error(e));
    }
  },
  getById: async (req, res) => {
    try {
      const result = await db.query(Queries.getById, [req.params.id]);

      if (result.rows.length === 0)
        res.json({ message: "No entry", status: 404 });

      res.json({
        message: "Sucessfully sent",
        status: res.statusCode,
        data: result.rows,
      });
    } catch (e) {
      console.error(Error(e));
    }
  },
};

export default postsController;
