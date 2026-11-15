<?php

function blocks_filter_metadata($metadata)
{
  // Example filter logic
  if ($metadata['name'] === 'core/paragraph') {
    $metadata['title'] = 'Custom title';
    $metadata['supports']['color'] = array(
      'link' => true,
      'gradients' => true
    );
  }
  return $metadata;
}
add_filter('block_type_metadata', 'blocks_filter_metadata');

function blocks_custom_filter_allowed_blocks($allowed_block_types, $editor_context)
{
  if (!empty($editor_context->post->post_type) && $editor_context->post->post_type === 'post') {
    $allowed_block_types = array(
      'core/paragraph',
      'core/image'
    );
  }
  return $allowed_block_types;
}

add_filter('allowed_block_types_all', 'blocks_custom_filter_allowed_blocks', 10, 2);
