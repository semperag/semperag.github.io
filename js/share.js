
/*
 * This code gets the elements for our navigation bar through the 
 * provided link. We use this navigation bar for each webpage and
 * do not have to repeat code yay! :)
*/
$.get("https://semperag.github.io/nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});