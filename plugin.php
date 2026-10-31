<?php

/**
 * Plugin Name:       Blocks Plugin
 * Description:       A minimal example block plugin.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Agnieszka Sikora
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-plugin
 */

function blocks_plugin_enqueue_assets()
{

	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_enqueue_script('blocks-plugin-script', plugins_url('build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version']);
}

add_action('enqueue_block_editor_assets', 'blocks_plugin_enqueue_assets');
