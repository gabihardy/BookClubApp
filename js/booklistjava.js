var books = ['Atlas Shrugged', 'Gone Girl', 'the catcher in the rye'];
 for (var i = 0; i < books.length; i++) {
     console.log(books[i]);
     var queryURL = "http://openlibrary.org/search.json?q=" + books[i];
     var authKey = "dc3d0abdcc52a4411782f3b4d54ab0322a816e1a";
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
         $("#previousBookView").append(
             "<img src=http://covers.openlibrary.org/b/isbn/" +
             response.docs[0].isbn[0] + "-M.jpg />");
         $("#previousBookView").append("<div>" + (response.docs[0].author_name[
             0]) + "</>");
         $("#previousBookView").append("<div>" + (response.docs[0].title) +
             "</>");
     });
 }

