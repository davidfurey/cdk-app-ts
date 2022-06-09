const { cdk } = require('projen');

const project = new cdk.JsiiProject({
  defaultReleaseBranch: 'main',
  name: '@guardian/cdk-app-ts',
  packageName: '@guardian/cdk-app-ts',
  description: 'projen starter for @guardian/cdk projects.',
  author: 'nicolas.long@theguardian.com',
  repositoryUrl: 'https://github.com/guardian/cdk-app-ts/',

  npmDistTag: 'latest',

  github: false,

  deps: [
    'projen',
    'aws-cdk-lib@2.25.0',
    'constructs@10.1.17',
  ],

  peerDeps: [
    'projen',
  ],

  bundledDeps: [
    'aws-cdk@2.25.0',
    '@guardian/cdk@45.0.0',
    '@guardian/prettier@^1.0.0',
  ],
});

project.addGitIgnore('tmp/'); // Used in integration test.

project.synth();