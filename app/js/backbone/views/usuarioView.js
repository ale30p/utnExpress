UtnExpress.Views.Usuario = Backbone.View.extend({
    urlRoot : '/users',
    defaults : {
        'firstName' : null,
        'lastName' : null
    },
    getFullName : function(){
        return this.get('firstName') + ' ' + this.get('lastName');
    },
});