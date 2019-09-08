//database

var movies = [
    {
title: "The Dark Knight", 
hasWatched: true, 
rating: 5
},
    {
title: "Frozen",
hasWatched: true,
rating: 4.5
    },
    {
title: "Joker",
hasWatched: false,
rating: 4.9
    }
]

//function

function buildString(movie){
    var result = "You have "
if(movie.hasWatched){
 result += "watched ";
} else {
 result += "not seen ";
}
 result += "\"" + movie.title + "\" - ",
 result += movie.rating + " stars";
 return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
});


// results will looks like this:

VM814:10 You have watched "The Dark Knight" - 5 stars
VM814:10 You have watched "Frozen" - 4.5 stars
VM814:10 You have not seen "Joker" - 4.9 stars
undefined