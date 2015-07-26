UtnExpress.Models.Session = Backbone.Model.extend({
    url: function () {
      return 'Backbone.Session';
    },
    initialize: function (properties, options) {
      this.options = options || {};
      this.fetch();
    },
    destroy: function (options) {
      return this.sync('delete', this, options);
    },
    sync: function (method, model, options) {
      options = options || {};
      var url = model.options.url || model.url;
      var key = _.isFunction(url) ? url() : '' + url;
      var response;
      switch (method) {
      case 'create':
      case 'update':
        var data = model.toJSON();
        var text = JSON.stringify(data);
        response = sessionStorage.setItem(key, text);
        break;
      case 'delete':
        response = sessionStorage.removeItem(key);
        break;
      case 'read':
        response = JSON.parse(sessionStorage.getItem(key));
        break;
      }
      if (_.isFunction(options.success)) {
        options.success(response);
      }
      return Promise.resolve(response);
    },
    signIn: function (options) {
      return Promise.reject(Error(
        'Override the signIn method'
      ));
    },
    signOut: function (options) {
      options = options || {};
      this.destroy();
      this.clear();
      this.trigger('signOut');
      return Promise.resolve();
    },
    getAuthStatus: function (options) {
      return this.get('authenticated');
    },
    Model: Backbone.Model,
    Collection: Backbone.Collection
});