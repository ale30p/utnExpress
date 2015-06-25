UtnExpress.Views.ClienteServicios = Backbone.View.extend({
	template: utnExpress.templates.clienteServicios,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}
});