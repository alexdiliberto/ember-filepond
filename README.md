ember-filepond
==============================================================================

A handy [FilePond](https://pqina.nl/filepond/) adapter component for Ember


Installation
------------------------------------------------------------------------------

```
ember install ember-filepond
```


Documentation
------------------------------------------------------------------------------

https://alexdiliberto.com/ember-filepond


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-filepond`
* `yarn install`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Release

Ready to draft a new release:

```sh
npm version [major | minor | patch]
git push
# Draft release on Github
# Validate passing tests on Travis 
npm publish
```

### Deploy

Deploys are automated using Travis CI. If you need to manually deploy, run the following command:

```sh
ember deploy production
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
