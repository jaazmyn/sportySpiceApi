const postsController = {
  logPosts: (req, res) => res.send("helloooooooo"),
  logRequest: (req, res, next) => {
    console.log("GET /posts");
    console.log("IP INC: " + req.ip);
    next();
  },
};

export default postsController;
