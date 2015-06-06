(function() {

	console.log('main.js loaded');

	// Now let us try to retrieve a book [READ]
	var paquete = new UtnExpress.Models.Paquete({ codigo: 'AAA002' });
	paquete.fetch({
	    success: function (paqueteResponse) {
	        console.log("Found the paquete: " + paqueteResponse);
	    }
	});
})();
