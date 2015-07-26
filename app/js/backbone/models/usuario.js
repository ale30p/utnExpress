UtnExpress.Models.Usuario = Backbone.Model.extend({
	defaults: {
        firstName: null,
        lastName: null,
        email: null,
    },
    initialize: function () {
        console.log("initialize user");
    }
});