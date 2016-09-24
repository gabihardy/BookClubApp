$(document).ready(function() {


	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyBWoGRlIJelSKmejkb5R9QiAZ1oZItNwVY",
	authDomain: "bookclubapp-df393.firebaseapp.com",
	databaseURL: "https://bookclubapp-df393.firebaseio.com",
	storageBucket: "bookclubapp-df393.appspot.com",
	messagingSenderId: "479342044608"
	};
	firebase.initializeApp(config);

	var database = firebase.database();

	// // Initial Values
	// var firstName = "";
	// var last_name = "";
	// var dateJoined = "";
	// var address = "";
	// var city = "";
	// var state = "";
	// var zip = 0;
	// var telephone = 0;


	$("#addMemberBtn").on("click", function(E) {
		E.preventDefault();
		console.log('test');

		firstName = $('#firstName').val().trim();
		lastName  = $('#lastName').val().trim();
		email     = $("#email").val().trim();
		address   = $('#address').val().trim();
		city      = $('#city').val().trim();
		state     = $('#state').val().trim();
		zip       = $('#zip').val().trim();
		phone     = $('#phone').val().trim();

		var joinDate = Date.now();

		database.ref().push({
			firstName: firstName,
			lastName: lastName,
			email: email,
			address: address,
			city: city,
			state: state,
			zip: zip,
			phone: phone,
			joinDate: joinDate
		});
	});

	database.ref().on("child_added", function(snapshot) {
		
		console.log(snapshot.val());
		console.log(snapshot.val().firstName);
		console.log(snapshot.val().lastName);
		console.log(snapshot.val().email);
		console.log(snapshot.val().address);
		console.log(snapshot.val().city);
		console.log(snapshot.val().state);
		console.log(snapshot.val().zip);
		console.log(snapshot.val().phone);
		console.log(snapshot.val().joinDate);
		// Change the HTML to reflect
		database.ref().orderByChild("startInput").limitToLast(1).on("child_added", function(snapshot){
			$("memberName").html(snapshot.val().memberNameInput);
			$("#joinDate").html(snapshot.val().startInput);
			$("Address").html(snapshot.val().address);
			$("#phoneDisplay").html(snapshot.val().telephone);

		}, function(errorObject){
			console.log("Errors handled: " + errorObject.code)
		});
	});



// $(document).ready(function() {
// 	var queryURLBase = "";
// 	var authKey = "a5ed8a26fd7c4b7e97c628bb78c75299";
// 	var title = "";
// 	console.log("URL:",queryURLBase);

// 	$.ajax({url: queryURLBase, method: "GET"}) 
// 		.done(function(NYTData) {
// 			console.log("URL: " + queryURL);
// 			console.log(NYTData);
// 			var wellSection = $("<div>");
// 			wellSection.addClass('well');
// 			wellSection.attr('id', 'book')
// 			$('#wellSection').append(wellSection);

// 		});
// });
	
// 	$('#runSearch').on('click', function(){
// 		$("#wellSection").empty();
// 		var title = $('#title').val().trim();
// 		queryURL = queryURLBase +title;
// 		return false;
// 	});	

});