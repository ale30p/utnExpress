UtnExpress.Views.Contact = Backbone.View.extend({
	events: {
		'click #submit_contact': 'submitContacForm',
		'click .close': 'closeAlert'
	},
	initialize: function() {
		//this.render();
		/*$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        	options.url = 'http://192.168.0.11:8080' + options.url;
    	});*/
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	},
	submitContacForm: function(e) {
		e.preventDefault();
		$('.loader').css('display', 'inline-block');
		var name = $('#name').val();
		var email = $('#mail').val();
		var message = $('#message').val();
		this.model.set('name', name);
		this.model.set('email', email);
		this.model.set('message', message);
		this.model.saveFunction(this.model.attributes, function(data, textStatus, jqXHR) {
			$('.loader').hide();
			$('#messageFormContainer').show();
			$('#messageForm').html(data.MESSAGE);
		});
		/*this.model.save(
			{
				wait: true,
				success: function(model, response, options){
					console.log('success');
				},
				error: function(model, xhr, options){
					console.log('erro');
				}
			}
		);*/
		$(e.target).submit();
	},
	closeAlert: function(e) {
		e.preventDefault();
		$(e.target.parentElement).hide();
	}

});
