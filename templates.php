
<?php

function blocks_course_get_post_subtitle($post_id)
{
  $post_type_object = get_post_type_object('post');
  $post_type_object->template = array(
    array('blocks/metadata-block')
  );
}

add_action('init', 'blocks_course_get_post_subtitle');
