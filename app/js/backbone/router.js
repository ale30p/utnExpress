UtnExpress.Routers.App = Backbone.Router.extend({
	routes: {
		'': 'index',
		'registro': 'registro'
	},
	index: function() {
		this.deleteSection();
		window.collection.sectionsCollection.add({id:'sliderSection', className:'slider1'}, {at: 1});
		window.collection.sectionsCollection.add({id:'bannerSection', className:'banner-section'}, {at: 2});
		window.collection.sectionsCollection.add({id:'servicesSection', className:'services-offer-section'}, {at: 3});
		window.collection.sectionsCollection.add({id:'testimonialSection', className:'testimonial-section'}, {at: 4});
		window.collection.sectionsCollection.add({id:'aboutSection', className:'about-section'}, {at: 5});
	},
	registro: function() {
		this.deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section'}, {at: 1});
		window.collection.sectionsCollection.add({id:'resgistroSection', className:'services-offer-section'}, {at: 2});
	},
	deleteSection: function() {
		var auxArray = [];
		var count = window.collection.sectionsCollection.length - 1;
		for (i = 1; i < count; i++) {
			auxArray.push(window.collection.sectionsCollection.at(i).id);
		}
		_.each(auxArray, function(idaux) {
			window.collection.sectionsCollection.remove(window.collection.sectionsCollection.get(idaux));
		});
	}
});