UtnExpress.Views.ClientePaquete = Backbone.View.extend({
	template: utnExpress.templates.clientePaquete,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}
});