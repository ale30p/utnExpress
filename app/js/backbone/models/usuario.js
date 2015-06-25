UtnExpress.Models.Usuario = Backbone.Model.extend({
	urlRoot: '/usuario',
	defaults: {
        userName: null,
        pwd: null
    },
    initialize: function () {
        console.log("initialize client");
    }
});