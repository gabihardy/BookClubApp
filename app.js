$(document).ready(function() {
	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
	var authKey = "a5ed8a26fd7c4b7e97c628bb78c75299";
	console.log("URL:",queryURLBase);
	
	$('#runSearch').on('click', function(){
		var searchTerm = $('#searchTerm').val().trim();
		queryURL = queryURLBase + searchTerm;
	});

});