<?php
/*
Plugin Name: Smart Gallery
Description: A simple Gutenberg block that pulls data from a public API.
Version: 1.0
Author: Artyom
*/

// Enqueue block assets
function sgb_enqueue_block_assets() {
    wp_enqueue_script(
        'sgb-block-editor-script',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-api-fetch'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_enqueue_style(
        'sgb-block-editor-styles',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    wp_enqueue_style(
        'sgb-block-styles',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );
}

add_action('enqueue_block_editor_assets', 'sgb_enqueue_block_editor_assets');
add_action('enqueue_block_assets', 'sgb_enqueue_block_assets');
