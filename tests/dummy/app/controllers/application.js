import Controller from '@ember/controller';
import FilePondImagePreview from 'filepond-plugin-image-preview';
import FilePondImageTransform from 'filepond-plugin-image-transform';
import FilePondImageCrop from 'filepond-plugin-image-crop';
import FilePondImageResize from 'filepond-plugin-image-resize';
import FilepondPluginFileValidateType from 'filepond-plugin-file-validate-type';

export default Controller.extend({
  FilePondImagePreview,
  FilePondImageTransform,
  FilePondImageCrop,
  FilePondImageResize,
  FilepondPluginFileValidateType,

  actions: {
    oninit() {
      // eslint-disable-next-line no-console
      console.log('Action: oninit...');
    }
  }
});
