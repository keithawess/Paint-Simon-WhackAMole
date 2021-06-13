//Choose your adventure

let player = {
    hp: 10,
    strength: 10,
    agility: 10,
    dexterity: 10,
    gold: 10
}

let optionOne = "You wake up in an alley way with a guard running towards you.\n"
    + "[Wait for Guard] or [Run]";

let responseOneAW = "You wait for the guard to reach you. \"I saw you laying at the end of an alley. "
    + "There was a cloaked person jumping over the fence. You dropped this.\" "
    + "He hands you 10 gold and walks away. You exit the alley and look down the street.";

let responseTwoBW = "You turn and run to the back of the alley and find a wooden fence. It looks "
    + "you hear the guards footsteps closing in on you. You decide to jump the fence. You scramble "
    + "over the fence and tumble awkwardly to the ground. \"I don't have time for this!\", you hear "
    + "the guard hiss, followed by footsteps fading into the background noise. You notice a dull pain "
    + "in your shoulder as you exit the alley and look down the street.";

let optionTwo = "To your left, you notice a few houses on either side of the street before it transitions "
    + "into farmland.";

while(player.name = empty){
    player.name =  prompt("Enter your name, adventurer");
}

do {
    player.class = prompt(`${player.name}, are you a warrior or a thief?`);
}
while(player.class !== "warrior" || player.class !=="thief"){
    player.class = prompt(`{$player.name}, you are either a warrior or a thief. Which is it?`);
}

if (player.class = warrior)
{
    player.hp = 15;
    player.stamina = 15;
}
else 
{
    player.agility = 15;
    player.dexterity = 15;
}


