UtnExpress.Views.ClienteEnvio = Backbone.View.extend({
	template: utnExpress.templates.clienteEnvio,
	events: {
		'click .btn-continuar': 'submitEnvio',
	},
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
		$('#envio-step-1').find('.accord-title').after(utnExpress.templates.envioStep1({}));
	},
	submitEnvio: function(e) {
		e.preventDefault();
		
		var datosRemitente = JSON.parse(JSON.stringify($('#form-remitente').serializeObject()));
		var remitente = new UtnExpress.Models.Persona(datosRemitente);

		var datosDestinatario = JSON.parse(JSON.stringify($('#form-destinatario').serializeObject()));
		var destinatario = new UtnExpress.Models.Persona(datosDestinatario);
		
		window.collection.personasCollection = new UtnExpress.Collection.Persona([remitente, destinatario]);

		this.accordion($(e.target).closest('.accord-elem'));
	},
	accordion: function($element) {
		var stepId = $element.attr('id');
				
		$element.find('.accord-content').slideUp(200, function(){
			$element.removeClass('active');
		});

		if (stepId == 'envio-step-1') {
			var envioStep2 = new UtnExpress.Views.EnvioStep({
				el:$('#envio-step-2'), 
				template: utnExpress.templates.envioStep2,
			});
			$('#envio-step-2').addClass('active');
		} else {
			if (stepId == 'envio-step-2') {
				var envioStep3 = new UtnExpress.Views.EnvioStep({
					el:$('#envio-step-3'), 
					template: utnExpress.templates.envioStep3,
					collection: window.collection.personasCollection
				});
				$('#envio-step-3').addClass('active');
			} else {
				var envioStep4 = new UtnExpress.Views.EnvioStep({
					el:$('#envio-step-4'), 
					template: utnExpress.templates.envioStep4,
				});
				$('#envio-step-4').addClass('active');
			}
			
		}
		$('html, body').animate({ scrollTop: $('.accordion-box').offset().top  - 200});
	},
});