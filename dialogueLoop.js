//For Loop Function to display dialogue for screens 1-5
const yPos = 880;
const xPos = 920;

var i = 0;
var len = s1Dialogue.length
function dialogue1() 
{
    if (i < len) 
    {
        drawDialogueText(s1Dialogue[i++], yPos, xPos);
    }
    else 
    {
        dialogue1End();
    }
}

//Function for screen 6ATruth dialogue

var i2 = 0;
var len2 = s6ADialogueTruth.length
function screenSixATruth() 
{
    if (i2 < len2) 
    {
        drawDialogueText(s6ADialogueTruth[i2++], yPos, xPos);
        screenSixATruthNext();
    }
    else 
    {
        screenSixATruthEnd();
    }
}

//Function for screen 6AJoke dialogue

var i3 = 0;
var len3 = s6ADialogueJoke.length
function screenSixAJoke() 
{
    if (i3 < len3) 
    {
        drawDialogueText(s6ADialogueJoke[i3++], yPos, xPos);
        screenSixAJokeNext();
    }
    else 
    {
        screenSixAJokeEnd();
        i3 = 0;
    }
}

//Function for screen 6ARefuse dialogue

var i4 = 0;
var len4 = s6ADialogueRefuse.length
function screenSixARefuse() 
{
    if (i4 < len4) 
    {
        drawDialogueText(s6ADialogueRefuse[i4++], yPos, xPos);
        screenSixARefuseNext();
    }
    else 
    {
        screenSixARefuseEnd();
    }
}

//Function to End the game if the option is choosen at the end of 6ARefuse

function endGame() 
{
    alert("Taliesin seems to understand you'd rather not talk right now.\nHe lets you know that you're okay to head back to the galley.\nGame Over"),
        i = 0,
        i2 = 0,
        i3 = 0,
        i4 = 0,
        document.getElementById('continue').style.display = 'none',
        document.getElementById('endGame').style.display = 'none',
        ctx3.clearRect(0, 890, canvas.width, 50);
    document.getElementById('gamestart').style.display = 'block';
}

//Function to Continue the game if the option is choosen at the end of 6ARefuse

function continueGame() 
{
    drawDialogueText("Sure go ahead and ask Taliesin.", yPos, xPos);
    document.getElementById('continue').style.display = 'none',
    document.getElementById('endGame').style.display = 'none',
    document.getElementById('next2').style.display = 'block';
}

//For Loop Function to display dialogue for screens 7 & 8

var i5 = 0;
var len5 = s2Dialogue.length
function dialogue2() 
{
    if (i5 < len5) 
    {
        drawDialogueText(s2Dialogue[i5++], yPos, xPos);
    }
    else 
    {
        dialogue2End();
    }
}

//For Loop Function to display dialogue options for screen 9
var i6 = 0;
var len6 = s9DialogueLife.length;
function screen9DialogueLife()
{
    if (i6 < len6)
    {
        drawDialogueText(s9DialogueLife[i6++], yPos, xPos);
        screen9DialogueLifeNext();
    }
    else
    {
        screen9DialogueLifeEnd();
    }
}

var i7 = 0;
var len7 = s9DialogueWealth.length;
function screen9DialogueWealth()
{
    if (i7 < len7)
    {
        drawDialogueText(s9DialogueWealth[i7++], yPos, xPos);
        screen9DialogueWealthNext();
    }
    else
    {
        screen9DialogueWealthEnd();
    }
}

var i8 = 0;
var len8 = s9DialogueKnowledge.length;
function screen9DialogueKnowledge()
{
    if (i8 < len8)
    {
        drawDialogueText(s9DialogueKnowledge[i8++], yPos, xPos);
        screen9DialogueKnowledgeNext();
    }
    else
    {
        screen9DialogueKnowledgeEnd();
    }
}

var i9 = 0;
var len9 = s9DialogueNothing.length;
function screen9DialogueNothing()
{
    if (i9 < len9)
    {
        drawDialogueText(s9DialogueNothing[i9++], yPos, xPos);
        screen9DialogueNothingNext();
    }
    else
    {
       screen9DialogueNothingEnd();
    }
}

