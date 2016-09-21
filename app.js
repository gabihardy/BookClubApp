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

// Initial Values
var memberNameInput = "";
var startInput = "";
var telephoneInput = 0;
var bookInput = "";

$("#addMemberBtn").on("click", function() {
	console.log('test');
	memberNameInput = $('#memberNameInput').val().trim();
	startInput = $('#startInput').val().trim();
	telephoneInput = $('#telephoneInput').val().trim();
	bookInput = $('#bookInput').val().trim();

	database.ref().push({
		name: memberNameInput,
		joined: startInput,
		phone: telephoneInput,
		favorite: bookInput
	})
	
	return false;
});
database.ref().on("child_added", function(snapshot) {
	
	console.log(snapshot.val());
	console.log(snapshot.val().name);
	console.log(snapshot.val().joined);
	console.log(snapshot.val().phone);
	console.log(snapshot.val().favorite);
	// Change the HTML to reflect
dataRef.ref().orderByChild("startInput").limitToLast(1).on("child_added", function(snapshot){
	$("#nameDisplay").html(snapshot.val().memberNameInput);
	$("#joinDisplay").html(snapshot.val().startInput);
	$("#phoneDisplay").html(snapshot.val().telephoneInput);
	$("#favoriteDisplay").html(snapshot.val().bookInput);

}, function(errorObject){
	console.log("Errors handled: " + errorObject.code)
})



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
