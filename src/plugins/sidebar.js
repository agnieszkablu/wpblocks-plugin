import { PluginSidebar, PluginDocumentSettingPanel, PluginPostStatusInfo, PluginPrePublishPanel, PluginPostPublishPanel, PluginMoreMenuItem, PluginBlockSettingsMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';

registerPlugin('metafildes-block-sidebar', {
    render: () => {
        return (
          <>
            <PluginDocumentSettingPanel
                name="metafildes-block-panel"
                title={__('Metafields Post Options Panel', 'blocks-plugin')}
                className="metafildes-block-panel"
                icon="admin-settings"
            >
                <p>{__('Content of the panel', 'blocks-plugin')}</p>
            </PluginDocumentSettingPanel>
            <PluginPostStatusInfo
                className="metafildes-block-status-info"
            >
                <p>{__('Content of the status info', 'blocks-plugin')}</p>
            </PluginPostStatusInfo>
            <PluginPrePublishPanel
                name="metafildes-block-pre-publish-panel"
                title={__('Metafields Pre Publish Panel', 'blocks-plugin')}
                className="metafildes-block-pre-publish-panel"
            >
                <p>{__('Content of the pre publish panel', 'blocks-plugin')}</p>
            </PluginPrePublishPanel>
            <PluginPostPublishPanel
                name="metafildes-block-post-publish-panel"
                title={__('Metafields Post Publish Panel', 'blocks-plugin')}
                className="metafildes-block-post-publish-panel"
            >
                <p>{__('Content of the post publish panel', 'blocks-plugin')}</p>
            </PluginPostPublishPanel>
            <PluginMoreMenuItem
                icon="admin-settings"
                onClick={ () => alert(__('More menu item clicked', 'blocks-plugin')) }
            >
                {__('Metafields More Menu Item', 'blocks-plugin')}
            </PluginMoreMenuItem>
            <PluginBlockSettingsMenuItem
                icon="admin-settings"
                onClick={ () => alert(__('Block settings menu item clicked', 'blocks-plugin')) }
                allowedBlocks={['core/paragraph']}
                label={__('Metafields Block Settings Menu Item', 'blocks-plugin')}
            >
            </PluginBlockSettingsMenuItem>
            <PluginSidebar
                name="metafildes-block-sidebar"
                title={__('Metafields Post Options Sidebar', 'blocks-plugin')}
                icon="admin-settings"
            >
                <p>{__('Content of the sidebar', 'blocks-plugin')}</p>
            </PluginSidebar>
          </>
        );
    }
});