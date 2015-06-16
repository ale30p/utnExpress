UtnExpress.Views.Seguimiento = Backbone.View.extend({
	template: utnExpress.templates.seguimiento,
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
});