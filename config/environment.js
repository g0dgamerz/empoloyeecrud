'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'employee',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV['ember-simple-auth-token'] = {
    //   serverTokenEndpoint: 'https://localhost:7108/api/token', // Server endpoint to send authenticate request
    //   tokenPropertyName: 'tokenData', // Key in server response that contains the access token
    //   headers: {}, // Headers to add to the authenticate request
    //   authorizationHeaderName: 'Authorization', // Header name added to each API request
    //   authorizationPrefix: 'Bearer ', // Prefix added to each API request
    //   refreshAccessTokens: false,
    //   tokenExpirationInvalidateSession: false,
    // };
    // ENV['ember-simple-auth-token'] = {
    //   refreshAccessToken: true,
    //   refreshLeeway: 300, // refresh 5 minutes (300 seconds) before expiration
    // };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
