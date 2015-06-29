UtnExpress.Views.ClientePaquete = Backbone.View.extend({
    template: utnExpress.templates.clientePaquete,
    initialize: function() {
        this.render();
        this.map();
    },
    render: function(eventName) {
        $(this.$el).html(this.template(this.model.toJSON()));
    },
    map: function() {
    	var vehiculo = this.model.get('vehiculo'); 
    	var latitud = parseFloat(vehiculo.latitud);
    	var longitud = parseFloat(vehiculo.longitud);
    	var cordenadas = [latitud, longitud];
    	console.log(latitud);
    	console.log(longitud);
        $("#googleMap").width("100%").height("350px").gmap3({
             map:{
                options: {
                    center: cordenadas,
                    zoom: 15
                }
            },
            marker: {
                latLng: cordenadas,
                options: {
			    icon: new google.maps.MarkerImage(
			       "../../../images/pinExpress.png",
			       new google.maps.Size(37, 37, "px", "px")
			     )
			    }
            }
        });
    }
});