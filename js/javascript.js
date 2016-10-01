 $(document).ready(function() {
    $('#form').hide();

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

    database.ref("/members").orderByChild("joinDate").on("child_added", function(snapshot) {

        // console.log(snapshot.val());
        var firstName = snapshot.val().firstName;
        var lastName = snapshot.val().lastName;
        var email = snapshot.val().email;
        var address = snapshot.val().address;
        var city = snapshot.val().city;
        var state = snapshot.val().state;
        var zip = snapshot.val().zip;
        var phone = snapshot.val().phone;
        var joinDate = snapshot.val().joinDate;
        var book = snapshot.val().book;

        
        var memberTable = $("#memberTable");
        var tableRow = $("<tr>");
        tableRow.append("<td>" + moment(joinDate).format("MM/DD/YY") + "</td")
        tableRow.append("<td>" + firstName + " " + lastName +"</td>");
        tableRow.append("<td>" + phone.replace(/(\d{3})(\d{3})(\d{4})/,'$1-$2-$3') + "</td>");
        tableRow.append("<td>" + book + "</td>");
        
        memberTable.append(tableRow);
    }, function(errorObject) {
        console.log("Error handled: " + errorObject.code);


    });

    $('table').on('click', 'tr', function() {
        console.log(this);
       $(this).attr("data-key");
            
        $('#form').show();
        



        $("#addBookBtn").on("click", function(event) {
               $('#form').hide();
                event.preventDefault();


            
            
            

        
// database.ref("/members").orderByChild("joinDate").on("child_added", function(snapshot) {
            
            var book = $('#bookSearch').val();
            console.log('book');
            var queryURL = "http://openlibrary.org/search.json?q=Atlas+Shrugged";            
            



            $.ajax({
                url: queryURL,
                method: 'GET',
                data: {
                    limit: 1
                },
                dataType: "json"
            }).done(function(response) {
                console.log(response);
                console.log(response.docs[0].author_name[0]);
                console.log(response.docs[0].isbn[0]);
                console.log(response.docs[0].title);
                console.log(response.docs.cover_edition_key);

                $("#featuredBookCover").append("<img src=http://covers.openlibrary.org/b/isbn/" + response.docs[0].isbn[0] + "-M.jpg />");
                $("#featuredBookAuthor").append("<div>" + (response.docs[0].author_name[0]) + "</>");
               


            // var book = $('#bookSearch').val().trim();

            // var firstName = snapshot.val().firstName;
            // var lastName = snapshot.val().lastName;
            // var email = snapshot.val().email;
            // var address = snapshot.val().address;
            // var city = snapshot.val().city;
            // var state = snapshot.val().state;
            // var zip = snapshot.val().zip;
            // var phone = snapshot.val().phone;
            // var joinDate = snapshot.val().joinDate;
            // var book = snapshot.val().book;            

            // var memberTable = $("#memberTable");
            // var tableRow = $("<tr>");
            // // tableRow.append("<td>" + moment(joinDate).format("MM/DD/YY") + "</td")
            // // tableRow.append("<td>" + firstName + " " + lastName +"</td>");
            // // tableRow.append("<td>" + phone.replace(/(\d{3})(\d{3})(\d{4})/,'$1-$2-$3') + "</td>");
            // // tableRow.append("<td>" + book + "</td>");   

            // memberTable.prepend(tableRow);




         
       
            // database.ref("/members").push({
            //     joinDate: joinDate,
            //     firstName: firstName,
            //     lastName: lastName,
            //     email: email,
            //     address: address,
            //     city: city,
            //     state: state,
            //     zip: zip,
            //     phone: phone,
            //     book: book
            // });
             });

// });
            
            });

    });

});





        
	


