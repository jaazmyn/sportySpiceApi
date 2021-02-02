const queryPosts = {
  getAll:
    "SELECT * FROM posts JOIN users ON users.id = posts.user_id JOIN premium ON premium.id = users.premium_id",
  getById:
    "SELECT * FROM posts JOIN users ON users.id=posts.user_id JOIN premium ON premium.id=users.premium_id WHERE posts.id=$1",
  sortedByRating:
    "SELECT * FROM posts JOIN users ON users.id = posts.user_id JOIN premium ON premium.id = users.premium_id ORDER BY rating DESC",
};
