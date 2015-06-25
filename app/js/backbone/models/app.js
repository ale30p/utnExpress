UtnExpress.Models.App = Backbone.Model.extend({
	defaults: {
		Session: null
	},
	initialize: function () {
		this.Session = new UtnExpress.Models.Session();
	},
	start: function() {
		this.Session.getAuth(function(response) {
			var router = new UtnExpress.Routers.App();
			Backbone.history.start();
		});
	}
});