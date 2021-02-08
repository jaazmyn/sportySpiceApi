const queryUsers = {
  getAll: `SELECT
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
  getById: `SELECT
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
};

export default queryUsers;
