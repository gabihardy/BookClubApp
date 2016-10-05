'use strict';
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
     $("#addMemberBtn").on("click", function(E) {
         E.preventDefault();
         console.log('test');
         $('#modal1').openModal();
         var firstName = $('#firstName').val().trim();
         var lastName = $('#lastName').val().trim();
         var email = $("#email").val().trim();
         var address = $('#address').val().trim();
         var city = $('#city').val().trim();
         var state = $('#state').val().trim();
         var zip = $('#zip').val().trim();
         var phone = $('#phone').val().trim();
         var joinDate = Date.now();
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
     database.ref("/members").orderByChild("lastName").on("child_added",
         function(snapshot) {
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
             var memberTable = $("#memberTable");
             var tableRow = $("<tr>");
             tableRow.append("<td>" + firstName + " " + lastName +
                 "</td>");
             tableRow.append("<td>" + email + "</td>");
             tableRow.append("<td>" + address + "</td>");
             tableRow.append("<td>" + city + "</td>");
             tableRow.append("<td>" + state + "</td>");
             tableRow.append("<td>" + zip + "</td>");
             tableRow.append("<td>" + phone.replace(
                     /(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') +
                 "</td>");
             tableRow.append("<td>" + moment(joinDate).format(
                 "MM/DD/YY") + "</td")
             memberTable.append(tableRow);
         }, function(errorObject) {
             console.log("Errors handled: " + errorObject.code)
         });
 });