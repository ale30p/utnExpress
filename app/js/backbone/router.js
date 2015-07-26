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
		'seguimiento/:codigo': 'seguimiento',
	},
	initialize: function() {
		window.session = new UtnExpress.Models.Session();
		window.user = new UtnExpress.Models.Usuario();
		if (window.session.getAuthStatus()) {
			window.user.set(window.session.get('user'));
		}		
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
		var contactView = new UtnExpress.Views.Contact({el: $('#contact-form'), model: contact});
	},

	registro: function() {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Registro'}, {at: 1});
		window.collection.sectionsCollection.add({id:'resgistroSection', className:'services-offer-section'}, {at: 2});
		if (!window.session.getAuthStatus()) {
			var authorizeView = new UtnExpress.Views.Authorize({el:$('#authorize')});
		}
		/*if (!window.user.get('token')) {
			var authorizeView = new UtnExpress.Views.Authorize({el:$('#authorize')});
		}*/
		var loginView = new UtnExpress.Views.Login({el: $('#login')});
	},

	cliente: function() {
		if (window.session.getAuthStatus()) {
			window.collection.sectionsCollection._deleteSection();
			window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Cliente'}, {at: 1});
			window.collection.sectionsCollection.add({id:'clienteSection', className:'services-page-section'}, {at: 2});
		} else {
			window.location.replace('#registro');
		}
		/*if (window.user.get('token')) {
			window.collection.sectionsCollection._deleteSection();
			window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Cliente'}, {at: 1});
			window.collection.sectionsCollection.add({id:'clienteSection', className:'services-page-section'}, {at: 2});
		} else {
			window.location.replace('#registro');
		}*/
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

	seguimiento: function(codigo) {
		window.collection.sectionsCollection._deleteSection();
		window.collection.sectionsCollection.add({id:'pageBannerSection', className:'page-banner-section', titulo: 'Seguimiento'}, {at: 1});
		window.collection.sectionsCollection.add({id:'seguimientoSection', className:'services-page-section'}, {at: 2});
		var paquete = new UtnExpress.Models.Paquete({codigo:codigo});
		paquete.fetch({
    		success: function(){
	            var clientePaqueteView = new UtnExpress.Views.ClientePaquete({el: $('#paquetesDetalles'), model: paquete});
    	    }
        });
	},
});