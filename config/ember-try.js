module.exports = {
  scenarios: [
    {
      name: 'Ember 1.12',
      dependencies: {
        'ember': '1.12.1'
      }
    },
    {
      name: 'Ember 1.13',
      dependencies: {
        'ember': '1.13.2'
      }
    },
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
