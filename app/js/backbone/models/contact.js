UtnExpress.Models.Contact = Backbone.Model.extend({
	url: function() {
		return window.urlRoot +'contact/add/' + this.get('name')+'/'+this.get('email')+'/'+this.get('message');
    },
	initialize: function(attr) {
		this.set('name', attr.name);
		this.set('email', attr.email);
		this.set('message', attr.message);
	},
	saveFunction: function(attributes, callback) {
        $.ajax({
            type: 'POST',
            url: this.url(),
            dataType: 'json',
            crossDomain: true,
            data: attributes
        }).done(function(data, textStatus, jqXHR) {
            callback(data, textStatus, jqXHR);
        }); 
    }
});