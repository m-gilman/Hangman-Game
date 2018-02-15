var $ = function (id) {
    return document.getElementById(id);
}

    var game = ["GIRAFFE", "LION", "BEAR", "TIGER", "PENGUIN", "LEOPARD", "GIANT PANDA", "RHINOCEROS", "LEMUR", "POLAR BEAR", "SLOTH", "HIPPOPOTAMUS"]
    var choice = Math.floor(Math.random()* game.length);
    var answer = game[choice];
    var myLength = answer.length;
    var display=[myLength];
    var win = myLength;
    var letters = answer.split("");
    var attemptsLeft = 10;
    var output="";
    var userLetter="";

var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i]
    }
    document.getElementById("game").innerHTML = output;
    output = "";
}

window.onload = function()
{
    setup();
}
alert(answer);