UtnExpress.Models.Paquete = Backbone.Model.extend({
	urlRoot: window.urlRoot + 'paquetes',
	idAttribute: 'codigo',
	initialize: function (attr) {
        this.fetch();
    },
});