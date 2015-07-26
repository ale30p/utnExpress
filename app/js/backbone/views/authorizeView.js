UtnExpress.Views.Authorize = Backbone.View.extend({
	template: utnExpress.templates.authorize,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}	
});
