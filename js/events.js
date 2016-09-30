// function bookSearch(){
// 	var search = document.getElementById('search').value
// 	document.getElementById('results').innerHtml = ""
// 	console.log(search)
// var search = [''];

var queryURL = "http://openlibrary.org/search.json?q=atlas+shrugged";

var authKey = "dc3d0abdcc52a4411782f3b4d54ab0322a816e1a";
var secretKey = " jh1KSvaHYeYqMwHF9PyBVs6tdeZN9TSBcjmLlo4Pqs";


$.ajax({url: queryURL, method: 'GET', data: {limit: 1}, dataType: "json"}).done(function(response) {
				console.log(response);
				 console.log(response.docs[0].author_name[0]);
				 console.log(response.docs[0].isbn[0]);
				console.log(response.docs[0].title);
				console.log(response.docs.cover_edition_key);
				
				 $("#featureBookCover").append("<img src=http://covers.openlibrary.org/b/isbn/" + response.docs[0].isbn[0] + "-M.jpg />");
				 $("#featureBookDetails").append("<div>" + (response.docs[0].author_name[0]) + "</>");
				 $("#featureBookDetails").append("<div>" + (response.docs[0].title) + "</>");

});
// }
// document.getElementById('button').addEventListener('click', bookSearch, false)

// function bookSearch(){
// 	var search = document.getElementById('search').value
// 	document.getElementById('results').innerHtml = ""
// 	console.log(search)

// 	$.ajax({
// 		url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "?key=AIzaSyBajxwezYukUT4PexHvKSrWWjres4HNM-o",
// 		dataType: "json",
// 		success: function(data){
// 			console.log(data)
// 		},
// 		type: 'GET'
// 	});
// }

// document.getElementById('button').addEventListener('click', bookSearch, false)


// <script>
//   (function() {
//     var cx = '003330557649694353947:vxfnbsaafp8';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);
//   })();
// </script>
// <gcse:search></gcse:search>



// $(document).ready(function() {
	
// 	console.log("URL:",queryURLBase);
	
// 	$('#runSearch').on('click', function(){
// 		var searchTerm = $('#searchTerm').val().trim();
// 		queryURL = queryURLBase + searchTerm;
// 	});

// });


  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAc4Aqr3pI5k-bOohz3pXrNflbkGoCKAu4",
//     authDomain: "wilkiesfirst.firebaseapp.com",
//     databaseURL: "https://wilkiesfirst.firebaseio.com",
//     storageBucket: "wilkiesfirst.appspot.com",
    
//   };

// firebase.initializeApp(config);

// var database = firebase.database();


// 2. Button for adding Employees
$("#addMemberBtn").on("click", function(){

// 	// Grabs user input
	var memName = $("#memberName").val().trim();
	// var memDateJoined = moment($("#memberDateJoined").val().trim(), "DD/MM/YY").format("X");
	// var memAddress = $("#memberaddress").val().trim();
	// var memTelephone = $("#membertelephone").val().trim();

// 	// Creates local "temporary" object for holding employee data
	var newMember = {
		name:  memName
		// dateJoin: memDateJoined,
		// address: memAddress,
		// phone: memTelephone
	}

// 	// Uploads employee data to the database
	database.ref().push(newMember);

// 	// Logs everything to console
	console.log(newMember.name);
	// console.log(newMember.dateJoin);
	// console.log(newMember.address);
	// console.log(newMember.phone)

// 	// Alert
// 	alert("Employee successfully added");

// 	// Clears all of the text-boxes


	// $("#memberName").val("");
	// $("#memberDateJoined").val("");
	// $("#memberaddress").val("");
	// $("#membertelephone").val("");

// 	// Prevents moving to new page
	return false;
});


// // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

// // 	// Store everything into a variable.
	var memName = childSnapshot.val().name;
// 	var memDateJoined = childSnapshot.val().dateJoin;
// 	var memAddress = childSnapshot.val().address;
// 	var memTelephone = childSnapshot.val().phone;

// // 	// Member Info
	console.log(memName);
// 	console.log(memDateJoined);
// 	console.log(memAddress);
// 	console.log(memTelephone);

// // 	// Prettify the employee start
// // 	var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
// // 	// Calculate the months worked using hardconre math
// // 	// To calculate the months worked
// // 	var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
// // 	console.log(empMonths);

// // 	// Calculate the total billed rate
// // 	var empBilled = empMonths * empRate;
// // 	console.log(empBilled);

// // 	// Add each train's data into the table
	$("#newMemName > tbody").append("<tr><td>" + memName + "</td></tr>");

});
