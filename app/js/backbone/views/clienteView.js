UtnExpress.Views.Cliente = Backbone.View.extend({
	template: utnExpress.templates.cliente,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}	
});

