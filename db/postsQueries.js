const queryPosts = {
  getAll: 
    `SELECT
      json_build_object(
        'id', p.id,
        'title', p.title,
        'description', p.description,
        'rating', p.rating,
        'image_url', p.image_url,
        'topic', json_build_object(
          'id', t.id,
          'name', t.name
        ),
        'user', json_build_object(
          'id', u.id,
          'username', u.username,
          'email', u.email,
          'avatar', u.avatar_image_url,
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
/* ---- ID ---- */
  getById: 
    `SELECT
      json_build_object(
        'id', p.id,
        'title', p.title,
        'description', p.description,
        'rating', p.rating,
        'image_url', p.image_url,
        'topic', json_build_object(
          'id', t.id,
          'name', t.name
        ),
        'user', json_build_object(
          'id', u.id,
          'username', u.username,
          'email', u.email,
          'avatar', u.avatar_image_url,
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
/* ---- ORDER ---- */
  sortedByRating: 
    `SELECT
      json_build_object(
        'id', p.id,
        'title', p.title,
        'description', p.description,
        'rating', p.rating,
        'image_url', p.image_url,
        'topic', json_build_object(
          'id', t.id,
          'name', t.name
        ),
        'user', json_build_object(
          'id', u.id,
          'username', u.username,
          'email', u.email,
          'avatar', u.avatar_image_url,
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
      ORDER BY p.rating DESC;`,
/* ---- TOPIC ---- */
  filterByTopic: 
    `SELECT 
      json_build_object(
        'id', p.id,
        'title', p.title,
        'description', p.description,
        'rating', p.rating,
        'image_url', p.image_url,
        'topic', json_build_object(
          'id', t.id,
          'name', t.name
        ),
        'user', json_build_object(
          'id', u.id,
          'username', u.username,
          'email', u.email,
          'avatar', u.avatar_image_url,
          'premium', json_build_object(
            'id', pr.id,
            'level', pr.level
          )
        )
      )  
    FROM posts AS p
    JOIN topics AS t ON t.id = p.topic_id
    JOIN users AS u ON u.id = p.user_id 
    JOIN premium AS pr ON pr.id = u.premium_id
    WHERE t.name ILIKE $1`,
/* ---- SEARCH ---- */
  searchPosts: 
    `SELECT 
      json_build_object(
        'id', p.id,
        'title', p.title,
        'description', p.description,
        'rating', p.rating,
        'image_url', p.image_url,
        'topic', json_build_object(
          'id', t.id,
          'name', t.name
        ),
        'user', json_build_object(
          'id', u.id,
          'username', u.username,
          'email', u.email,
          'avatar', u.avatar_image_url,
          'premium', json_build_object(
            'id', pr.id,
            'level', pr.level
          )
        )
      )  
    FROM posts AS p
    JOIN topics AS t ON t.id = p.topic_id
    JOIN users AS u ON u.id = p.user_id 
    JOIN premium AS pr ON pr.id = u.premium_id
    WHERE p.title ILIKE $1 OR p.description ILIKE $1`,
};

export default queryPosts;