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
	},
	submitEnvio: function(e) {
		e.preventDefault();
		this.accordion($(e.target).closest('.accord-elem'));
	},
	accordion: function($element) {
		var stepId = $element.attr('id');
		console.log(stepId);
		
		$element.find('.accord-content').slideUp(200, function(){
			$element.removeClass('active');
		});

		if (stepId == 'envio-step-1') {
			$('#envio-step-2').find('.accord-content').slideDown(200, function(){
				$('#envio-step-2').addClass('active');
			});
		} else {
			$('#envio-step-3').find('.accord-content').slideDown(200, function(){
				$('#envio-step-3').addClass('active');
			});
		}
	}
});