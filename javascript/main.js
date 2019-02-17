$(document).ready(function () {

    // target by attribute
    $(".card").on("click", function () {
        var thisCard = $(this).attr("data-card");
        
        if (thisCard === "giphy") {
            window.open("https://jonfromnyc.github.io/GifTastic/");
        }
        if (thisCard === "train") {
            window.open("https://jonfromnyc.github.io/Train_Scheduler/");
        }
        if (thisCard === "beach") {
            window.open("https://irenebogues.github.io/beachlovers/");
        }
    });
});