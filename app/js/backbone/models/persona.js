UtnExpress.Models.Persona = Backbone.Model.extend({
	url: function() {
		return 'http://10.42.0.81:8080/DACS-API/rest/personas/nueva';
	},
	initialize: function(attr) {
		console.log('se creo una persona');
	},
	saveFunction: function(data, callback) {
        $.ajax({
            type: 'POST',
            url: this.url(),
            dataType: 'json',
            crossDomain: true,
            data: data
        }).done(function(data, textStatus, jqXHR) {
            callback(data, textStatus, jqXHR);
        }); 
    }
});