//Function for screen 10 dialogue

function screen10Dialogue() 
{
    drawDialogueText("Taliesin: Do you think that we’ll find evidence of some higher power in the universe? Something like many religions’ concept of a God or Creator?", yPos, xPos);
    document.getElementById('next3').style.display = 'none',
    document.getElementById('yes').style.display = 'block',
    document.getElementById('no').style.display = 'block',
    document.getElementById('iDontKnow').style.display = 'block';
}

//Functions for screen 11 dialogue options

var i10 = 0;
var len10 = s11DialogueYes.length
function screen11DialogueYes() 
{
    if (i10 < len10) 
    {
        drawDialogueText(s11DialogueYes[i10++], yPos, xPos);
        screen11DialogueYesNext();
    }
    else 
    {
        drawDialogueText("Taliesin: Do you think that humanity is alone in the universe?", yPos, xPos);
        screen11DialogueYesEnd();
    }
}

var i11 = 0;
var len11 = s11DialogueNo.length
function screen11DialogueNo() 
{
    if (i11 < len11) 
    {
        drawDialogueText(s11DialogueNo[i11++], yPos, xPos);
        screen11DialogueNoNext();
    }
    else 
    {
        drawDialogueText("Taliesin: Do you think that humanity is alone in the universe?", yPos, xPos);
        screen11DialogueNoEnd();
    }
}

var i12 = 0;
var len12 = s11DialogueIDontKnow.length
function screen11DialogueIDontKnow() 
{
    if (i12 < len12) 
    {
        drawDialogueText(s11DialogueIDontKnow[i12++], yPos, xPos);
        screen11DialogueIDontKnowNext();
    }
    else 
    {
        drawDialogueText("Taliesin: Do you think that humanity is alone in the universe?", yPos, xPos);
        screen11DialogueIDontKnowEnd();
    }
}

//Functions for screen 14 dialogue options

function screen14DialogueYes() 
{
    drawDialogueText("I do think we’re alone. Or at least I don’t think there are any other intelligent races out in the universe. If there were, we would have glimpsed something by now, but we haven’t. Maybe we got lucky and evolved early and we have the universe to ourselves. Or maybe we evolved late and everyone else is already gone. What about you Taliesin do you think humanity is alone in the universe?", yPos, xPos);
    document.getElementById('next4').style.display = 'block',
    document.getElementById('yes2').style.display = 'none',
    document.getElementById('no2').style.display = 'none';
}

function screen14DialogueNo() 
{
    drawDialogueText("I can’t believe that we’re alone in the universe. It just doesn’t make sense that out of all the trillions of planets out there that ours is the only one that happened to evolve intelligent life. There must be others out there somewhere, maybe we just haven’t looked in the right place yet. What about you Taliesin do you think humanity is alone in the universe?", yPos, xPos);
    document.getElementById('next4').style.display = 'block',
    document.getElementById('yes2').style.display = 'none',
    document.getElementById('no2').style.display = 'none';
}

//Function for screen 15-18 dialogue

var i13 = 0;
var len13 = s3dialogue.length
function dialogue3() 
{
    if (i13 < len13) 
    {
        drawDialogueText(s3dialogue[i13++], yPos, xPos);
    }
    else 
    {
        alert("Taliesin seems satisfied with your discussion, though it is a bit hard to be sure.\nYou get the feeling that this is only the first of these conversations that you two will have.\nGame Complete"),
            i = 0,
            i2 = 0,
            i3 = 0,
            i4 = 0,
            i5 = 0,
            i6 = 0,
            i7 = 0,
            i8 = 0,
            i9 = 0,
            i10 = 0,
            i11 = 0,
            i12 = 0,
            i13 = 0,
            document.getElementById('next4').style.display = 'none',
            ctx3.clearRect(0, 890, canvas.width, 50);
        document.getElementById('gamestart').style.display = 'block';
    }
}