const queryPosts = {
  getAll: `SELECT
    json_build_object(
      'id', p.id,
      'title', p.title,
      'description', p.description,
      'rating', p.rating,
      'image_url', p.image_url,
      'topic_id', p.topic_id,
      'topic', json_build_object(
        'id', t.id,
        'name', t.name
      ),
      'user_id', p.user_id,
      'user', json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email,
        'avatar', u.avatar_image_url,
        'premium_id', u.premium_id,
        'premium', json_build_object(
          'id', pr.id,
          'level', pr.level
        )
      )
    )
    FROM posts AS p
    INNER JOIN topics AS t ON t.id = p.topic_id
    INNER JOIN users AS u ON u.id = p.user_id
    INNER JOIN premium AS pr ON pr.id = u.premium_id;`,
  getById: `SELECT
    json_build_object(
      'id', p.id,
      'title', p.title,
      'description', p.description,
      'rating', p.rating,
      'image_url', p.image_url,
      'topic_id', p.topic_id,
      'topic', json_build_object(
        'id', t.id,
        'name', t.name
      ),
      'user_id', p.user_id,
      'user', json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email,
        'avatar', u.avatar_image_url,
        'premium_id', u.premium_id,
        'premium', json_build_object(
          'id', pr.id,
          'level', pr.level
        )
      )
    )
    FROM posts AS p
    INNER JOIN topics AS t ON t.id = p.topic_id
    INNER JOIN users AS u ON u.id = p.user_id
    INNER JOIN premium AS pr ON pr.id = u.premium_id
    where p.id=$1;`,
  sortedByRating:
    "SELECT * FROM posts JOIN users ON users.id = posts.user_id JOIN premium ON premium.id = users.premium_id ORDER BY rating DESC",
};

export default queryPosts;
