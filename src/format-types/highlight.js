import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const HighlightFormatButton = ({ isActive, value, onChange }) => {
  return (
    <RichTextToolbarButton
      icon="editor-textcolor"
      title={__('Highlight custom', 'blocks')}
      onClick={() => onChange(toggleFormat(value, { 
        type: 'blocks/highlight',
        attributes: {
          style: 'background-color: yellow;'
        }
       }))}
      isActive={isActive}
    />
  );
};
registerFormatType('blocks/highlight', {
  title: __('Highlight', 'blocks'),
  tagName: 'span',
  className: null,//'highlight-custom',
  edit: HighlightFormatButton
});