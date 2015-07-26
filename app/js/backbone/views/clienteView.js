UtnExpress.Views.Cliente = Backbone.View.extend({
	template: utnExpress.templates.cliente,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		var user = {
			user: window.user.toJSON()
		};
		$(this.$el).html(this.template(user));
	}	
});

