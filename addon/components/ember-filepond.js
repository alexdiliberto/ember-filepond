import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import { assert } from '@ember/debug';
import { getProperties, set } from '@ember/object';
import { assign } from '@ember/polyfills';
import Filepond from 'filepond';

export default Component.extend({
  tagName: 'input',
  type: 'file',

  classNames: ['filepond'],
  attributeBindings: ['type', 'name'],

  pond: null, // Filepond Instance

  init() {
    this._super(...arguments);

    if (!Filepond.supported()) {
      // NOTE: The use is not running a Filepond supported browser
      return;
    }

    scheduleOnce('afterRender', this, function() {
      this._registerPlugins();

      let options = this._initializeOptions();

      let pond = Filepond.create(
        this.element,
        options
      );

      set(this, 'pond', pond);
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);

    if (!this._pond) {
      return;
    }
  },

  willDestroyElement() {
    if (!this.pond) {
      return;
    }

    this.pond.destroy();

    this._super(...arguments);
  },

  _registerPlugins() {
    if (this.plugins) {
      assert(`[ember-filepond] ${this.toString()} requires a \`plugins\` Array or Function`, Array.isArray(this.plugins) || typeof this.plugins === 'function');

      let plugins = Array.isArray(this.plugins) ? this.plugins : [this.plugins];
      Filepond.registerPlugin(
        ...plugins
      );
    }
  },

  _initializeOptions() {
    // eslint-disable-next-line ember/no-attrs-in-components
    let options = getProperties(this, Object.keys(this.attrs));

    return assign(options, {
      // Additional options go here...
    });
  }
});
