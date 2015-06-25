UtnExpress.Views.Cliente = Backbone.View.extend({
	template: utnExpress.templates.cliente,
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	}
});


/*UtnExpress.Views.Cliente = Backbone.View.extend({
	template: utnExpress.templates.cliente,
	initialize: function() {
		google.maps.event.addDomListener(window, 'load', this.mapInitialize());
		this.render();
    },
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	},
	mapInitialize: function() {
		var mapOptions = {
          center: { 
          	lat: parseFloat(this.model.get('latitud')), 
          	lng: parseFloat(this.model.get('longitud'))
          },
          zoom: 8
        };
        var map = new google.maps.Map($('#mapSeguimiento'), mapOptions);
    }
});*/