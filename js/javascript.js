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

    database.ref().on("child_added", function(snapshot) {

        console.log(snapshot.key);
        var keyCode = snapshot.key;
        var firstName = snapshot.val().firstName;
        var lastName = snapshot.val().lastName;
        var email = snapshot.val().email;
        var address = snapshot.val().address;
        var city = snapshot.val().city;
        var state = snapshot.val().state;
        var zip = snapshot.val().zip;
        var phone = snapshot.val().phone;
        var joinDate = snapshot.val().joinDate;


        var joinDate = moment.unix(joinDate).format("MM/DD/YY");
        var empMonths = moment().diff(moment.unix(joinDate, 'X'), "months");
        // var current = hostdate * memdate;
        // console.log(curren);

        var memberTable = $("#memberTable");
        var tableRow = $("<tr data-key ='" + keyCode + "'>");
       
        tableRow.append("<td>" + joinDate + "</td");
        tableRow.append("<td>" + firstName + lastName + "</td>");
        tableRow.append("<td>" + phone + "</td>");
        // tableRow.append("<td>" + "</td>");
        // tableRow.append("<td>" + "</td>");
        // tableRow.append("<td>" + "</td>")
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


            // $('#modal1').openModal();
    

            // var firstName = $('#firstName').val().trim();
            // var lastName = $('#lastName').val().trim();
            // var email = $("#email").val().trim();
            // var address = $('#address').val().trim();
            // var city = $('#city').val().trim();
            // var state = $('#state').val().trim();
            // var zip = $('#zip').val().trim();
            // var phone = $('#phone').val().trim();
            var book = $('#bookSearch').val().trim();
            // var joinDate = Date.now();


            database.ref("").push({
                joinDate: joinDate,
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                city: city,
                state: state,
                zip: zip,
                phone: phone,
                book: book
            });


            var search = book;


            var queryURLBase = "http://openlibrary.org/search.json?q=";


            var authKey = "dc3d0abdcc52a4411782f3b4d54ab0322a816e1a";
            var queryURL = queryURLBase + book;



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
                console.log(response.docs[0].isbn[1]);
                console.log(response.docs[0].title);
                console.log(response.docs.cover_edition_key);

                $("#featuredBookCover").append("<img src=http://covers.openlibrary.org/b/isbn/" + response.docs[0].isbn[1] + "-M.jpg />");
                $("#featuredBookAuthor").after("<div>" + (response.docs[0].author_name[0]) + "</>");
                $("#featuredBookTitle").after("<div>" + (response.docs[0].title) + "</>");

            });



        });

        database.ref().on("child_added", function(snapshot) {


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

            // lastName.sort();

            var memberTable = $("#memberTable");
            var tableRow = $("<tr>");
            tableRow.prepend("<td>" + joinDate + "</td");
            tableRow.prepend("<td>" + firstName + " " + lastName + "</td>");
            tableRow.prepend("<td>" + phone + "</td>");
            tableRow.prepend("<td>" + book + "</td>");
            // tableRow.prepend("<td>" + "</td");
            // tableRow.prepend("<td>" + "</td");

            memberTable.prepend(tableRow);




        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code)
        });




    });


});




        
	


