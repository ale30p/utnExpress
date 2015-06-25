UtnExpress.Models.Section = Backbone.Model.extend({
    defaults: {
    	entity: {}
    },
    initialize: function(attr) {
        this.set("className", attr.className);
    }
});