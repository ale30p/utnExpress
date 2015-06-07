UtnExpress.Models.Paquete = Backbone.Model.extend({
	initialize: function () {
        console.log('Paquete has been initialized');
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error);
        });
    },
    constructor: function (attributes, options) {
        console.log('Paquete\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        if (!attr.codigo) {
            return "Invalid PaqueteName supplied.";
        }
    },	

	//urlRoot: 'http://localhost:80/gps/vehiculo/AAA002'
    urlRoot: 'http://utnexpressapi.16mb.com/vehiculo/AAA001'

});