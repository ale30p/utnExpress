UtnExpress.Collection.Sections = Backbone.Collection.extend({
	model: UtnExpress.Models.Section,
	_deleteSection: function() {
		var _this = this;
		var auxArray = [];
		var count = _this.length - 1;
		for (i = 1; i < count; i++) {
			auxArray.push(_this.at(i).id);
		}
		_.each(auxArray, function(idaux) {
			_this.remove(_this.get(idaux));
		});
	}
});