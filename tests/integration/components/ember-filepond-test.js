import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-filepond', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{ember-filepond}}`);

    // NOTE: wait until FilePond has completely rendered
    await waitUntil(() => this.element.querySelector('label').textContent.length);

    assert.dom('.filepond--root').exists({ count: 1 }, 'filepond upload component has been successfully rendered');
    assert.dom('label').includesText('Drag & Drop your files or Browse', 'default filepond instruction text');
  });
});
