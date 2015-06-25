UtnExpress.Views.ClientePaquetes = Backbone.View.extend({
	template: utnExpress.templates.clientePaquetes,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}
});