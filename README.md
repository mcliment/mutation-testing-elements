# Mutation testing elements

Welcome to the mutation testing elements mono repo.

It is a [lernajs](https://lernajs.io/) mono repository. Please see the [packages](https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages)
directory to navigate to a sub package. 

## Versioning

The `mutation-testing-report-schema` and `mutation-testing-elements` versions will be kept in sync. 

The schema wil only have major and minor releases, as patch releases don't make sense. Backward compatible changes mean a minor version update, breaking changes will mean a major release.

The mutation-testing-elements major and minor version will be in sync with the schema, however it _can have_ patch releases for changes of the elements without a schema update.

Note that this is not strict semver 2.0.0. See https://github.com/stryker-mutator/mutation-testing-elements/issues/5 for the reasoning behind it.

An example (just for clarification, versions are not based on reality):

| Schema version | Supported mutation-testing-elements implementations |
| ------------- | ------------- |
| `1.0`  | `1.0.0`, `1.0.1` |
| `1.1` | `1.0.0`, `1.0.1`, `1.1.0`, `1.1.1` |
| `2.0` | `2.0.0`, `2.0.1` |

## Releasing

Releasing is done with from the travis build server. Perform the following steps:

* Clone the repo and run `npm install`.
* Run `npm run lerna:version:patch`, `npm run lerna:version:minor` or `npm run lerna:version:major` (based on the release you want). Lerna will figure out which packages need to be released and prompt if it is OK.
* After the new tag is pushed to the master branch, it should be released via travis.