UtnExpress.Views.EnvioStep = Backbone.View.extend({
	initialize: function(options) {
		this.template = options.template;
		this.model = options.model || {id:1};
		this.render();
	},
	render: function() {
		$(this.$el).find('.accord-title').after('');
		data = {};
		if (this.collection) {
			data = {
				remitente: this.collection.at(0).toJSON(),
				destinatario: this.collection.at(1).toJSON()
			};
		}		
		console.log(data);
		$(this.$el).find('.accord-title').after(this.template(data));
	}
});