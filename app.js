$(document).ready(function() {
	var queryURLBase = "www.librarything.com/api_getdata.php";
	var authKey = "a5ed8a26fd7c4b7e97c628bb78c75299";
	var title = "";
	console.log("URL:",queryURLBase);

	$.ajax({url: queryURLBase, method: "GET"}) 
		.done(function(NYTData) {
			console.log("URL: " + queryURL);
			console.log(NYTData);
			var wellSection = $("<div>");
			wellSection.addClass('well');
			wellSection.attr('id', 'book')
			$('#wellSection').append(wellSection);

		});
});
	
	$('#runSearch').on('click', function(){
		$("#wellSection").empty();
		var title = $('#title').val().trim();
		queryURL = queryURLBase +title;
		return false;
	});	
