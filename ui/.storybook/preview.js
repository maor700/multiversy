import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from 'path/to/docs.json';
if (docJson) setStencilDocJson(docJson);

export const parameters = {
    controls: { hideNoControlsWarning: true }
}