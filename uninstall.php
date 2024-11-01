<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

function wpws_deleteTable($table_name) {
  global $wpdb;
  $prefixedTableName = $wpdb->prefix . $table_name;
  $sql = "DROP TABLE IF EXISTS $prefixedTableName;";
  $wpdb->query($sql);
}

wpws_deleteTable("wpws_templates");
wpws_deleteTable("wpws_product_boxes");
wpws_deleteTable("wpws_categories");


