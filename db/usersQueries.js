const queryUsers = {
  /* FIXME: fix users queries */
  getAll: 
    `SELECT
      json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email,
        'avatar', u.avatar_image_url,
        'premium', json_build_object(
          'id', pr.id,
          'level', pr.level
        )
      )
      FROM users AS u
      INNER JOIN premium AS pr ON pr.id = u.premium_id`,
/* ---- ID ---- */
  getById:
  `SELECT
  json_build_object(
    'id', u.id,
    'username', u.username,
    'email', u.email,
    'avatar', u.avatar_image_url,
    'premium', json_build_object(
      'id', pr.id,
      'level', pr.level
    )
  )
  FROM users AS u
  INNER JOIN premium AS pr ON pr.id = u.premium_id
  where u.id=$1;`,
  getUsersFixlater: 
    `SELECT
      json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email,
        'avatar', u.avatar_image_url,
        'premium', json_build_object(
          'id', pr.id,
          'level', pr.level
        )
        'posts', json_build_object(
          'id', p.id,
          'title', p.title,
          'description', p.description,
          'rating', p.rating,
          'image_url', p.image_url,
          'topic', json_build_object(
            'id', t.id,
            'name', t.name
          ),
        )
      )
      FROM users AS u
      INNER JOIN premium AS pr ON pr.id = u.premium_id
      INNER JOIN posts AS p ON p.user_id = u.id
      INNER JOIN topics AS t ON t.id = p.topic_id;`,
};

export default queryUsers;