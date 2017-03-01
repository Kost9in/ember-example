import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('users');
  this.route('userProfile', { path: '/users/:userId' });
  this.route('todos');
  this.route('photos');
  this.route('posts');
});

export default Router;
