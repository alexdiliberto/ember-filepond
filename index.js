'use strict';

module.exports = {
  name: 'ember-filepond',

  importTransforms: require('ember-cli-cjs-transform').importTransforms,

  included() {
    this._super.included.apply(this, arguments);

    this.import('node_modules/filepond/dist/filepond.css');
    this.import('node_modules/filepond/dist/filepond.js', {
      using: [
        { transformation: 'cjs', as: 'filepond'}
      ]
    });
  }
};
