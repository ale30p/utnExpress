UtnExpress.Views.ClienteServicio = Backbone.View.extend({
	template: utnExpress.templates.clienteServicio,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}
});