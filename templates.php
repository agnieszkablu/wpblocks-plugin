
<?php

function blocks_register_template($post_id)
{
  $post_type_object = get_post_type_object('post');
  $post_type_object->template_lock = 'all';
  $post_type_object->template = array(
    array('blocks/metadata-block'),
    array('core/paragraph', array(
      'content' => 'Enter your text here...'
    )),
    array(
      'wpblocks/team-members',
      array('columns' => 2),
      array(
        array(
          'wpblocks/team-member',
          array(
            'name' => 'John Doe',
            'bio' => 'Developer'
          )
        ),
        array('wpblocks/team-member'),
        array('wpblocks/team-member')
      )
    )
  );
}

add_action('init', 'blocks_register_template');
