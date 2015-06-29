UtnExpress.Collection.Paquetes = Backbone.Collection.extend({
	url: 'http://localhost:80/gps/paquetes/list',
	model: UtnExpress.Models.Paquete,
	initialize: function() {
		var _this = this;
        this.fetch({
    		success: function(data){
    			var clientePaquetesView = new UtnExpress.Views.ClientePaquetes({el: $('#cliente-body'), collection: _this});
            }
        });
	}
});