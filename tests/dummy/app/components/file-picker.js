import Component from '@ember/component';
import layout from '../templates/components/file-picker';

export default Component.extend({
  layout,

  labelIdle: 'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>',

  oninit() { /* empty */ }
});
