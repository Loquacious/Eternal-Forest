var game = function () {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.
//gameover cycle
if(energy === 0 || thirst === 10 || health === 0){
	gameover = true;
}
//shelter
var shelter = false;
var shelterLevel = 0;
//pet?
var pet = "none";
// Actual game variables
var gameover = false;
var day = 0;
var strengthplay = false;
var location ;
// Player well-being
var health = 10;
var energy = 10;
var thirst = 10;
var sleep = 100;
// Player info
var attack = 1;
var defense = 1;
var speed = 5;
var intelligence = 3;
var inventory = {
	food: 25,
	water: 25,
	sleeping_bag: 1
};
//Spells learned
var spells = {
        fire: false,
	earth: false,
	water: false,
	light: false,
	dark: false
};
day = 1
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//Set location
location = 'RUINS';
// Introduction
if (location === 'RUINS') {
	alert('Hello? Are you awake?');
	alert('zzz');
	alert('...');
	alert('Finally.');
	alert('Hi, my name is-');
	alert('Wait! What was that ?')
	alert('*A scroll tumbles out of a nearby bush.*')
	alert('*You read the scroll.* It says, "What is thriving now shall be destroyed (lots of mud is stuck to this portion) Ancient race of the dwarves". *The rest is burnt.*')
}
alert('Okay...that was different.')
alert('Nevermind that, let\'s gather some supplies')
// Main Choice
var biomeChoice = prompt('*You\'re gathering supplies when some rustling\'s heard.* It\'s definitely not safe. We have to go now. Should we go to the [WOODS] or the [WETLANDS].').toUpperCase();
if(biomeChoice === 'WETLANDS')
{
	inventory.scythe = 1
	inventory.shovel = 1
	alert('*You enter a wetlands plain.* Whew...that was close. anyway, why not take stock? Let us see...some food, water and...oh! A farmer\'s scythe and a shovel!')
	alert('*You use the scythe and shovel to collect tall grass and dig a pit to make a very crude but hidden shelter.*')
	shelter = true
	shelterLevel = 1
	alert('Well, looks like the sun is setting. You should get some rest.')
	alert('*Zzzz...*')
	location = 'RUINS';
} else
{
	inventory.axe = 1
	alert('*You decide that the woods are your best bet.* Let\'s take stock of our supplies. Some food, some water and...oh! There\'s an axe in a stump! sweet!')
	alert('*You spend the rest of the day building a very crude treehouse.*')
	
	shelter = true
	shelterLevel = 1
	alert('It looks like the sun is setting. Grab some sleep, I\'ll take first watch.')
	alert('*Zzzz...*')
	location = 'RUINS';
}
energy = 8
thirst = 8
day = 2
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
// Day Two
alert('You should probably go back to the village. Maybe we can find something useful.')
if (location === 'RUINS') {
	var classChoice = prompt('Let\'s see... we could go to the [BUTCHER SHOP], we might find a weapon of some sort. Or we could go to the [LIBRARY].').toUpperCase();
	location = classChoice;
}
if (location === 'BUTCHER SHOP')
{
	strengthplay = true
    alert('That butcher\'s knife over there looks pretty sharp. Lets take it')
    inventory.knife = 1
    alert('*obtained item [KNIFE]*')
    attack = 5
    location = prompt('It\'s getting dark. Where was home? [WOODS] or [WETLANDS]').toUpperCase();
} else
{
	if(location === 'LIBRARY') {
	alert('You enter the library. Let\'s see, lots of old scrolls... ! A spellbook! That ought to be useful. Go on and take it')
    intelligence = 7
    inventory.spellbook = 1
    alert('*obtained item [SPELLBOOK]*')
    spells.fire = true
    spells.water = true
    location = prompt('It\'s getting dark. We can test this spellbook later. First we should go home. [WOODS] or [WETLANDS]').toUpperCase();
	} else {
	    alert('You instead decide to explore the TRADESHOP.')
	    location = 'TRADESHOP'
	    var classWarrior = prompt('You found an iron sword. Would you like to take it').toUpperCase();
	    if(classWarrior === 'YES'){
	        inventory.iron_sword = 1
	        alert('*obtained item [SWORD]*')
	        alert('This sword should protect you from danger.')
	        location = prompt('Let\'s go back home. Where was it again? [WOODS] or [WETLANDS]').toUpperCase();
	    } else {
	        alert('We should really take the sword. It could be handy.')
	        inventory.iron_sword = 1
	        alert('*obtained item [SWORD]*')
	        location = prompt('Okay, it\'s getting dark. Where was that shelter you built again? [WOODS] or [WETLANDS]').toUpperCase();
	    }
	}
}
alert('We should probably eat something now')
inventory.food = 20
inventory.water = 20
energy = 10
thirst = 10
alert('Yum! that was delicious.')
alert('Let\'s go to sleep for now. We can forage some more tommorow.')
day = 3
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//Day Three
alert('Alright. New day, new opportunities. Let\'s go look for some stuff')
if(location === 'WOODS')
{
    inventory.food = 30
    inventory.wood = 15
    inventory.water = 30
    alert('*found material [WOOD]*')
    alert('*found essential [FOOD]*')
    alert('*found essential [WATER]*')
    alert('Okay, this is a lot of water.')
    alert('Why not use this wood we found to make a cask? That way we can store more water.')
    var caskYesNo = prompt('*make the cask?*').toUpperCase();
    if(caskYesNo === 'YES'){
    	inventory.wood = 10
    	inventory.waterCask = 1
    	alert('*upgraded [WATERSKIN] to [WOOD CASK]')
    } else {
    	alert('Okay, your choice.')
    	inventory.water = 25
    }
} else
{
    inventory.food = 30
    inventory.water = 35
    inventory.wildGrass = 15
    alert('*found material [WILD GRASS]*')
    alert('*found essential [FOOD]*')
    alert('*found essential [WATER]*')
    alert('We should take advantage of all this extra water. Let\'s make a cask. It will allow us to hold a lot more water.')
    var caskYesNo = prompt('*make the cask?*').toUpperCase();
    if(caskYesNo === 'YES'){
    	inventory.wildGrass = 10
    	inventory.wovenCask = 1
    	alert('*upgraded [WATERSKIN] to [CASK]*')
    } else {
    	alert('Have it your way.')
    	inventory.water = 25
    }
}
alert('We should get going.')
alert('We don\'t want to be out after dark.')
alert('Terrible things lurk here.')
alert('Wha... what was that!')
alert('A SHADOW apeared')
var userAttack = prompt('[ATTACK] or [RUN]').toUpperCase();
if(userAttack === 'RUN')
{
	alert('I\'m with you. Let\'s get out of here.')
	location = prompt('You run. Which way again? [WOODS] or [WETLANDS]').toUpperCase();
} else
{
	if(inventory.knife === 1)
	{
		alert('That won\'t work against a being of pure darkness! It has no physical form!')
	        location = prompt('RUUUUUUUN. Quick, which way? [WOODS] or [WETLANDS]')
	} else
	{
		if(inventory.spellbook === 1){
			var spellChoice = prompt('Which spell should we use? [FIRE] or [WATER]').toUpperCase();
		        if(spellChoice === 'FIREBALL') {
		         	alert('Woah!...nice fireball.')
		        	alert('The SHADOW was disspatched to wherever SHADOWS come from.')
		        } else
		        {
		        	alert('WOAH!. . . nice gigantic wave of water. That ought to do the trick.')
	        		alert('The SHADOW was dissolved.')
	        	}
		
        	} else
        	{
        		alert('That won\'t work against a being of pure darkness! It has no physical form!')
	                location = prompt('RUUUUUUUN. Quick, which way? [WOODS] or [WETLANDS]')
        	}
        }
}
alert('Whew, that was WAY too close. Let\'s hope we don\'t see any more SHADOWS.')
var whatNext = prompt('Okay, what next? [EXPLORE] or [HOME]').toUpperCase();
if(whatNext === 'HOME')
{
	alert(' Yeah. It is getting dark. I agree.')
} else
{
	alert('It\'s getting dark. I think we should go home instead.')
}
inventory.map = 1
alert('Hey! Look it\'s a map.')
var homeLocation = prompt('Let\'s record the location of that shelter you built. [WOODS] or [WETLANDS]').toUpperCase();
location = homeLocation
alert('Well, here we are. Home sweet home.')
alert('The sun seems to be setting. Let\'s eat dinner and grab some sleep')
inventory.food = 10
day = 4
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//day 4
alert('Ah. After a goodnight\'s sleep I feel ready to do some work.')
alert('hmm...')
alert('Why don\'t we make this shelter of yours a bit better?')
var shelterYes = prompt('*upgrade shelter?*').toUpperCase();
if(shelterYes === 'YES'){
	alert('*You spend the entire day upgrading your home, with a lunch break of course*')
	shelterLevel = 2
	alert('Our supplies are running low.')
	alert('Let\'s forage for some more')
	alert('*found essential [FOOD]*')
	alert('*found essential [WATER]*')
	inventory.food = 25
	inventory.water = 25
} else {
	alert('Okay...')
	//will change the following line to give choice for exploration later
	alert('Let\'s explore!')
	alert('Let\'s see...')
	alert('The map shows some sort of wierd formation to the south.')
	if(inventory.spellbook === 1){
		alert('We should probably master casting spells before we go there though.')
		alert('I have a feeling that it\'s chok-full of monsters and other bad things')
		alert('We can start training tomorrow, for today just take a break.')
		inventory.food = 20
		inventory.water = 20
	} else {
		if(inventory.iron_sword = 1){
			alert('I get the feeling that it will be dangerous.')
			alert('We should probably hone our swordfighting skills first')
			alert('Relax for today, tommorow we start training.')
			inventory.food = 20
			inventory.water = 20
		} else {
			if(inventory.scythe = 1){
				alert('It will probably be a perilous journey.')
				alert('I can teach you how to weild the scythe.')
				alert('Take the rest of the day off. We start tommorow.')
				inventory.food = 20
				inventory.water = 20
			} else {
				alert('The journey there will be full of danger.')
				alert('You must first master the quick and agile attacks of the dagger')
				alert('Meet me in the ruins tommorow morning.')
				alert('And don\'t forget the knife')
				alert('For now relax.')
				inventory.food = 20
				inventory.water = 20
			}
		}
	}
}
day = 5
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
if(shelterYes === 'YES'){
	alert('Ahhh. What a nice feeling to wake up in this significantly better shelter')
	alert('huh...')
	alert('It looks like there is an incantation on this mysterious scroll.')
	alert('One word is missing')
	alert('Oh!')
	alert('I get it...')
	alert('Fill in this word with either one of the following')
	var petWhich = prompt('[STRENGTH] or [KNOWLEDGE] or [PEACE] or [POWER]').toUpperCase();
} else {
	alert('*You wake up to see that mysterious scroll lying on the floor*')
	alert('*upon reeding it you discover an incantation*')
	alert('*There is a missing word and a note next to it*')
	alert('*The note says...*')
	alert('*Fill in this word one of the following*')
	var petWhich = prompt('[STRENGTH] or [KNOWLEDGE] or [PEACE] or [POWER]').toUpperCase();
}

alert('*You read the incantation with the missing word filled in*')
if(petWhich === 'STRENGTH'){
	alert('...')
	alert('...')
	alert('...')
	pet = 'Blue Sky Whale'
	alert('*A creature of unmatched strength appeared in a flash of light*')
	alert('It\'s a Blue Sky Whale!')
	alert('Blue Sky Whales were the chosen mounts of the powerful warriors of old')
	alert('A single whale can take out a frigate with a flick of it\'s tail')
} else {
	alert('...')
}
if(petWhich === 'PEACE'){
	alert('...')
	alert('...')
	pet = 'Fairy Dog'
	alert('*A creature of peace and loyalty appeared in a flash of pixie dust*')
	alert('*sparkles?*')
	alert('Oh...it\'s a Fairy Dog')
	alert('Fairy Dogs are loyal companions and very peaceful')
	alert('Still, if need be they can defend the peace with, well...usually a super powerful attack but sometimes their lives')
} else {
	alert('...')
}
if(petWhich === 'KNOWLEDGE'){
	alert('...')
	pet = 'Squirrel Pheonix'
	alert('*A creature of unmatched memory appeared in a flash of acorns*')
	alert('It\'s a Squirel Pheonix!')
	alert('Squirrel Pheonix are the keepers of knowledge. they know EVERYTHING')
	alert('Even though they know everything, they cannot recall it until much later on in their lives and they are very hard to train')
	alert('Good Luck!')
} else {
	alert('...')
}
if(petWhich === 'POWER'){
	pet = 'Desert Bat'
	alert('*A creature of unmatched power appeared in a flash of sand*')
	alert('It\'s a Desert Bat!')
	alert('Desert Bat have a super secret power that only the Squirel Pheonix know of')
	alert('This super power is so great that only one in every 1,000,000 Bats can use it.')
	alert('Also, before it uses the power, you have to train it.')
} else {
	location = homeLocation
}

day = 6
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
alert('Well what should we do today?')
if(shelterYes === 'YES') {
		if(inventory.iron_sword = 1){
			alert('I get the feeling that it will be dangerous.')
			alert('We should probably hone our swordfighting skills first')
			alert('Relax for today, tommorow we start training.')
			inventory.food = 20
			inventory.water = 20
		} else {
			if(inventory.scythe = 1){
				alert('It will probably be a perilous journey.')
				alert('I can teach you how to weild the scythe.')
				alert('Take the rest of the day off. We start tommorow.')
				inventory.food = 20
				inventory.water = 20
			} else {
				if(inventory.knife) {
			        	alert('The journey there will be full of danger.')
				        alert('You must first master the quick and agile attacks of the dagger')
			        	alert('Meet me in the ruins tommorow morning.')
			        	alert('And don\'t forget the knife')
			        	alert('For now relax.')
			        	inventory.food = 20
			        	inventory.water = 20
				} else {
					alert('The journey onwards will be full of peril.')
					alert('You must first learn to master the spellbook.')
					alert('Find me near the great tree tommorow.')
					alert('Training begins in the morning.')
					inventory.food = 20
					inventory.water = 20
				}
			}
		}
}
//temporary end
gameover = true;
// Real beginning
while (!gameover) {
	day++;
	alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet);
	switch (day) {
		case 1:
			gameover = true;
			break;
	}
}

}
