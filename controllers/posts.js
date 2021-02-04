import db from "../db/config.db";
import Queries from "../db/queries";

const postsController = {
  getPosts: async (req, res) => {
    const { sort, search, topic } = req.query;
    let queryArguements;

    if (sort) {
      queryArguements = [Queries.sortedByRating];
    } else if (topic) {
      queryArguements = [Queries.filterByTopic, ["%" + topic.toLowerCase() + "%"]];
    } else if (search) {
      queryArguements = [Queries.searchPosts, ["%" + search.toLowerCase() + "%"]];
    } else {
      queryArguements = [Queries.getAll];
    }
    try {

      const result = await db.query(queryArguements[0], queryArguements[1]);

      res.json({
        message: "sucessfully sent",
        status: 200,
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
        status: 200,
        data: result.rows,
      });
    } catch (e) {
      console.error(Error(e));
    }
  },
};

export default postsController;
