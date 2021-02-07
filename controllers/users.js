import db from "../db/config.db";
import Queries from "../db/usersQueries";

const usersController = {
  getUsers: async (req, res) => {
    try {
      const result = await db.query(Queries.getAll);
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
  getUsersById: async (req, res) => {
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

export default usersController;
