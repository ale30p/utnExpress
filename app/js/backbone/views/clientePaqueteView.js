UtnExpress.Views.ClientePaquete = Backbone.View.extend({
    template: utnExpress.templates.clientePaquete,
    initialize: function() {
        this.getVehiculo();
        this.render();
    },
    render: function(eventName) {
        $(this.$el).html(this.template(this.model.toJSON()));
    },
    getVehiculo: function() {
        var patente = this.model.get('vehiculo').patente;
        var vehiculo =  new UtnExpress.Models.Vehiculo({patente: patente});
        var map =  _.bind(this.map, this);
        vehiculo.fetch({
            success: function(model, response, options) {
                var latitud = parseFloat(model.get('latitud'));
                var longitud = parseFloat(model.get('longitud'));
                var cordenadas = [latitud, longitud];
                map(cordenadas);
            }
        });
    },
    map: function(cordenadas) {
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