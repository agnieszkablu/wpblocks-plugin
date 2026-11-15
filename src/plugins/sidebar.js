import { PluginSidebar } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useSelect, useDispatch } from '@wordpress/data';

const MetaFieldsInputs = () => {
    const subtitle = useSelect((select) => select('core/editor').getEditedPostAttribute('meta')._blocks_course_post_subtitle, []);
    const { editPost } = useDispatch('core/editor');
    return (
      <PanelBody title={__('Metafields Block Settings Menu Item', 'blocks-plugin')}>
        <TextControl
          label={__('Subtitle', 'blocks-plugin')}
          value={subtitle}
          onChange={(value) => {
              editPost({ meta: { _blocks_course_post_subtitle: value } });
          }}
        />
      </PanelBody>
    );
};

registerPlugin('metafields-sidebar', {
    render: () => {
      return (
        <PluginSidebar
            name="metafields-sidebar"
            title={__('My Plugin Sidebar', 'blocks-plugin')}
            icon="admin-settings"
        >
           <MetaFieldsInputs />
        </PluginSidebar>
      );
    }
});