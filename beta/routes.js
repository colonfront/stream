const Layout = require('./elements/layout')

module.exports = (app) => {
  app.route('/', Layout(require('./views/main')))
  app.route('/artists', Layout(require('./views/artists')))
  app.route('/artist', Layout(require('./views/main')))
  app.route('/artist/:id', Layout(require('./views/profile')))
  app.route('/artist/:id/releases', Layout(require('./views/profile/releases')))
  app.route('/artist/:id/release/:slug', Layout(require('./views/release')))
  app.route('/u', Layout(require('./views/main')))
  app.route('/u/:id', Layout(require('./views/profile')))
  app.route('/u/:id/playlist/:slug', Layout(require('./views/playlist')))
  app.route('/u/:id/playlist/:slug/edit', Layout(require('./views/playlist/edit')))
  app.route('/u/:id/library', Layout(require('./views/library')))
  app.route('/u/:id/library/playlists', Layout(require('./views/library/playlists')))
  app.route('/u/:id/library/history', Layout(require('./views/library/history')))
  app.route('/u/:id/library/:type', Layout(require('./views/library')))
  app.route('/u/:id/membership', Layout(require('./views/profile/membership')))
  app.route('/discover', Layout(require('./views/discover')))
  app.route('/discovery', Layout(require('./views/main'))) // redirects to discover
  app.route('/releases', Layout(require('./views/releases')))
  app.route('/tracks', Layout(require('./views/tracks')))
  app.route('/labels', Layout(require('./views/labels')))
  app.route('/label', Layout(require('./views/main')))
  app.route('/label/:id', Layout(require('./views/profile')))
  app.route('/label/:id/artists', Layout(require('./views/profile/artists')))
  app.route('/label/:id/releases', Layout(require('./views/profile/releases')))
  app.route('/track', Layout(require('./views/main')))
  app.route('/track/:id', Layout(require('./views/track')))
  app.route('/login', Layout(require('./views/login')))
  app.route('/search', Layout(require('./views/search')))
  app.route('/tag', Layout(require('./views/tag')))
  app.route('/feed', Layout(require('./views/feed')))
  app.route('/settings', Layout(require('./views/settings')))
  app.route('/faq', Layout(require('./views/faq')))
  app.route('/404', Layout(require('./views/404')))
  app.route('/*', Layout(require('./views/404')))
}
