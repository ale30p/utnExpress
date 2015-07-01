UtnExpress.Views.ClientePaquetes = Backbone.View.extend({
	events: {
		'click .showDetalle': 'showDetalle'
	},
	template: utnExpress.templates.clientePaquetes,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({'paquetes':this.collection.toJSON()}));
	},
	showDetalle: function(e) {
		e.preventDefault();
		var paquete = this.collection.get($(e.target).data('codigo'));
		var clientePaqueteView = new UtnExpress.Views.ClientePaquete({el: $('#paquetesDetalles'), model: paquete});
	}
});