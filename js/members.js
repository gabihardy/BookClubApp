'use strict';
$(document).ready(function() {


	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCAjceUADSO_PUY429xNxmex4o5lsJ-CGk",
    authDomain: "mybook-b4147.firebaseapp.com",
    databaseURL: "https://mybook-b4147.firebaseio.com",
    storageBucket: "mybook-b4147.appspot.com",
    messagingSenderId: "688020515173"
  };
  firebase.initializeApp(config);

	var database = firebase.database();

	// // Initial Values
	var nextRotation = moment().endOf('month').startOf('isoweek').format("MM/DD/YY");




	$("#addMemberBtn").on("click", function(E) {
		E.preventDefault();
		console.log('test');
		 $('#modal1').openModal();

		var firstName = $('#firstName').val().trim();
		var lastName  = $('#lastName').val().trim();
		var email     = $("#email").val().trim();
		var address   = $('#address').val().trim();
		var city      = $('#city').val().trim();
		var state     = $('#state').val().trim();
		var zip       = $('#zip').val().trim();
		var phone     = $('#phone').val().trim();
		var joinDate = Date.now();
		var memberTurn = nextRotation

		database.ref("/members").push({
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

	database.ref("/members").orderByChild("lastName").on("child_added", function(snapshot) {

		console.log(snapshot.val());
		var firstName = snapshot.val().firstName;
		var lastName = snapshot.val().lastName;
		var email = snapshot.val().email;
		var address = snapshot.val().address;
		var city = snapshot.val().city;
		var state = snapshot.val().state;
		var zip = snapshot.val().zip;
		var phone = snapshot.val().phone;
		var joinDate = snapshot.val().joinDate;

		// lastName.sort();

		var memberTable = $("#memberTable");
		var tableRow = $("<tr>");
		
		tableRow.append("<td>" + firstName + " " + lastName +"</td>");
		tableRow.append("<td>" + email + "</td>");
		tableRow.append("<td>" + address +"</td>");
		tableRow.append("<td>" + city + "</td>");
		tableRow.append("<td>" + state + "</td>");
		tableRow.append("<td>" + zip + "</td>");
		tableRow.append("<td>" + phone.replace(/(\d{3})(\d{3})(\d{4})/,'$1-$2-$3') + "</td>");
		tableRow.append("<td>" + moment(joinDate).format("MM/DD/YY") + "</td")
		memberTable.append(tableRow);
		// Change the HTML to reflect
		// database.ref().orderByChild("startInput").limitToLast(1).on("child_added", function(snapshot){
			//  $("#first").html(snapshot.val().firstName);
			// // $("#last").html(snapshot.val().lastName);
			// $("#emailDisplay").html(snapshot.val().email);
			// $("#addressDisplay").html(snapshot.val().address);
			// $("#cityDisplay").html(snapshot.val().city);
			// $("#stateDisplay").html(snapshot.val().state);
			// $("#zipDisplay").html(snapshot.val().zip);
			// $("#phoneDisplay").html(snapshot.val().telephone);
			// $("#memberSince").html(snapshot.val().joinDate);




		}, function(errorObject){
			console.log("Errors handled: " + errorObject.code)
		});
	// });



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