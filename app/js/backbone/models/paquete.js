UtnExpress.Models.Paquete = Backbone.Model.extend({
	//urlRoot: 'http://utnexpressapi.16mb.com/vehiculo',
    url: 'http://localhost:80/gps/vehiculo',
    idAttribute: 'patente',
    default: {
        id: '',
        patente: '',
        latitud: '',
        longitud: '',
        estado: ''
    },
    initialize: function (attr) {
        var _this = this;
        _.extend(this, Backbone.Events);
        this.on('alert', function(msg){
            console.log(msg);
        });
        this.trigger('alert', this.url());

        this.fetch({
            success: function(data) {
                var seguimientoView = new UtnExpress.Views.Seguimiento({el:$('#mapSeguimiento'), model: data});
            }
        });
    }	
});