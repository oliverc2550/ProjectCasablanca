//Canvas code, includes dialogue display and image display

//Variables for Canvas layer 1
var canvas = document.getElementById('backgroundCanvas');
var ctx = canvas.getContext("2d");
//Variables for Canvas layer 2
var canvas2 = document.getElementById('textBoxCanvas');
var ctx2 = canvas2.getContext("2d");
//Variables for Canvas layer 3
var canvas3 = document.getElementById('textCanvas');
var ctx3 = canvas3.getContext("2d");
//Variables for Btn Canvases
var canvasBtnSt = document.getElementById('startBtnCanvas');
var ctx4 = canvasBtnSt.getContext("2d");

//Variable and Function to call and load background Image on Canvas
var backgroundImage = new Image();
backgroundImage.src = "Images/tempBackground.png";

backgroundImage.onload = function () 
{
    ctx.drawImage(backgroundImage, 0, 0)
};

//Statements for drawing Dialogue Box on Canvas2
ctx2.beginPath();
ctx2.rect(0, 880, canvas2.width, 200);
ctx2.fillStyle = "#b3b3b3";
ctx2.fillRect(0, 880, canvas2.width, 200);
ctx2.stroke();

//Function for drawing Intro Text on Canvas2
function drawIntroText(text, x, y) 
{
    ctx3.textAlign = "center";
    ctx3.font = "28px Arial";
    ctx3.lineWidth = 1;
    ctx3.fillStyle = "#ffffff";
    ctx3.fillText(text, x, y);
}

//Function for breaking text string onto multiple lines
//Title: wrapText Source Code
//Author: Silk, D
//Date: 2014 (accessed 10/2020)
//Code Version: unknown
//Availability: https://stackoverflow.com/questions/21711768/split-string-in-javascript-and-detect-line-break
//Some modifications in regards to declaring constants and renaming variables used in the function
//Start of Cited code
const maxWidth = 1608
const lineHeight = 20
function wrapText(ctx3, text, x, y, maxWidth, lineHeight) 
{
    var words = text.split('');
    var line = '';

    for (var n = 0; n < words.length; n++) 
    {
        var textLine = line + words[n] + '';
        var metrics = ctx3.measureText(textLine);
        var textWidth = metrics.width;
        if (textWidth > maxWidth && n > 0) 
        {
            ctx3.fillText(line, x, y);
            line = words[n] + '';
            y += lineHeight;
        }
        else 
        {
            line = textLine;
        }
    }
    ctx3.fillText(line, x, y);
}
//End of Cited Code

//Function to draw dialogue text onto Canvas3
function drawDialogueText(text, x, y) 
{
    ctx3.clearRect(0, 890, canvas.width, 75);
    ctx3.textAlign = "center";
    ctx3.font = "18px Arial";
    ctx3.lineWidth = 1;
    ctx3.fillStyle = "#000000";
    wrapText(ctx3, text, x, y, maxWidth, lineHeight);
}