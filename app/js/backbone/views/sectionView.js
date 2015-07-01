UtnExpress.Views.Section = Backbone.View.extend({
	events: {
        'click .side-navigation-list': 'activeItemSideNav',
        'click #consultarEnvio': 'consultarEnvio',
    },
    initialize: function() {
		this.listenTo(this.collection, 'add', this.addOne);
		this.listenTo(this.collection, 'remove', this.removeOne);
	},
	render: function(eventName) {
		this.collection.forEach(this.addOne, this);
	},
	addOne: function (model) {
        var el = $(this.$el);
        
        var index = this.collection.indexOf(model);
        var modelAbove = this.collection.at(index-1);
        var html = utnExpress.templates[model.id](model.toJSON());
        switch(model.id) {
		    case 'header':
		    	el.append('<header id="'+model.id+'" class="'+ model.get('className') +'">'+html+'</header>');	
		        break;
		    case 'footer':
		    	el.append('<footer id="'+model.id+'" class="'+ model.get('className') +'">'+html+'</footer>');	
		        break;
		    case 'sliderSection':
		    	$('#' + modelAbove.id).after('<section id="'+model.id+'" class="'+ model.get('className') +'">'+html+'</section>');
		    	$('.tp-banner').show().revolution(this.getOptionSlider());
		    	break;
		    case 'testimonialSection':
		    	$('#' + modelAbove.id).after('<section id="'+model.id+'" class="'+ model.get('className') +'">'+html+'</section>');
		    	$('.bxslider').bxSlider({mode: 'vertical'});
		    	break;
            case 'clienteSection' :
                $('#' + modelAbove.id).after('<section id="'+model.id+'" class="'+ model.get('className') +'">'+html+'</section>');
                var clienteView = new UtnExpress.Views.Cliente({el: $('#cliente-body')});
                break;
		    default:
                $('#' + modelAbove.id).after('<section id="'+model.id+'" class="'+ model.get('className') +'">'+html+'</section>');
		} 
    },
    removeOne: function(model) {
    	$('#'+model.id).remove();
    }, 
    getOptionSlider: function() {
    	options = {
    		dottedOverlay:"none",
            delay:10000,
            startwidth:1140,
            startheight:700,
            hideThumbs:200,            
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,            
            navigationType:"bullet",
            navigationArrows:"none",            
            touchenabled:"on",
            onHoverStop:"off",            
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,                                    
            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[7,4,3,2,5,4,3,2,1,0],                                    
            keyboardNavigation:"off",
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:40,
            shadow:0,
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",                       
            forceFullWidth:"off",                       
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,                      
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            fullScreenOffsetContainer: ".header" 
    	};
    	return options;
    },
    activeItemSideNav: function(e) {
        e.preventDefault();
        $.each($(e.target.parentElement.children), function() {
          $(this).removeClass('active');
        });
        $('#paquetesDetalles').html('');
        $(e.target).addClass('active');
        window.location.href = ($(e.target).attr('href'));
    },
    consultarEnvio: function(e) {
        e.preventDefault();
        var url = $(e.target).attr('href') + '/' + $(e.target.parentElement).find('#codigoConsulta').val();
        window.location.href = url;
    }
});