var adjective = [];
var modifying = [];
var technology = [];
var adjectiveFlag = false;
var modifyingFlag = false;
var technologyFlag = false;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function buildAutomation(){
    var randomAdjective = adjective[randomNumber(0,adjective.length-1)];
    var randomModifying = modifying[randomNumber(0,modifying.length-1)];
    var randomTechnology = technology[randomNumber(0,technology.length-1)];

    $('#phrase').html("<p>" + randomModifying + " " + randomAdjective + " " + randomTechnology + "<p>");
}
$(document).ready(function () {
    $('#buttonContainer').append("<button id='generate'>Generate Awesome Phrase of Stuff</button>");
    //need to add functionality to prevent button functionality until ajax call finishes.
    $.ajax({
        url: "/adjective",
        success: function (data) {
            adjective = data;
            adjectiveFlag = true;
            return adjectiveFlag;
        }
    });

    $.ajax({
        url: "/modifying",
        success: function (data) {
            modifying = data;
            modifyingFlag = true;
            return modifyingFlag;
        }
    });
    $.ajax({
        url: "/technology",
        success: function (data) {
            technology = data;
            technologyFlag = true;
            return technologyFlag;
        }
    });
    $('body').on('click', "#generate", function(){
        if(adjectiveFlag && modifyingFlag && technologyFlag){
        buildAutomation();
        }
        else{
            $('#phrase').append("<p>Not quite done yet, try again in a second...</p>");
        }
    });
});
