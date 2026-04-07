<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bhr2023' );

/** Database username */
define( 'DB_USER', 'bhr2023' );

/** Database password */
define( 'DB_PASSWORD', 'kQm33aX^^$74' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6ZKKp{KUK1?CKc*d]KEvKFP,~R|Q>d8Fn5|[M?AY{:Bv kQ1d[29(dn:mwi5a`&8' );
define( 'SECURE_AUTH_KEY',  '6y*0&`Z]zW.^>1e52A?v*b?4$~;au`&d+FdZ5${*F0%Y+iM{EWWpXDj06/b=P8O^' );
define( 'LOGGED_IN_KEY',    'g:9!o<bYv01.!J.1;3aB6C{A7x+5Z+3{HV.3Q]Y OQ?CT,2}JBotu8.RH*}huBCX' );
define( 'NONCE_KEY',        'Du@[.gaz3(0{JJfEnI<CIJM)K0PY)l^^bbZX+Cv3]oZE=(VdJcV9/vSEA8ukBl&G' );
define( 'AUTH_SALT',        'S?]Dn0 [@h5go1<]jR1IXxj+m!KCu`9Kxb&u-C8CoQ/omR9`1L ts=#|#@_inCdB' );
define( 'SECURE_AUTH_SALT', 'c]wB-kRRiw7mkUSy`g!CU([q;egH/`QCLGX([93l;o7!Hx!8%lLyqU.mtQAt@8go' );
define( 'LOGGED_IN_SALT',   '1#Z*:Fm2_s^0AI/c]DLD>E5Y#SK5xxng3]XG{..}qub{(AL:`:KXea_O!Hu>9>4_' );
define( 'NONCE_SALT',       'r!x){5u{Y!i75<NZ(j<$WIr6> JZDHe3ch#g#gbt:~nQ9DE~5rpRCUH70v[8F/tW' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
