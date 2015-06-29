UtnExpress.Routers.App = Backbone.Router.extend({
	routes : {
		'': 'index',
		'about': 'about',
		'servicios': 'servicios',
		'registro': 'registro',
		'contact': 'contact',
		'cliente': 'cliente',
		'cliente/envio': 'clienteEnvio',
		'cliente/tarifa': 'clienteTarifa',
		'cliente/paquetes': 'clientePaquetes',
		'cliente/servicios': 'clienteServicios',
		'login' : 'showLogin',
		'profile' : 'showProfile',
		'*default' : 'showHome'
	},
	index: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'sliderSection', className:'slider1'}, {at: 1});
		window.collection.sectionsCollection.add({id:'bannerSection', className:'banner-section'}, {at: 2});
		window.collection.sectionsCollection.add({id:'servicesSection', className:'services-offer-section'}, {at: 3});
		window.collection.sectionsCollection.add({id:'testimonialSection', className:'testimonial-section'}, {at: 4});
		window.collection.sectionsCollection.add({id:'aboutSection', className:'about-section'}, {at: 5});
	},

	about: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'About'}, {at: 1});
		window.collection.sectionsCollection.add({id:'about', className:'about-section'}, {at: 2});
	},

	servicios: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Servicio'}, {at: 1});
		window.collection.sectionsCollection.add({id:'servicios', className:'single-page-section'}, {at: 2});
	},

	contact: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'contactMap', className:''}, {at: 1});
		window.collection.sectionsCollection.add({id:'contact', className:'contact-section'}, {at: 2});
		var contact = new UtnExpress.Models.Contact({});
		/*contact.save(
			{
				name: 'Alejandro',
				email: 'alepereyra30@gmail.com',
				message: 'Esto es un mensaje de prueba'
			}, 
			{
				wait: true,
				success: function(model, response, options){
					alert(response);
				},
				error: function(model, xhr, options){
					alert(xhr);
				}
			}
		);*/
		var contactView = new UtnExpress.Views.Contact({el: $('#contact-form'), model: contact});
	},

	registro: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Registro'}, {at: 1});
		window.collection.sectionsCollection.add({id:'resgistroSection', className:'services-offer-section'}, {at: 2});
	},

	cliente: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Cliente'}, {at: 1});
		window.collection.sectionsCollection.add({id:'clienteSection', className:'services-page-section'}, {at: 2});
	},
	

	clienteEnvio: function() {
		var clienteEnvioView = new UtnExpress.Views.ClienteEnvio({el: $('#cliente-body')});
	},

	clientePaquetes: function() {
		var paquetesCollection = new UtnExpress.Collection.Paquetes();
	},

	clienteServicios: function() {
		var clienteServiciosView = new UtnExpress.Views.ClienteServicios({el: $('#cliente-body')});
	},

});