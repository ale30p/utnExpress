UtnExpress.Collection.Paquetes = Backbone.Collection.extend({
	//url: window.urlRoot + 'paquetes/list',
	url: window.urlRoot + 'paquetes',
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