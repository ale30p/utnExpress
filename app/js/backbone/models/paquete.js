UtnExpress.Models.Paquete = Backbone.Model.extend({
	urlRoot: 'http://localhost:80/gps/paquetes',
	idAttribute: 'codigo',
	initialize: function (attr) {
        this.fetch();
    },
});