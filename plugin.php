<?php

/**
 * Plugin Name:       Blocks Course Plugin Boilerplate
 * Description:       A minimal example block plugin.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Agnieszka Sikora
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-plugin-boilerplate
 */

function blocks_plugin_boilerplate_enqueue_assets()
{

	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_enqueue_script('blocks-plugin-boilerplate-script', plugins_url('build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version']);

	wp_enqueue_style('blocks-plugin-boilerplate-style', plugins_url('build/index.css', __FILE__));
}

add_action('enqueue_block_editor_assets', 'blocks_plugin_boilerplate_enqueue_assets');
