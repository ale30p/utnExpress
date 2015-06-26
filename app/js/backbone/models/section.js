UtnExpress.Models.Section = Backbone.Model.extend({
    initialize: function(attr) {
        this.set("className", attr.className);
        if (attr.titulo) {
        	this.set("titulo", attr.titulo);
        }
    }
});