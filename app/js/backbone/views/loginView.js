UtnExpress.Views.Login = Backbone.View.extend({
	events: {
        "click #loginButton": "login"
    },
	template: utnExpress.templates.login,	
	initialize: function() {
		this.render();
	},
	render: function(eventName) {
		$(this.$el).html(this.template({}));
	},
	login: function(e) {
        e.preventDefault(); // Don't let this button submit the form
        var url = 'http://25.2.194.178:80/gps/login';
        var formValues = "email="+$('#userName').val()+"&password="+$('#password').val();
        
        $.ajax({
            url:url,
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            data: formValues,
            success:function (data) {
            	var alertHtml = ['<div class=\"alert alert-warning alert-dismissible\" role=\"alert\">',
						'  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>',
						'  <div id=\"alert-msg\"></div>',
						'</div>'].join('\n');

                if(data.error) {  // If there is an error, show the error messages
                    $('.msg-login').html(alertHtml).show();
                    $('#alert-msg').text(data.error.text);
                }
                else { // If not, send them back to the home page
                    /*$.ajaxSetup({
						headers: {'X-CSRF-Token': data.token}
					});*/
                    window.user.set(data); 
                    window.session.set('user', window.user);                  
                    window.session.set('authenticated', true);
                    window.session.save();
                    window.location.replace('#/cliente');
                }
            }
        });
    }
});
