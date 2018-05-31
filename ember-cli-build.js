'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css');
  app.import('node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js', {
    using: [{ transformation: 'cjs', as: 'filepond-plugin-image-preview'}]
  });
  app.import('node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js', {
    using: [{ transformation: 'cjs', as: 'filepond-plugin-image-transform'}]
  });
  app.import('node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js', {
    using: [{ transformation: 'cjs', as: 'filepond-plugin-image-crop'}]
  });
  app.import('node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js', {
    using: [{ transformation: 'cjs', as: 'filepond-plugin-image-resize'}]
  });
  app.import('node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js', {
    using: [{ transformation: 'cjs', as: 'filepond-plugin-file-validate-type'}]
  });

  return app.toTree();
};
