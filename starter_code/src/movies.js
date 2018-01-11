/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 

function ratesAverage(arrayMovies){
    var average = arrayMovies.map(function(movie){
      return movie.rate;
    }).reduce(function(total, rate){
       return rate/arrayMovies.length + total;
    },0);

    var averageRounded = Math.round(average * 100) / 100;

    console.log(averageRounded);

    return averageRounded;
} 


// Get the average of Drama Movies

function dramaMoviesRate(arrayMovies){
    var dramaArray = arrayMovies.filter(function(movie){
            return movie.genre.indexOf("Drama") !== -1;
        });
    var dramaAverage = dramaArray.map(function(movie){
            return movie.rate;
        }).reduce(function(total, rate){
            return rate/dramaArray.length + total;
        },0);

        var averageRounded = Math.round(dramaAverage * 100) / 100;

        console.log(averageRounded);
    
        return averageRounded;
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
