UtnExpress.Models.Paquete = Backbone.Model.extend({
	urlRoot: 'http://localhost:80/gps/paquetes',
    initialize: function (attr) {
        var _this = this;
        this.fetch();
    },
    
});