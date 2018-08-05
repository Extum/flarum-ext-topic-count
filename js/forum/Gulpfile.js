var gulp = require('flarum-gulp');

gulp({
  modules: {
    'extum/flarum-ext-topic-count': [
      'src/**/*.js',
    ]
  }
});
