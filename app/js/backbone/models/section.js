UtnExpress.Models.Section = Backbone.Model.extend({
    initialize: function(attr) {
        this.set("className", attr.className);
    }
});