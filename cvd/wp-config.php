<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db_cvd');

/** MySQL database username */
define('DB_USER', 'admincvd');

/** MySQL database password */
define('DB_PASSWORD', 'admin123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|-J#~~Ka~kt,05:4+Cy+-d`+JXuLY8PDWL(M5z3X_2mq>N`44?P`On n?g&,@4lO');
define('SECURE_AUTH_KEY',  '1$r^5^ayfm+;{J(n6svQ_(NIuYIKs8+QjLfwwZ2x<w^0%3+Mtq3?*m+FB?$l}|mE');
define('LOGGED_IN_KEY',    'U,uD2#6!d7;3{D9Pf}UT>%Ib)cAMZ^VMeG]e<YcKnc3+_/y4xe(d2ivpI$h.J^!3');
define('NONCE_KEY',        '(u6QUF4f>N>$*w_,<m=yK(nx|E|c{ thKY=#zuC34J+|(%TW/`Zv :}~Qxs_hMcD');
define('AUTH_SALT',        '+TIZw|E|5$FkOG]kW-&XbH-:WlmUk{s?^Q&@d*s);xdYKX`|5E !o~#qbA+K,vJs');
define('SECURE_AUTH_SALT', '3-h9|-rrYhL-15J7Fv1jRi%M%|TmC|+2.Y/PUIfI/]g|-Mj4WOjW!C+D1(NS.[.8');
define('LOGGED_IN_SALT',   '>n|voxQ!7&LjF^CFi1C#8$9&v!+Dt,%/6q@=er~Opmj}3/z}=B^L]~QOK:*t6qk+');
define('NONCE_SALT',       'TS6I=59{Aln|&k&^Ho#;b|!<6{&[&1a+r.avKwkFq7|;ei-6|XlF&Qb/-oTI<W/:');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
