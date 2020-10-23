//Functions to start game and allow the player to enter a custom name

//Function to draw Game Intro
function gameIntro() 
{
    drawIntroText("In 2075 humanity decided to send a manned ship out to survey in greater detail the further reaches of the Sol system.", 900, 210);
    drawIntroText("However due to the cost associated with building a ship that could travel that far out into the system and return", 900, 245);
    drawIntroText("It was decided that the ship would only have a single human crew member.", 900, 280);
    drawIntroText("You have been chosen to fly out amongst the black to collect detailed data about the planets in the furthest reaches of the Sol system.", 900, 315);
    drawIntroText("Your only companion is a super advanced behavioral AI named Taliesin", 900, 350);
    drawIntroText("And after a few months travel into the outer system Taliesin surprises you by asking why you volunteered for this mission.", 900, 385);
    document.getElementById('startBtnCanvas').style.display = 'none',
        document.getElementById('next').style.display = 'block';
}

//Function to Allow players to enter custom name and move the game to main dialogue
function getPlayerName() 
{
    var playerName = prompt("What is your name?", "Trev");
    if (playerName != null) 
    {
        ctx3.clearRect(0, 150, canvas.width, 475);
        drawDialogueText("Taliesin: " + playerName + " can I pose a query to you?", 880, 920);
        document.getElementById('next').style.display = 'none',
            document.getElementById('next1').style.display = 'block';
    }
}
