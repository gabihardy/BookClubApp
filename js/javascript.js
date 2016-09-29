
var queryURL = "http://openlibrary.org/search.json?q=Killing+Lincoln";

var authKey = "dc3d0abdcc52a4411782f3b4d54ab0322a816e1a";

$.ajax({url: queryURL, method: 'GET', data: {limit: 1}, dataType: "json"}).done(function(response) {
				console.log(response);
				 console.log(response.docs[0].author_name[0]);
				 console.log(response.docs[0].isbn[0]);
				console.log(response.docs[0].title);
				console.log(response.docs.cover_edition_key);
				
				$("#featuredBookCover").append("<img src=http://covers.openlibrary.org/b/isbn/" + response.docs[0].isbn[0] + "-M.jpg />");
				$("#featuredBookAuthor").after("<div>" + (response.docs[0].author_name[0]) + "</>");
				$("#featuredBookTitle").append("<div>" + (response.docs[0].title) + "</>");

});


 $(document).ready(function(){

	

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

var hostMember = database.ref("members/").limitToFirst(1);

hostMember.on('value', function(data) {

	console.log(data.val());
}, function (error) {
	console.log("error: "+error.code);
});

database.ref("/members").on("child_added", function(snapshot) {

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
		var name = firstName + lastName;

        var memberTable = $("#memberTable");
		var tableRow = $("<tr>");

		tableRow.append("<td>" + moment().endOf('month').startOf('isoweek').format("MM/DD/YY") + "</td");
		tableRow.append("<td>" + name  + "</td>");
		tableRow.append("<td>" + phone.replace(/(\d{3})(\d{3})(\d{4})/,'$1-$2-$3') + "</td>");
		// tableRow.append("<td>" + bookTitle + "</td>");
		// tableRow.append("<td>" + bookAuthor + "</td>");
		// tableRow.append("<td>" + numPages + "</td>")				
		memberTable.append(tableRow);


}, function(errorObject){
	console.log("Error handled: " + errorObject.code)


		
	});
$("#memberTable").on("click", function (){
	console.log(event);
	// $("#memberName").append(name);
$(document).ready(function() {
    Materialize.updateTextFields(snapshot.val().name);
  });




});


});


        
	


