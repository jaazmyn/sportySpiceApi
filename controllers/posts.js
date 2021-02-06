import ServiceObject from "../services/filterQueryString";
import db from "../db/config.db";
import Queries from "../db/queries";

const postsController = {
  getPosts: async (req, res) => {
    let queryArguements = ServiceObject.filterQuery(req.query);

    try {
      const result = await db.query(queryArguements[0], queryArguements[1]);
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
      res.json({
        message: "sucessfully sent",
        status: res.statusCode,
        data: result.rows,
      });
    } catch (e) {
      console.error(Error(e));
    }
  },
};

export default postsController;
