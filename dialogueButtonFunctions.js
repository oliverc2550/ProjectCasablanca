function dialogue1End()
{
    document.getElementById('screen6ATruth').style.display = 'block',
    document.getElementById('screen6ARefuse').style.display = 'block',
    document.getElementById('screen6AJoke').style.display = 'block',
    document.getElementById('next1').style.display = 'none';
}

function screenSixATruthNext()
{
    document.getElementById('screen6ATruth').innerHTML = "Next",
    document.getElementById('screen6ARefuse').style.display = 'none',
    document.getElementById('screen6AJoke').style.display = 'none';
}

function screenSixATruthEnd()
{
    document.getElementById('next2').style.display = 'block',
    document.getElementById('screen6ATruth').innerHTML = "[Truth]",
    document.getElementById('screen6ATruth').style.display = 'none';
}

function screenSixAJokeNext()
{
    document.getElementById('screen6AJoke').innerHTML = "Next",
    document.getElementById('screen6ARefuse').style.display = 'none',
    document.getElementById('screen6ATruth').style.display = 'none';
}

function screenSixAJokeEnd()
{
    document.getElementById('screen6AJoke').innerHTML = "[Joke]",
        document.getElementById('screen6ARefuse').style.display = 'block',
        document.getElementById('screen6ATruth').style.display = 'block';
}

function screenSixARefuseNext()
{
    document.getElementById('screen6ARefuse').innerHTML = "Next",
    document.getElementById('screen6ATruth').style.display = 'none',
    document.getElementById('screen6AJoke').style.display = 'none';
}

function screenSixARefuseEnd()
{
    document.getElementById('continue').style.display = 'block',
    document.getElementById('endGame').style.display = 'block',
    document.getElementById('screen6ARefuse').innerHTML = "[Refuse]",
    document.getElementById('screen6ARefuse').style.display = 'none';
}

function dialogue2End()
{
    document.getElementById('next2').style.display = 'none',
    document.getElementById('life').style.display = 'block',
    document.getElementById('wealth').style.display = 'block',
    document.getElementById('knowledge').style.display = 'block',
    document.getElementById('nothing').style.display = 'block';
}

function screen9DialogueLifeNext()
{
    document.getElementById('life').innerHTML = "Next",
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none',
    document.getElementById('nothing').style.display = 'none';
}

function screen9DialogueLifeEnd()
{
    document.getElementById('next3').style.display = 'block',
    document.getElementById('life').innerHTML = "[Life]",
    document.getElementById('life').style.display = 'none',
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none',
    document.getElementById('nothing').style.display = 'none';
}

function screen9DialogueWealthNext()
{
    document.getElementById('wealth').innerHTML = "Next",
    document.getElementById('life').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none',
    document.getElementById('nothing').style.display = 'none';
}

function screen9DialogueWealthEnd()
{
    document.getElementById('next3').style.display = 'block',
    document.getElementById('life').style.display = 'none',
    document.getElementById('wealth').innerHTML = "[Wealth]",
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none',
    document.getElementById('nothing').style.display = 'none';
}

function screen9DialogueKnowledgeNext()
{
    document.getElementById('knowledge').innerHTML = "Next",
    document.getElementById('life').style.display = 'none',
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('nothing').style.display = 'none';
}

function screen9DialogueKnowledgeEnd()
{
    document.getElementById('next3').style.display = 'block',
    document.getElementById('life').style.display = 'none',
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none',
    document.getElementById('knowledge').innerHTML = "[Knowledge]",
    document.getElementById('nothing').style.display = 'none';
}

function screen9DialogueNothingNext()
{
    document.getElementById('nothing').innerHTML = "Next",
    document.getElementById('life').style.display = 'none',
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none';
}

function screen9DialogueNothingEnd()
{
    document.getElementById('next3').style.display = 'block',
    document.getElementById('life').style.display = 'none',
    document.getElementById('wealth').style.display = 'none',
    document.getElementById('knowledge').style.display = 'none',
    document.getElementById('nothing').innerHTML = "[Nothing]",
    document.getElementById('nothing').style.display = 'none';
}

function screen11DialogueYesNext()
{
    document.getElementById('yes').innerHTML = "Next",
    document.getElementById('no').style.display = 'none',
    document.getElementById('iDontKnow').style.display = 'none';
}

function screen11DialogueYesEnd()
{
    document.getElementById('yes2').style.display = 'block',
    document.getElementById('no2').style.display = 'block',
    document.getElementById('yes').innerHTML = "[Yes]",
    document.getElementById('yes').style.display = 'none';
}

function screen11DialogueNoNext()
{
    document.getElementById('no').innerHTML = "Next",
    document.getElementById('yes').style.display = 'none',
    document.getElementById('iDontKnow').style.display = 'none';
}

function screen11DialogueNoEnd()
{
    document.getElementById('yes2').style.display = 'block',
    document.getElementById('no2').style.display = 'block',
    document.getElementById('no').innerHTML = "[No]",
    document.getElementById('no').style.display = 'none';
}

function screen11DialogueIDontKnowNext()
{
    document.getElementById('iDontKnow').innerHTML = "Next",
    document.getElementById('no').style.display = 'none',
    document.getElementById('yes').style.display = 'none';
}

function screen11DialogueIDontKnowEnd()
{
    document.getElementById('yes2').style.display = 'block',
    document.getElementById('no2').style.display = 'block',
    document.getElementById('iDontKnow').innerHTML = "[I Don't Know]",
    document.getElementById('iDontKnow').style.display = 'none';
}