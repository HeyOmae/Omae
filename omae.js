
var priorityA,
    priorityB,
    priorityC,
    priorityD,
    priorityE,

    metatype,
    attribute = 0,
    specAttribute = 0,
    magres, //what kind of emergence or awakening a character is
    skills = 0, //skill points
    knowledgepoints = 0, //knowledge skill points
    skillgroups = 0, //skill group points
    skillgroupmax = 6, //this is the max rating for a skill group
    spells = 0, //number of spells one can learn
    powerPoints = 0.0, //adept power points
    forms = 0, //number of complex forms
    nuyen = 0, //money
    ess = 6.0,
    reachmod = 0, //reachmod for trolls
    karma = 25,

    //var iniphy=attributes.current.int+attributes.current.rea;

    dataP = 0, //data processing, for TM's

    knowledgeType, //This holds which knowledge type is selected when submitting a new knowledge skill

    focinumber = 0, //number of foci that are bonded
    fociRating = 0, //the total rating of the foci
    fociMaxRating = attributes.current.mag * 2, //max rating or total foci

    maxAvail = 12; //the max availibility at chargen

var knowledgeSkills = [];

var spellType = [
    "Combat",
    "Detection",
    "Health",
    "Illusion",
    "Manipulation"
]

var spiritType = [
    "Air",
    "Beasts",
    "Blood",
    "Guardian",
    "Guidance",
    "Earth",
    "Fire",
    "Insect-Caretaker",
    "Insect-Nymph",
    "Insect-Scout",
    "Insect-Soldier",
    "Insect-Worker",
    "Man",
    "Plant",
    "Shadow",
    "Shedim",
    "Task",
    "Water"
]

var ritualKeywords = [
    "Anchored",
    "Adept",
    "Blood",
    "Contractual",
    "Mana",
    "Material Link",
    "Minion",
    "Organic Link",
    "Spell",
    "Spotter"
];


var inventory = {};

setUpSkills();


$(".a, .b, .c, .d, .e").click( //This controls the Priority table
    selectPriority
);

function selectPriority() { //Priority table controls
    var classPrior; //this is the class of what was clicked
    var priorityL; //Priority Level, holds which priority goes into which level

    fnselect($(this));

    switch (true) {
        case $(this).hasClass('a'):
            classPrior = "a";
            break;
        case $(this).hasClass('b'):
            classPrior = "b";
            break;
        case $(this).hasClass('c'):
            classPrior = "c";
            break;
        case $(this).hasClass('d'):
            classPrior = "d";
            break;
        case $(this).hasClass('e'):
            classPrior = "e";
            break;
    }

    var className = $(this).attr("class");
    switch (className) {
        case 'metatype ' + classPrior + ' selected':
            priorityL = "metatype";
            break;
        case 'attribute ' + classPrior + ' selected':
            priorityL = "attribute";
            break;
        case 'magres ' + classPrior + ' selected':
            priorityL = "magres";
            break;
        case 'skillz ' + classPrior + ' selected':
            priorityL = "skillz";
            break;
        case 'resource ' + classPrior + ' selected':
            priorityL = "resource";
            break;
        case 'prilevel ' + classPrior + ' selected':
            priorityL = "prilevel";
            break;
        default:
            priorityL = "prilevel";
            break;
    }

    switch (true) {
        case $(this).hasClass('a'):
            priorityA = priorityL;
            break;
        case $(this).hasClass('b'):
            priorityB = priorityL;
            break;
        case $(this).hasClass('c'):
            priorityC = priorityL;
            break;
        case $(this).hasClass('d'):
            priorityD = priorityL;
            break;
        case $(this).hasClass('e'):
            priorityE = priorityL;
            break;
    }

    deactivate(priorityL, $(this));

    function deactivate(x, y) {
        $("." + x).addClass("deact");
        y.removeClass("deact");
    }

    switch (priorityA) {
        case "metatype":
            activateMT(".human");
            activateMT(".elf");
            activateMT(".dwarf");
            activateMT(".ork");
            activateMT(".troll");
            break;
        case "attribute":
            attribute = 24;
            pointUpdater(".pnt", attribute);
            break;
        case "magres":
            activateMT(".mage");
            activateMT(".techno");
            activateMT(".mystic");
            deactivateMT(".adept");
            deactivateMT(".aspect");
            break;
        case "skillz":
            skillgroups = 10;
            skills = 46;
            break;
        case "resource":
            nuyen = 450000;
            break;
    }
    switch (priorityB) {
        case "metatype":
            activateMT(".human");
            activateMT(".elf");
            activateMT(".dwarf");
            activateMT(".ork");
            activateMT(".troll");
            break;
        case "attribute":
            attribute = 20;
            pointUpdater(".pnt", attribute);
            break;
        case "magres":
            activateMT(".mage");
            activateMT(".techno");
            activateMT(".mystic");
            activateMT(".adept");
            activateMT(".aspect");
            break;
        case "skillz":
            skillgroups = 5;
            skills = 36;
            break;
        case "resource":
            nuyen = 275000;
            break;
    }
    switch (priorityC) {
        case "metatype":
            activateMT(".human");
            activateMT(".elf");
            activateMT(".dwarf");
            activateMT(".ork");
            deactivateMT(".troll");
            break;
        case "attribute":
            attribute = 16;
            pointUpdater(".pnt", attribute);
            break;
        case "magres":
            activateMT(".mage");
            activateMT(".techno");
            activateMT(".mystic");
            activateMT(".adept");
            activateMT(".aspect");
            break;
        case "skillz":
            skillgroups = 2;
            skills = 28;
            break;
        case "resource":
            nuyen = 140000;
            break;
    }
    switch (priorityD) {
        case "metatype":
            activateMT(".human");
            activateMT(".elf");
            deactivateMT(".dwarf");
            deactivateMT(".ork");
            deactivateMT(".troll");
            break;
        case "attribute":
            attribute = 14;
            pointUpdater(".pnt", attribute);
            break;
        case "magres":
            deactivateMT(".mage");
            deactivateMT(".techno");
            deactivateMT(".mystic");
            activateMT(".adept");
            activateMT(".aspect");
            break;
        case "skillz":
            skillgroups = 0;
            skills = 22;
            break;
        case "resource":
            nuyen = 50000;
            break;
    }
    switch (priorityE) {
        case "metatype":
            activateMT(".human");
            deactivateMT(".elf");
            deactivateMT(".dwarf");
            deactivateMT(".ork");
            deactivateMT(".troll");
            break;
        case "attribute":
            attribute = 12;
            pointUpdater(".pnt", attribute);
            break;
        case "magres":
            deactivateMT(".mage");
            deactivateMT(".techno");
            deactivateMT(".mystic");
            deactivateMT(".adept");
            deactivateMT(".aspect");
            break;
        case "skillz":
            skillgroups = 0;
            skills = 18;
            break;
        case "resource":
            nuyen = 6000;
            break;
    }

    function activateMT(x) {
        $(x).removeClass("deact");
    }

    function deactivateMT(x) {
        $(x).addClass("deact");
    }
    disUpdater();
}

function fnselect(x) { //fucntion for highlighting what has been selected
    x.siblings().removeClass("selected");
    x.addClass('selected');
}

$(".human, .elf, .dwarf, .ork, .troll").click( //this part will call the metatype select fuction when a metatype button is clicked
    selectMetatype
);

function selectMetatype() { //Metatype controls
    if ($(this).hasClass('deact')) { //this will make it so that if the button is deactivated that it won't do anything
        return;
    } else {
        fnselect($(this)); //highlights what's been clicked on

        if ($(this).hasClass('human')) { //this stuff sets the metatype attributes and stuff
            resetAtt();
            metatype = "human";
            attributes.current.edg = 2;
            attributes.maximum.edgmax = 7;
            attributes.minimum.edgmin = 2;
            disUpdater();
            $("#racial").empty().append($("<p>None<br>Boring</p>"));
            switch ("metatype") {
                case priorityA:
                    specAttribute = 9;
                    break;
                case priorityB:
                    specAttribute = 7;
                    break;
                case priorityC:
                    specAttribute = 5;
                    break;
                case priorityD:
                    specAttribute = 3;
                    break;
                case priorityE:
                    specAttribute = 1;
                    break;
            }
        }
        if ($(this).hasClass('elf')) {
            resetAtt();
            metatype = "elf";
            attributes.current.agi = 2;
            attributes.current.cha = 3;
            attributes.maximum.agimax = 7;
            attributes.minimum.agimin = 2;
            attributes.maximum.chamax = 8;
            attributes.minimum.chamin = 3;
            disUpdater();
            $("#racial").empty().append($("<p>Low-Light Vision</p>"));
            switch ("metatype") {
                case priorityA:
                    specAttribute = 8;
                    break;
                case priorityB:
                    specAttribute = 6;
                    break;
                case priorityC:
                    specAttribute = 3;
                    break;
                case priorityD:
                    specAttribute = 0;
                    break;
            }
        }
        if ($(this).hasClass('dwarf')) {
            resetAtt();
            metatype = "dwarf";
            attributes.current.bod = 3;
            attributes.current.str = 3;
            attributes.current.wil = 2;
            attributes.maximum.bodmax = 8;
            attributes.maximum.reamax = 5;
            attributes.maximum.strmax = 8;
            attributes.maximum.wilmax = 7;
            attributes.minimum.bodmin = 3;
            attributes.minimum.strmin = 3;
            attributes.minimum.wilmin = 2;
            disUpdater();
            $("#racial").empty().append($("<p>Thermographic Vision<br>+2 Pathogen/Toxic Resist<br>20% Lifestyle increase</p>"));
            switch ("metatype") {
                case priorityA:
                    specAttribute = 7;
                    break;
                case priorityB:
                    specAttribute = 4;
                    break;
                case priorityC:
                    specAttribute = 1;
                    break;
            }

        }
        if ($(this).hasClass('ork')) {
            resetAtt();
            metatype = "ork";
            attributes.current.bod = 4;
            attributes.current.str = 3;
            attributes.maximum.bodmax = 9;
            attributes.maximum.strmax = 8;
            attributes.maximum.logmax = 5;
            attributes.maximum.chamax = 5;
            attributes.minimum.bodmin = 4;
            attributes.minimum.strmin = 3;
            disUpdater();
            $("#racial").empty().append($("<p>Low-Light Vision</p>"));
            switch ("metatype") {
                case priorityA:
                    specAttribute = 7;
                    break;
                case priorityB:
                    specAttribute = 4;
                    break;
                case priorityC:
                    specAttribute = 0;
                    break;
            }

        }
        if ($(this).hasClass('troll')) {
            resetAtt();
            metatype = "troll";
            attributes.current.bod = 5;
            attributes.current.str = 5;
            attributes.maximum.bodmax = 10;
            attributes.maximum.strmax = 10;
            attributes.maximum.agimax = 5;
            attributes.maximum.logmax = 5;
            attributes.maximum.intmax = 5;
            attributes.maximum.chamax = 4;
            attributes.minimum.bodmin = 5;
            attributes.minimum.strmin = 5;
            reachmod = 1;
            disUpdater();
            $("#racial").empty().append($("<p>Thermographic Vision<br>+1 Reach<br>+1 Dermal Armor<br>100% Lifestyle increase</p>"));
            switch ("metatype") {
                case priorityA:
                    specAttribute = 5;
                    break;
                case priorityB:
                    specAttribute = 0;
                    break;
            }
        }

        disUpdater();
    }
}

function resetAtt() { //reset attribute to default
    attributes.current.bod = 1;
    attributes.current.agi = 1;
    attributes.current.rea = 1;
    attributes.current.str = 1;
    attributes.current.wil = 1;
    attributes.current.log = 1;
    attributes.current.int = 1;
    attributes.current.cha = 1;
    attributes.current.edg = 1;
    attributes.minimum.bodmin = 1;
    attributes.minimum.agimin = 1;
    attributes.minimum.reamin = 1;
    attributes.minimum.strmin = 1;
    attributes.minimum.wilmin = 1;
    attributes.minimum.logmin = 1;
    attributes.minimum.intmin = 1;
    attributes.minimum.chamin = 1;
    attributes.minimum.edgmin = 1;
    attributes.maximum.bodmax = 6;
    attributes.maximum.agimax = 6;
    attributes.maximum.reamax = 6;
    attributes.maximum.strmax = 6;
    attributes.maximum.wilmax = 6;
    attributes.maximum.logmax = 6;
    attributes.maximum.intmax = 6;
    attributes.maximum.chamax = 6;
    attributes.maximum.edgmax = 6;
    reachmod = 0;
}
//there are 10 types of people in this world. Those who understand binary, and those who don't

var updaters = { //experimenting on removing functions from the global name space
    nuyenUpdater: function() {
        $("#nuyen").empty().append($("<strong>" + nuyen + "&#65509</strong>"));
    },
    essUpdater: function() {
        $("#essencepnt").empty().append($("<strong>" + Math.round(ess * 1000) / 1000 + "</strong>"));
    },
    magUpdater: function() {
        $(".mag" + " .stats").empty().append($("<span>" + Math.floor(attributes.current.mag) + "/" + Math.floor(attributes.maximum.magmax) + "</span>"));
    },
    resUpdater: function() {
        $(".res" + " .stats").empty().append($("<span>" + Math.floor(attributes.current.res) + "/" + Math.floor(attributes.maximum.resmax) + "</span>"));
    }
}

disUpdater(); //runs the attribute display funcation on start up

function disUpdater() { //adds the attributes to the attribute table
    renderAttStat(attributes.augment.bod, "bod", attributes.current.bod, attributes.maximum.bodmax);
    renderAttStat(attributes.augment.agi, "agi", attributes.current.agi, attributes.maximum.agimax);
    renderAttStat(attributes.augment.rea, "rea", attributes.current.rea, attributes.maximum.reamax);
    renderAttStat(attributes.augment.str, "str", attributes.current.str, attributes.maximum.strmax);
    renderAttStat(attributes.augment.wil, "wil", attributes.current.wil, attributes.maximum.wilmax);
    renderAttStat(attributes.augment.log, "log", attributes.current.log, attributes.maximum.logmax);
    renderAttStat(attributes.augment.int, "int", attributes.current.int, attributes.maximum.intmax);
    renderAttStat(attributes.augment.cha, "cha", attributes.current.cha, attributes.maximum.chamax);
    renderSpecStat("edg", attributes.current.edg, attributes.maximum.edgmax);
    updaters.magUpdater();
    updaters.resUpdater();
    pointUpdater(".pnt", attribute);
    pointUpdater(".spePnt", specAttribute);
    attributes.limits.phyLimit = renderLimit(attributes.limitMod.phyLimitMod, "phyLimit", attributes.current.str + attributes.augment.str, attributes.current.bod + attributes.augment.bod, attributes.current.rea + attributes.augment.rea);
    attributes.limits.socLimit = renderLimit(attributes.limitMod.socLimitMod, "socLimit", attributes.current.cha, attributes.current.wil, ess);
    attributes.limits.menLimit = renderLimit(attributes.limitMod.menLimitMod, "menLimit", attributes.current.log, attributes.current.int, attributes.current.wil);
    attributes.initiative.iniphy = initiativeRenderMonkey(attributes.current.rea, "meatini", attributes.initiative.iniphyDice, attributes.augment.rea);
    attributes.initiative.iniast = initiativeRenderMonkey(attributes.current.int, "magicini", attributes.initiative.iniastDice, attributes.augment.int);
    attributes.initiative.inimat = initiativeRenderMonkey(dataP, "coldmatini", attributes.initiative.inimatcold, 0);
    attributes.initiative.inimat = initiativeRenderMonkey(dataP, "hotmatini", attributes.initiative.inimathot, 0);
    renderSkills(); //this updates everything that uses a for loop
    $("#skillpnt").empty().append($("<strong>" + skills + "/" + skillgroups + "</strong>"));
    pointUpdater("#knowpnt", knowledgepoints);
    pointUpdater("#powerpnt", powerPoints);
    pointUpdater("#spellpnt", spells);
    pointUpdater("#formpnt", forms);
    pointUpdater("#karmapnt", karma);
    updaters.essUpdater();
    updaters.nuyenUpdater();
}

function pointUpdater(x, y) {
    $(x).empty().append($("<strong>" + y + "</strong>"));
}

function renderAttStat(w, x, y, z) { //this shows the current level of an attribute and the attribute max
    var augment = y + w;
    $("." + x + " .stats").empty().append($("<span>" + y + "/" + z + "(" + augment + ")" + "</span>"));
}

function renderSpecStat(x, y, z) { //this is for special stats like edge, attributes.current.mag, and attributes.current.res
    $("." + x + " .stats").empty().append($("<span>" + y + "/" + z + "</span>"));
}

function initiativeRenderMonkey(x, y, z, w) {
    if (magres == "technomancer") {
        dataP = attributes.current.log;
    }
    var ini = attributes.current.int + attributes.augment.int + x + w;
    $("." + y).empty().append($("<strong>" + ini + "+" + z + "D6</strong>"));
    return ini;
}

function renderLimit(v, w, x, y, z) { //function for showing and calculating limits
    var limit = (x * 2 + y + z) / 3;
    limit = Math.ceil(limit); //this rounds up
    $("." + w).empty().append($("<strong>" + limit + "(" + (limit + v) + ")" + "</strong>"));
    return limit;
}

$("#container").on("click", ".incAtt, .decAtt",
    changeAtt
);

var phyAttMax = false;
var menAttMax = false;

function changeAtt() { //this function changes the attributes

    var className = $(this).attr("class");
    switch (className) { //This switch statement is SO LONG!
        case 'incAtt Bod':
            attributes.current.bod = increasePhy(attributes.current.bod, attributes.maximum.bodmax);
            break;
        case 'incAtt Agi':
            attributes.current.agi = increasePhy(attributes.current.agi, attributes.maximum.agimax);
            break;
        case 'incAtt Rea':
            attributes.current.rea = increasePhy(attributes.current.rea, attributes.maximum.reamax);
            break;
        case 'incAtt Str':
            attributes.current.str = increasePhy(attributes.current.str, attributes.maximum.strmax);
            break;
        case 'incAtt Wil':
            attributes.current.wil = increaseMen(attributes.current.wil, attributes.maximum.wilmax);
            break;
        case 'incAtt Log':
            attributes.current.log = increaseMen(attributes.current.log, attributes.maximum.logmax);
            knowingIsHalftheBattle(); //update the number of knowledge skills
            break;
        case 'incAtt Int':
            attributes.current.int = increaseMen(attributes.current.int, attributes.maximum.intmax);
            knowingIsHalftheBattle(); //update the number of knowledge skills
            break;
        case 'incAtt Cha':
            attributes.current.cha = increaseMen(attributes.current.cha, attributes.maximum.chamax);
            break;
        case 'decAtt Bod':
            attributes.current.bod = decreasePhy(attributes.current.bod, attributes.minimum.bodmin, attributes.maximum.bodmax);
            break;
        case 'decAtt Agi':
            attributes.current.agi = decreasePhy(attributes.current.agi, attributes.minimum.agimin, attributes.maximum.agimax);
            break;
        case 'decAtt Rea':
            attributes.current.rea = decreasePhy(attributes.current.rea, attributes.minimum.reamin, attributes.maximum.reamax);
            break;
        case 'decAtt Str':
            attributes.current.str = decreasePhy(attributes.current.str, attributes.minimum.strmin, attributes.maximum.strmax);
            break;
        case 'decAtt Wil':
            attributes.current.wil = decreaseMen(attributes.current.wil, attributes.minimum.wilmin, attributes.maximum.wilmax);
            break;
        case 'decAtt Log':
            attributes.current.log = decreaseMen(attributes.current.log, attributes.minimum.logmin, attributes.maximum.logmax);
            knowingIsHalftheBattle(); //update the number of knowledge skills
            break;
        case 'decAtt Int':
            attributes.current.int = decreaseMen(attributes.current.int, attributes.minimum.intmin, attributes.maximum.intmax);
            knowingIsHalftheBattle(); //update the number of knowledge skills
            break;
        case 'decAtt Cha':
            attributes.current.cha = decreaseMen(attributes.current.cha, attributes.minimum.chamin, attributes.maximum.chamax);
            break;
        case 'incAtt Edg':
            attributes.current.edg = increaseSpec(attributes.current.edg, attributes.maximum.edgmax);
            break;
        case "incAtt Mag":
            if (magres == "adept" && attributes.current.mag < attributes.maximum.magmax) {
                powerPoints++;
            }
            attributes.current.mag = increaseSpec(attributes.current.mag, attributes.maximum.magmax);
            fociMaxRating = attributes.current.mag * 2;
            break;
        case "incAtt Res":
            attributes.current.res = increaseSpec(attributes.current.res, attributes.maximum.resmax);
            break;
        case "decAtt Edg":
            attributes.current.edg = decreaseSpec(attributes.current.edg, attributes.minimum.edgmin);
            break;
        case "decAtt Mag":
            if (magres == "adept" && attributes.current.mag > attributes.minimum.magmin) {
                powerPoints--;
            }
            attributes.current.mag = decreaseSpec(attributes.current.mag, attributes.minimum.magmin);
            fociMaxRating = attributes.current.mag * 2;
            break;
        case "decAtt Res":
            attributes.current.res = decreaseSpec(attributes.current.res, attributes.minimum.resmin);
            break;
        case "incAtt bow weaprating": //this increase the bows rating. A strange place to put this...but whatever.
            if (weapons.bow.rating < 10) {
                weapons.bow.rating++;
                bowUpdater();
            }
            break;
        case "decAtt bow weaprating": //this increase the bows rating. A strange place to put this...but whatever.
            if (weapons.bow.rating > 0) {
                weapons.bow.rating--;
                bowUpdater();
            }
            break;

    }

    function bowUpdater() {
        weapons.bow.damage = weapons.bow.rating + 2;
        weapons.bow.ap = Math.ceil(weapons.bow.rating / 4) * -1;
        weapons.bow.avail = weapons.bow.rating;
        weapons.bow.cost = weapons.bow.rating * 100;
    }

    if ($(this).closest("skilltitle")) { //if the incAtt or decAtt is in the div skilltitle, then its a skill, so update the active skills
        activeSkills = skillUpdater(activeSkills, skills);
    }
    if ($(this).closest("knowledgeskills")) { //this updates the knowledge skills
        knowledgeSkills = skillUpdater(knowledgeSkills, knowledgepoints);
    }

    function knowingIsHalftheBattle() { //this sets how many knowledge points a character gets
        knowledgepoints = (attributes.current.int + attributes.current.log) * 2; //sets the number of knowledge skill points
    }
    //skillupdater is very poorly written, refactor later!
    function skillUpdater(x, y) { //this function gets called by both the active and knowledge skills
        for (var skill in x) { //this will increase the skills
            if (y > 0) { //if you're out of skill points, don't add skills.
                if (x[skill]["rating"] < x[skill]["max"]) { //skill ratings can't be over the max skill
                    if (className == "incAtt " + [skill]) { //if increase attribute (now poorly named) is not with a skill, then do nothing
                        if (x == activeSkills) { //if this is an active skill decrease the skill points
                            skills--;
                        } else if (x == knowledgeSkills) { //if this is a knowledge skill decrease the knowledge skill points
                            knowledgepoints--;
                        }
                        x[skill]["rating"]++; //incease the rating of the skill by 1
                    }
                }
            }
            if (x[skill]["rating"] > 0 && className == "decAtt " + [skill]) { //if skill rating is over 0 and decrease Attribute is with the skill then do this stuff
                if (x == activeSkills) {
                    skills++;
                } else if (x == knowledgeSkills) {
                    knowledgepoints++;
                }
                x[skill]["rating"]--;
            } else if ((x[skill]["rating"] === 0) && (x == knowledgeSkills)) { // Removes knowledge skill if at zero and reduced again.
                if (className == "decAtt " + [skill]) {
                    $('.' + [skill]).remove(); // Technically removes table row. Does not delete array entry to avoid index problems.
                }
            }
        }
        return x;
    }
    for (var skill in groupSkills) { //this will increase the skill groups
        if (skillgroups > 0 && groupSkills[skill]["rating"] < skillgroupmax && className == "incAtt " + [skill]) {
            groupSkills[skill]["rating"]++;
            for (var key in groupSkills[skill]["skillsingroup"]) {
                var x = groupSkills[skill]["skillsingroup"][key];
                activeSkills[x]["rating"] = groupSkills[skill]["rating"];
                $(".incAtt" + "." + x).addClass("deact");
                $(".decAtt" + "." + x).addClass("deact");
            }
            skillgroups--;
        } else if (groupSkills[skill]["rating"] > 0 && className == "decAtt " + [skill]) {
            groupSkills[skill]["rating"]--;
            skillgroups++;
            for (var key2 in groupSkills[skill]["skillsingroup"]) {
                var x2 = groupSkills[skill]["skillsingroup"][key2];
                activeSkills[x2]["rating"] = groupSkills[skill]["rating"];
                if (groupSkills[skill]["rating"] === 0) {
                    $(".incAtt" + "." + x2).removeClass("deact");
                    $(".decAtt" + "." + x2).removeClass("deact");
                }
            }
        }
    }

    for (var prop in adeptPowers) {
        var power = adeptPowers[prop];
        if (prop == "improvedreflexes" && power["level"] > 0) { //this will reduce the cost of improved reflexes if it is activated
            power["cost"] = 1;
            if (power["level"] >= 1 && power["level"] < 3 && powerPoints - power["cost"] >= 0) {
                if (className == "incAtt " + prop) {
                    power["level"]++;
                    powerPoints = powerPoints - power["cost"];
                    attributes.initiative.iniphyDice++;
                    attributes.augment.rea++;
                }
            }
            if (power["level"] > 1) {
                if (className == "decAtt " + [prop]) {
                    power["level"]--;
                    powerPoints = powerPoints + power["cost"];
                    attributes.initiative.iniphyDice--;
                    attributes.augment.rea--;
                }
            }
        } else if (prop == "improvedphysicalattributebody" || prop == "improvedphysicalattributeagility" || prop == "improvedphysicalattributereaction" || prop == "improvedphysicalattributestrength") { //if the power is improve attribute then do this stuff
            if (powerPoints - power["cost"] >= 0 && power["level"] < 4 && className == "incAtt " + [prop]) {
                power["level"]++;
                powerPoints = powerPoints - power["cost"];

                addAttMod(power["attmod"]);
            }
            if (power["level"] > 1 && className == "decAtt " + prop) {
                power["level"]--;
                powerPoints = powerPoints + power["cost"];

                for (var key in power["attmod"]) {
                    switch (power["attmod"][key]) {
                        case "body":
                            attributes.augment.bod = minusAugmentAtt(attributes.augment.bod);
                            break;
                        case "reaction":
                            attributes.augment.rea = minusAugmentAtt(attributes.augment.rea);
                            break;
                        case "agility":
                            attributes.augment.agi = minusAugmentAtt(attributes.augment.agi);
                            break;
                        case "strength":
                            attributes.augment.str = minusAugmentAtt(attributes.augment.str);
                            break;
                    }
                }
            }
        } else {
            if (powerPoints - power["cost"] >= 0 && power["level"] < attributes.current.mag && className == "incAtt " + [prop]) {
                power["level"]++;
                powerPoints = powerPoints - power["cost"];

                for (var skill in power["skillmod"]) {
                    addMod(power["skillmod"][skill], power["level"]); //updates mods that power effect
                }

            }
            if (power["level"] > 1 && className == "decAtt " + [prop]) {
                power["level"]--;
                powerPoints = powerPoints + power["cost"];
                for (var skill in power["skillmod"]) {
                    minusMod(power["skillmod"][skill], power["level"]); //updates mods that power effect
                }
            }
        }
    }

    for (var item in inventory) { //this will be used to increase and decrease the weapon foci rating and license rating, and now clips too
        var itemhold = inventory[item]
        if ($(this).parents("#" + item).attr("id") == item) {
            if ($(this).attr("class") == item + " incAtt weaponfoci" && fociRating < fociMaxRating && focinumber < attributes.current.mag && itemhold["weaponfoci"] < 3 && nuyen - 7000 > 0 && karma - 3 > 0) {
                if (itemhold["weaponfoci"] == 0) {
                    focinumber++;
                }
                itemhold["weaponfoci"]++;
                inventoryStatUpdater(item, ".focirating.weaponfoci", itemhold["weaponfoci"]);
                fociRating++;
                nuyen -= 7000;
                inventory[item]["cost"] += 7000;
                karma -= 3;
            } else if ($(this).attr("class") == item + " decAtt weaponfoci" && itemhold["weaponfoci"] > 0) {
                itemhold["weaponfoci"]--;
                if (itemhold["weaponfoci"] == 0) {
                    focinumber--;
                }
                inventoryStatUpdater(item, ".focirating.weaponfoci", itemhold["weaponfoci"]);
                fociRating--;
                nuyen += 7000;
                itemhold["cost"] -= 7000;
                karma += 3;
            }
            if ($(this).attr("class") == item + " incAtt license" && itemhold["license"] < 4 && nuyen - 200 > 0) {
                itemhold["license"]++;
                inventoryStatUpdater(item, ".licenserating.license", itemhold["license"]);
                nuyen -= 200;
                itemhold["cost"] += 200;
            } else if ($(this).attr("class") == item + " decAtt license" && itemhold["license"] > 0) {
                itemhold["license"]--;
                inventoryStatUpdater(item, ".licenserating.license", itemhold["license"]);
                nuyen += 200;
                itemhold["cost"] -= 200;
            }
            if (itemhold["rating"] > 0) { //if rating 0 its a crossbow.
                var arrowPrice = itemhold["rating"] * 2;
                var injectPrice = itemhold["rating"] * 20;
            } else {
                var arrowPrice = 5;
                var injectPrice = 50;
            }
            if (itemhold.name == "shuriken") {
                var arrowPrice = 25;
            }
            if ($(this).attr("class") == item + " incAtt arrow" && nuyen - arrowPrice > 0) {
                itemhold["arrow"]++;
                inventoryStatUpdater(item, ".arrowNum.arrow", itemhold["arrow"]);
                nuyen -= arrowPrice;
                itemhold["cost"] += arrowPrice;
            } else if ($(this).attr("class") == item + " decAtt arrow" && itemhold["arrow"] > 0) {
                itemhold["arrow"]--;
                inventoryStatUpdater(item, ".arrowNum.arrow", itemhold["arrow"]);
                nuyen += arrowPrice;
                itemhold["cost"] -= arrowPrice;
            }
            if ($(this).attr("class") == item + " incAtt injarrow" && nuyen - injectPrice > 0) {
                itemhold["inject"]++;
                inventoryStatUpdater(item, ".arrowNum.injarrow", itemhold["inject"]);
                nuyen -= injectPrice;
                itemhold["cost"] += injectPrice;
            } else if ($(this).attr("class") == item + " decAtt injarrow" && itemhold["inject"] > 0) {
                itemhold["inject"]--;
                inventoryStatUpdater(item, ".arrowNum.injarrow", itemhold["inject"]);
                nuyen += injectPrice;
                itemhold["cost"] -= injectPrice;
            }


            if (itemhold.clip == "Clip") {
                var clipPrice = 5;
            } else {
                var clipPrice = 25;
            }
            if ($(this).attr("class") == item + " incAtt extraclips" && nuyen - clipPrice > 0) {
                itemhold["extraclips"]++;
                inventoryStatUpdater(item, ".numofclips.extraclips", itemhold["extraclips"]);
                nuyen -= clipPrice;
                itemhold["cost"] += clipPrice;
            } else if ($(this).attr("class") == item + " decAtt extraclips" && itemhold["extraclips"] > 0) {
                itemhold["extraclips"]--;
                inventoryStatUpdater(item, ".numofclips.extraclips", itemhold["extraclips"]);
                nuyen += clipPrice;
                itemhold["cost"] -= clipPrice;
            }

        }
    };

    function inventoryStatUpdater(x, y, z) { //x=the name of the item, y=the classes to target the table to update the stat. z=the stat to show
        $("#" + x + " " + y).empty().append(z);
    }

    function increasePhy(x, y) { //this shit increases an attribute while decreating the points you can spend
        if (phyAttMax == true) {
            y--;
        }
        if (attribute > 0 && x < y) {
            x++;
            attribute--;
            if (x == y) {
                phyAttMax = true;
            }
        }
        return x;
    }

    function increaseMen(x, y) { //this shit increases an attribute while decreating the points you can spend
        if (phyAttMax == true) {
            y--;
        }
        if (attribute > 0 && x < y) {
            x++;
            attribute--;
            if (x == y) {
                phyAttMax = true; //if i ever need to change this back to mental attrubuteing being difference the variable is menAttMax
            }
        }
        return x;
    }

    function decreasePhy(x, y, z) { //this shit decreases and attribute while increating the points you can spend
        if (x == z) {
            phyAttMax = false;
        }
        if (x > y) {
            x--;
            attribute++;
        }
        return x;
    }

    function decreaseMen(x, y, z) { //this shit decreases and attribute while increating the points you can spend
        if (x == z) {
            phyAttMax = false;
        }
        if (x > y) {
            x--;
            attribute++;
        }
        return x;
    }

    function increaseSpec(x, y) { //this is for special attributes, they get their own funcation because they're special
        if (specAttribute > 0) {
            if (x < y) {
                x++;
                specAttribute--;
            }
        }
        return x;
    }

    function decreaseSpec(x, y) { //for when special people make a mistake
        if (x > y) {
            x--;
            specAttribute++;
        }
        return x;
    }
    disUpdater(); //this was ment to orignally update the attributes, but is now used for EVERYTHING
}

function addAugmentAtt(x) {
    if (x < 4) {
        x++;
    }
    return x;
}

function minusAugmentAtt(x) {
    if (x > 0) {
        x--;
    }
    return x;
}
$(".mage, .techno, .mystic, .adept, .aspect").click( //this part will call the attributes.current.mag/attributes.current.res function
    selectmagres
);

function selectmagres() { //Magic/Resonance controls
    if ($(this).hasClass('deact') || $(this).hasClass('selected')) { //this will make it so that if the button is deactivated that it won't do anything
        return;
    } else {
        fnselect($(this)); //highlights what's been clicked on

        if ($(this).hasClass('mage')) { //attributes.current.mag man doing attributes.current.mag stuff
            magres = "mage";
            awaken("Mag", "Res");
            magemysticsetting();
        }
        if ($(this).hasClass('mystic')) { //mystic adept stuff
            magres = "mystic";
            awaken("Mag", "Res");
            magemysticsetting();
        }
        if ($(this).hasClass('techno')) { //technomancer stuff
            magres = "technomancer";
            awaken("Res", "Mag");
            switch ("magres") {
                case priorityA:
                    attributes.current.mag = 0;
                    powerPoints = 0;
                    attributes.current.res = 6;
                    attributes.minimum.resmin = 6;
                    skills = skills + 10;
                    forms = 5;
                    spells = 0;
                    break;
                case priorityB:
                    attributes.current.mag = 0;
                    powerPoints = 0;
                    attributes.current.res = 4;
                    attributes.minimum.resmin = 4;
                    skills = skills + 8;
                    forms = 2;
                    spells = 0;
                    break;
                case priorityC:
                    attributes.current.mag = 0;
                    powerPoints = 0;
                    attributes.current.res = 3;
                    attributes.minimum.resmin = 3;
                    forms = 1;
                    spells = 0;
                    break;
            }
        }
        if ($(this).hasClass('adept')) { //adept kung fu stuff
            magres = "adept";
            awaken("Mag", "Res");
            switch ("magres") {
                case priorityB:
                    attributes.current.mag = 6;
                    powerPoints = 6.0;
                    attributes.minimum.magmin = 6;
                    attributes.current.res = 0;
                    skills = skills + 4;
                    spells = 0;
                    forms = 0;
                    break;
                case priorityC:
                    attributes.current.mag = 4;
                    powerPoints = 4.0;
                    attributes.minimum.magmin = 4;
                    attributes.current.res = 0;
                    skills = skills + 2;
                    spells = 0;
                    forms = 0;
                    break;
                case priorityD:
                    attributes.current.mag = 2;
                    powerPoints = 2.0;
                    attributes.minimum.magmin = 2;
                    attributes.current.res = 0;
                    spells = 0;
                    forms = 0;
                    break;
            }
        }
        if ($(this).hasClass('aspect')) { //aspect mage stuff
            magres = "aspect";
            awaken("Mag", "Res");
            switch ("magres") {
                case priorityB:
                    attributes.current.mag = 5;
                    powerPoints = 0;
                    attributes.minimum.magmin = 5;
                    attributes.current.res = 0;
                    skillgroups = skillgroups + 4;
                    spells = 0;
                    forms = 0;
                    break;
                case priorityC:
                    attributes.current.mag = 3;
                    powerPoints = 0;
                    attributes.minimum.magmin = 3;
                    attributes.current.res = 0;
                    skillgroups = skillgroups + 2;
                    spells = 0;
                    forms = 0;
                    break;
                case priorityD:
                    attributes.current.mag = 2;
                    powerPoints = 0;
                    attributes.minimum.magmin = 2;
                    attributes.current.res = 0;
                    spells = 0;
                    forms = 0;
                    break;
            }
        }

        fociMaxRating = attributes.current.mag * 2;

    }
    disUpdater();
}

function magemysticsetting() { //since mystics and mages have the same stuff, they get a funcation
    switch ("magres") {
        case priorityA:
            attributes.current.mag = 6;
            powerPoints = 0;
            attributes.minimum.magmin = 6;
            attributes.current.res = 0;
            skills = skills + 10;
            spells = 10;
            forms = 0;
            break;
        case priorityB:
            attributes.current.mag = 4;
            powerPoints = 0;
            attributes.minimum.magmin = 4;
            attributes.current.res = 0;
            skills = skills + 8;
            spells = 7;
            forms = 0;
            break;
        case priorityC:
            attributes.current.mag = 3;
            powerPoints = 0;
            attributes.minimum.magmin = 3;
            attributes.current.res = 0;
            spells = 5;
            forms = 0;
            break;
    }
}

function awaken(x, y) { //this is suppose to unhide attributes.current.mag or resonance and then hide the other stat
    $("." + x).removeClass("hide");
    $("." + y).addClass("hide");
}
//Skills to pay the bills

function setUpSkills() { //Well, this is used for more then just skills now. It should only run once at start up
    theLabeler(".skilllabel", ".skills"); //I messed up when I made the render loop for the skills. I didn't label them. This fixes that.
    theLabeler("#adeptlabel", "#powerlist");
    theLabeler(".label.combat", ".spells.combat");
    theLabeler(".label.detection", ".spells.detection");
    theLabeler(".label.health", ".spells.health");
    theLabeler(".label.illusion", ".spells.illusion");
    theLabeler(".label.manipulation", ".spells.manipulation");
    theLabeler(".label.complexforms", ".complexforms.library");
    theLabeler(".label.bow", ".projectiles.bow");
    theLabeler(".label.crossbow", ".projectiles.crossbow");
    theLabeler(".label.throwingweapon", ".projectiles.throwingweapons");
    theLabeler(".label.firearm", ".firearms");

    function theLabeler(x, y) {
        $(x).appendTo(y);
    }

    $(".knowledgename").appendTo(".namingStuffIsHard");

    for (var x in weapons) { //addes exotic melee weapons to the skill list
        if (weapons[x]["category"] == "exoticmeleeweapon") {
            makeExoticSkill("agi", weapons[x], "Exotic Melee (", "agility");
        } else if (weapons[x]["category"] == "exoticrangedweapon") {
            makeExoticSkill("agi", weapons[x], "Exotic Range (", "agility");
        }
    }
    function makeExoticSkill(w, x, y, z) { //w=attibute variable,x=weapon[name of exotic weapon], y=type of exotic skill, z=attibute
        activeSkills[x.skill] = {
            name: y + x.skillName + ")",
            catalog: z,
            stat: w,
            rating: 0,
            mod: 0,
            max: 6,
            defaultable: false
        };
    }

    upNAtEm(activeSkills);
    upNAtEm(knowledgeSkills);

    function upNAtEm(x) { //function to set up the active and knowledge skills, "Up and at 'em, Atom Ant!"
        for (var skill in x) {
            skillsum = funSkillSum(x[skill]["defaultable"], x[skill]["rating"], x[skill]["mod"], attributes.current[x[skill]["stat"]]);

            $("<tr class='" + [skill] + "'><td class='incAtt " + [skill] + "'>+</td><td class='rating'>" + x[skill]["rating"] + "</td><td class='decAtt " + [skill] + "'>-</td><td class='skillName'>" + x[skill]["name"] + "</td><td class='stat'>" + attributes.current[x[skill]["stat"]] + "</td><td class= 'mod'>" + x[skill]["mod"] + "</td><td class='skillsum'>" + skillsum + "</td><tr>")
                .appendTo("." + x[skill]["catalog"]);
        }
    }

    for (var skill in groupSkills) { //this for loop sets up the skill groups
        $("#skillgrouplist").find("tbody").append($("<tr class='" + [skill] + "'><td class='incAtt " + [skill] + "'>+</td><td class='" + [skill] + " rating'>" + groupSkills[skill]["rating"] + "</td><td class='decAtt " + [skill] + "'>-</td><td class='skillgroupname'>" + groupSkills[skill]["name"] + "</td><td class='skillsin " + [skill] + "'></td></tr>"));
        for (var key in groupSkills[skill]["skillsingroup"]) {
            $(".skillsin" + "." + [skill]).append(activeSkills[groupSkills[skill]["skillsingroup"][key]]["name"] + ", ");

        }
    }

    for (var power in adeptPowers) { //this for loop sets up the adept powers
        $("#powerlist").append($("<tr class='" + [power] + "'><td id='" + [power] + "'class='add " + [power] + " button'><strong>-</strong></td><td class='incAtt " + [power] + " deact'>+</td><td class='level " + [power] + "'>" + adeptPowers[power]["level"] + "</td><td class='decAtt " + [power] + " deact'>-</td><td class='name " + [power] + "'>" + adeptPowers[power]["name"] + "</td><td class='cost " + [power] + "'>" + adeptPowers[power]["cost"] + "</td><td class='activation " + [power] + "'>" + adeptPowers[power]["activation"] + "</td><td class='drain " + [power] + "'>n/a</td></tr>"));

        if (adeptPowers[power]["drain"] == true) {
            $(".drain." + [power]).empty().append($(adeptPowers[power]["level"]));
        }
    }

    for (var spell in spellforms) { //this sets up the spells
        var spellhold = spellforms[spell];
        if (spellforms[spell]["category"] == "combat") {
            $(".spells.combat").append($("<tr id='" + spell + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='direct " + spell + "'></td><td class='element " + spell + "'>" + spellhold["element"] + "</td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldam " + spell + "'>" + spellhold["damage"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>"));
            if (spellhold["direct"] == true) {
                $("<span>Direct</span>").appendTo($(".direct." + spell));
            } else {
                $("<span>Indirect</span>").appendTo($(".direct." + spell));
            }
        }

        if (spellforms[spell]["category"] == "detection") {
            $(".spells.detection").append($("<tr id='" + spell + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='illact " + spell + "'>" + spellhold["active"] + "</td><td class='direction " + spell + "'>" + spellhold["direction"] + "</td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>"));
        }

        if (spellforms[spell]["category"] == "health") {
            $(".spells.health").append($("<tr id='" + spell + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='heaEss " + spell + "'></td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>"));
            if (spellhold["essence"] == true) {
                $(".heaEss." + spell).append($("<span>Essence</span>"));
            } else {
                $(".heaEss." + spell).append($("<span>n/a</span>"));
            }
        }

        if (spellforms[spell]["category"] == "illusion") {
            $(".spells.illusion").append($("<tr id='" + spell + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='realistic " + spell + "'></td><td class='sense " + spell + "'>" + spellhold["sense"] + "</td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>"));
            if (spellhold["realistic"] == true) {
                $(".realistic." + spell).append($("<span>Realistic</span>"))
            } else {
                $(".realistic." + spell).append($("<span>Obvious</span>"))
            }
        }

        if (spellforms[spell]["category"] == "manipulation") {
            $(".spells.manipulation").append($("<tr id='" + spell + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='effect " + spell + "'>" + spellhold["effect"] + "</td><td class='damage " + spell + "'>" + spellhold["damage"] + "</td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>"));
        }
    }
    spellinput(" ", "detectlifeform", "Life Form");
    spellinput(" Extended", "detectlifeformextended", "Life Form");
    spellinput(" ", "detectobject", "Object");

    function spellinput(x, y, z) { //so people can input their own detection spells
        $(".spellname." + y).empty().append($("<span>Detect " + "<input type='text' class='" + y + "' placeholder='" + z + "'>" + x + "</span>"));
    }

    spellattselect("decreaseattribute", "Decrease ");
    spellattselect("increaseattribute", "Increase ");

    function spellattselect(x, y) { //so people can select which attabute is used for the increase/decrease spells
        $(".spellname." + x).empty().append($("<span>" + y + "<select class=" + x + "><option value=''>[Attribute]</option><option value='Body'>Body</option><option value='Agility'>Agility</option><option value='Reaction'>Reaction</option><option value='Strength'>Strength</option><option value='Will'>Will</option><option value='Logic'>Logic</option><option value='Intuition'>Intuition</option><option value='Charisma'>Charisma</option></select>" + "</span>"))
    }

    for (var form in complexforms) {
        var formhold = complexforms[form];
        $(".complexforms.library").append($("<tr id='" + form + "'class='form'><td class='formact " + form + " button'><strong>-</strong></td><td class='formname " + form + "'>" + formhold["name"] + "</td><td class='formtarget " + form + "'>" + formhold["target"] + "</td><td class='formdur " + form + "'>" + formhold["duration"] + "</td><td class='fading " + form + "'>" + formhold["fading"] + "</td></tr>"));
    }

    $(".melee.label").appendTo($(".meleeweapon")); //this labels the melee weapons, but I have a function that does this, so i'm stupid for not using that function

    for (var item in weapons) { //this pulls the weapons stats from the weapons object to populate the page
        var itemhold = weapons[item];

        switch (itemhold.category) {
            case "blades":
            case "clubs":
            case "unarmedcombat":
            case "exoticmeleeweapon":
                //this one populates the melee weapons
                $("<tr id='" + item + "'><td class='weapact " + item + " button'><strong>+</strong></td><td class='weapname " + item + "'>" + itemhold["name"] + "</td><td class='accuracy " + item + "'>" + itemhold["accuracy"] + "(" + (itemhold["accuracy"] + itemhold["accmod"]) + ")" + "</td><td class='reach " + item + "'>" + itemhold["reach"] + "(" + (itemhold["reach"] + reachmod) + ")" + "</td><td class='damage " + item + "'>" + (itemhold["stat"] + itemhold["damage"]) + "(" + (itemhold["stat"] + itemhold["damage"] + itemhold["dvmod"]) + ")" + itemhold["damtype"] + " " + itemhold["element"] + "</td><td class='ap " + item + "'>" + itemhold["ap"] + "</td><td class='avail " + item + "'>" + itemhold["avail"] + " " + itemhold["restrict"] + "</td><td class='cost " + item + "'>" + itemhold["cost"] + "&#65509" + "</td><td>" + itemhold.ref.book + " p" + itemhold.ref.page + "</td></tr>").appendTo($(".meleeweapon." + itemhold["category"]));
                break;
            case "bow":
            case "crossbow":
            case "throwingweapons":
                //this one populates the projectiles
                $("<tr id='" + item + "'><td class='weapact " + item + " button'><strong>+</strong></td><td class='incAtt " + item + " weaprating'>+</td><td class='weaprating " + item + " weapratingnum'>" + itemhold["rating"] + "</td><td class='decAtt " + item + " weaprating'>-</td><td class='weap accuracy " + item + "'>" + itemhold["arruracy"] + "</td><td class='weap damage " + item + "'>" + itemhold["damage"] + "</td><td class='weap ap " + item + "'>" + itemhold["ap"] + "</td><td class='weap avail " + item + "'>" + itemhold["avail"] + "</td><td class='weap cost " + item + "'>" + itemhold["cost"] + "</td><td>" + itemhold.ref.book + " p" + itemhold.ref.page + "</td></tr>").appendTo(".projectiles." + itemhold["category"]);
                break;
            default:
                //firearms
                $("<tr id='" + item + "'><td class='weapact " + item + " button'><strong>+</strong></td><td class='weapname " + item + "'>" + itemhold["name"] + "</td><td class='accuracy " + item + "'>" + itemhold["accuracy"] + "(" + (itemhold["accuracy"] + itemhold["accmod"]) + ")" + "</td><td class='damage " + item + "'>" + itemhold["damage"] + "(" + (itemhold["damage"] + itemhold["dvmod"]) + ")" + itemhold["damtype"] + " " + itemhold["element"] + "</td><td class='ap " + item + "'>" + itemhold["ap"] + "</td><td class='modes " + item + "'></td><td class='RC " + item + "'>" + itemhold["rc"] + "</td><td class='ammo " + item + " clip'>" + itemhold["ammo"] + " " + itemhold["clip"] + "</td><td class='avail " + item + "'>" + itemhold["avail"] + " " + itemhold["restrict"] + "</td><td class='cost " + item + "'>" + itemhold["cost"] + "&#65509" + "</td></tr>").appendTo(".firearms." + itemhold["category"]);
                break;
        }


        for (var firemode in itemhold["mode"]) {
            $(".modes." + item).append(itemhold["mode"][firemode] + ",<br/>");
        }
        for (var diffAmmo in itemhold["altammo"]) {
            switch (diffAmmo) {
                case "ammo":
                    $("." + diffAmmo + "." + item).append("/" + itemhold["altammo"][diffAmmo]);
                    break;
                case "clip":
                    $("." + diffAmmo + "." + item).append(" " + itemhold["altammo"][diffAmmo]);
                    break;
            }
        }
        if (itemhold["avail"] > maxAvail) {
            $(".weapact." + item).addClass("deact").empty().append("<span>-</span>");
        }
    }
    $(".projectiles.crossbow,#shuriken").find(".weaprating").remove(); //this removes the rating information for the crossbows, because crossbows don't have ratings

    for (var aug in augmentations) { //render augmentations
        switch (aug) {
            case "obvious":
                for (var limb in augmentations[aug]) {
                    $("#cyberlimbs").append("<tr class=" + limb + "><td class='buyAug button'><strong>+</strong></td><td class='limb'>" + augmentations[aug][limb]["name"] + "</td><td class='type'>Obvious</td><td class='grade'>Standard</td><td class='location'>Left</td><td class='strUp button'>+</td><td class='str'>3</td><td class='strDown button'>-</td><td class='agiUp button'>+</td><td class='agi'>3</td><td class='agiDown button'>-</td><td class='cap'>" + augmentations[aug][limb]["capmax"] + "</td><td class='avail'>" + augmentations[aug][limb]["avail"] + "</td><td class='ess'>" + augmentations[aug][limb]["essence"] + "</td><td class='price'>" + augmentations[aug][limb]["cost"] + "&yen;</td></tr>");
                    switch (augmentations[aug][limb]["slot"]) {
                        case "chest":
                            $("." + limb + " .location").empty().append("Chest");
                            break;
                        case "head":
                            $("." + limb + " .location").empty().append("Head");
                            break;
                        case "arm":
                        case "leg":
                            $("." + limb + " .location").empty().append("<select><option value='left'>Left</option><option value='right'>Right</option></select> " + augmentations[aug][limb]["slot"]);
                            break;

                    }
                }
                break;
        }
    }

    $("#cyberlimbs .type").empty().append("<select><option value='obvious'>Obvious</option><option value='synthetic'>Synthetic</option></select>");
    $("#cyberlimbs .grade").empty().append("<select><option value='used'>Used</option><option value='standard' selected>Standard</option><option value='alpha'>Alpha</option><option value='beta'>Beta</option><option value='delta'>Delta</option></select>");

    //adding ammo details below

    $(".ammo.label").appendTo(".ammunition"); //adds ammo label

    for (var ammo in ammunition) {
        var ammotype = ammunition[ammo];

        switch (ammotype["class"]) {
            case "taserammo":
            case "specialammo":
            case "cannonammo":
                abnormalAmmo(ammotype, ammo);
                break;
            case "grenades":
                explosivesammo("grenadeammo", ammo, ammotype);
                break;
            case "rockets":
                explosivesammo("rocketammo", ammo, ammotype);
                break;
            case "none":
                $(".standard.ammunition").append("<tr class='" + ammo + "'><td class='buyammo button'><strong>+</strong></td><td class='ammountofammo'>0</td><td class='sellammo button'><em>-</em></td><td class='ammoname'>" + ammotype["name"] + "</td><td class='dammod'>" + ammotype["dammod"] + " " + ammotype["typemod"] + " " + ammotype["elemod"] + "</td><td class='apmod'>" + ammotype["apmod"] + "</td><td class='avail'>" + ammotype["avail"] + " " + ammotype["restrict"] + "</td><td class='cost'>" + ammotype["cost"] + "&#65509</td></tr>");
                break;
        }

        if (ammotype["avail"] > maxAvail) {
            $("." + ammo + " .button").addClass("deact");
        }

    }

    function explosivesammo(x, y, z) {
        $("." + x).append("<tr class='" + y + "'><td class='buygrenades button'><strong>+</strong></td><td class='ammountofammo'>0</td><td class='sellgrenades button'><em>-</em></td><td class='grenadesname'>" + z["name"] + "</td><td class='grenadesdammod'>" + z["dammod"] + " " + z["typemod"] + " " + z["elemod"] + "</td><td class='apmod'>" + z["apmod"] + "</td><td class='blast'>" + z["blast"] + "</td><td class='avail'>" + z["avail"] + " " + z["restrict"] + "</td><td class='cost'>" + z["cost"] + "&#65509</td></tr>");
    }

    function abnormalAmmo(x, y) {
        $("." + x["class"]).append("<tr class='" + y + "'><td class='buyammo button'><strong>+</strong></td><td class='ammountofammo'>0</td><td class='sellammo button'><em>-</em></td><td class='ammoname'>" + x["name"] + "</td><td class='dammod'>" + x["dammod"] + x["typemod"] + " " + x["elemod"] + "</td><td class='apmod'>" + x["apmod"] + "</td><td class='avail'>" + x["avail"] + " " + x["restrict"] + "</td><td class='cost'>" + x["cost"] + "&#65509</td></tr>");
    }

    $(".gas .grenadesname").empty().append("<select class='toxicgas'></select>");

    for (var dose in toxin) {
        if (toxin[dose]["avail"] <= maxAvail) {
            $(".toxicgas").append("<option value='" + dose + "'>" + toxin[dose]["name"] + "</option>")
        }
    }

    $(".holdoutammo .tracer, .lightammo .tracer, .heavyammo .tracer, .sniperammo .tracer, .shotgunammo .tracer").remove();

    $("#explosive .label").appendTo($(".explosives"));

    for (var bomb in explosives) {
        $("." + bomb + ".explosives").append("<tr class='" + bomb + "'><td class='buybomb button'><strong>+</strong></td><td class='bombup button'>+</td><td class='explosiverating'>" + explosives[bomb]["rating"] + "</td><td class='bombdown button'>-</td><td>" + explosives[bomb]["avail"] + " " + explosives[bomb]["restrict"] + "</td><td class='bombbond'>" + explosives[bomb]["cost"] + "&#65509;</td></tr>");
    }

    $(".commercial .bombup,.commercial .bombdown, .plastic .buybomb").addClass("deact");
    $(".plastic .buybomb").empty().append("-");


    $(".commlinks").appendTo("#links"); //sets the commlink labels
    $(".cyberdecks").appendTo("#decks"); //sets the cyberdeck labels
    $(".rccs").appendTo("#consoles"); //sets the RCC labels

    for (var devicename in electronics) { //this populates the electronic devices
        var device = electronics[devicename];
        switch (device.type) {
            case "commlink":
                $("#links").append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["model"] + "</td><td>" + device["device"] + "</td><td>" + device["avail"] + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "deck":
                $("#decks").append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["model"] + "</td><td>" + device["device"] + "</td><td>" + device["array"] + "</td><td>" + device["programs"] + "</td><td>" + device["avail"] + " " + device["restrict"] + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "rcc":
                $("#consoles").append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["model"] + "</td><td>" + device["device"] + "</td><td>" + device["dataprocess"] + "</td><td>" + device["firewall"] + "</td><td>" + device["avail"] + " " + device["restrict"] + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "accessory":
                $("#eccessories").append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["name"] + "</td><td>" + device["device"] + "</td><td>" + device["avail"] + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "rfid":
                $('#rfid').append("<tr class='" + devicename + "'><td class='buyUp button'><strong>+</strong></td><td class='numrfid'>0</td><td class='sellDown button'><em>-</em></td><td>" + device["name"] + "</td><td>" + device["device"] + "</td><td>" + device["avail"] + " " + device.restrict + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "credsticks":
                $('#credsticks').append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["name"] + "</td><td>" + device["maxvalue"] + "</td><td>" + device["avail"] + " " + device.restrict + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "identification":
                $('#identification').append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td class='ratingUp button'>+</td><td class='commrating'>1</td><td class='ratingDown button'>-</td><td>" + device["name"] + " <input type='text' class='fakename' placeholder='For?'>" + "</td><td class='avail'>" + device["avail"] + " " + device.restrict + "</td><td class='price'>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "tools":
                $('#tools').append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + "<input type='text' class='toolname' placeholder='Skill name'> " + device["name"] + "</td><td>" + device["avail"] + " " + device.restrict + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "restraints":
                $('#restraints').append("<tr class='" + devicename + "'><td class='buyUp button'><strong>+</strong></td><td class='numrfid'>0<td class='sellDown'><em>-</em></td></td><td>" + device["name"] + "</td><td>" + device.armor + "</td><td>" + device.structure + "</td><td>" + device["avail"] + " " + device.restrict + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "chemicals":
                $('#chemicals').append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["name"] + "</td><td>" + device["avail"] + " " + device.restrict + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "grapplegungear":
                $('#grapplegungear').append("<tr class='" + devicename + "'><td class='buydevice button'><strong>+</strong></td><td>" + device["name"] + "</td><td>" + device["avail"] + " " + device.restrict + "</td><td>" + device["cost"] + "&yen;</td></tr>");
                break;
            case "grapplerope":
            case "docwagon":
            case "reagents":
                bulkBuyGear(device, devicename);
                break;
            case "communications":
            case "optics":
            case "audio":
            case "securitydevice":
            case "bnegear":
            case "survivalgear":
            case "biotech":
            case "slappatches":
            case "enchantingfoci":
            case "metamagicfoci":
            case "powerfoci":
            case "magicallodgematerials":
                ratingGear(device, devicename);
                break;
            case "qifoci":
                ratingGear(device, devicename);
                $("#" + device.type + " ." + devicename + " .name").after("<td class='adeptPowers'><select></select></td>");
                for (var power in adeptPowers) {
                    $("#" + device.type + " ." + devicename + " .adeptPowers select").append("<option value='" + power + "'>" + adeptPowers[power]["name"] + "</option>");
                };
                break;
            case "spellfoci":
                ratingGear(device, devicename);
                $("#" + device.type + " ." + devicename + " .name").after("<td class='magicType'><select></select></td>");
                if (devicename != "ritualspellcastingfocus") {
                    for (var spellCat in spellType) {
                        $("#" + device.type + " ." + devicename + " .magicType select").append("<option value='" + spellType[spellCat] + "'>" + spellType[spellCat] + "</option>");
                    };
                } else {
                    for (var spellCat in ritualKeywords) {
                        $("#" + device.type + " ." + devicename + " .magicType select").append("<option value='" + ritualKeywords[spellCat] + "'>" + ritualKeywords[spellCat] + "</option>");
                    };
                }

                break;
            case "spiritfoci":
                ratingGear(device, devicename);
                $("#" + device.type + " ." + devicename + " .name").after("<td class='magicType'><select></select></td>");
                for (var spirit in spiritType) {
                    $("#" + device.type + " ." + devicename + " .magicType select").append("<option value='" + spiritType[spirit] + "'>" + spiritType[spirit] + "</option>");
                };
                break;
        }

        if (device["avail"] > maxAvail) {
            $("." + devicename + " .buydevice").addClass("deact").empty().append("-");
        }
        if (typeof device.rating === "undefined") {
            $("." + devicename + " .commrating").empty().append("n/a");
        }
        if (typeof device.availx === "undefined") {
            $("." + devicename + " .ratingUp,." + devicename + " .ratingDown").addClass("deact");
        }
    }

    for (var type in armor) {
        $("#clotharmor #bodyarmor tbody").append("<tr class='" + type + "'><td class='buyarmor button'><strong>+</strong></td><td>" + armor[type]["name"] + "</td><td>" + armor[type]["armor"] + "</td><td>" + armor[type]["avail"] + " " + armor[type]["restrict"] + "</td><td>" + armor[type]["cost"] + "&#65509;</td></tr>");
        if (armor[type]["avail"] > maxAvail) {
            $("." + type + " .buyarmor").addClass("deact").empty().append("-");
        }
    }

    //putmorestuffhere

    function ratingGear(x, y) { //x=device, y=devicename
        $('#' + x.type).append("<tr class='" + y + "'><td class='buydevice button'><strong>+</strong></td><td class='ratingUp button'>+</td><td class='commrating'>" + x.rating + "</td><td class='ratingDown button'>-</td><td class='name'>" + x.name + "</td><td class='avail'>" + x.avail + " " + x.restrict + "</td><td class='price'>" + x.cost + "&yen;</td></tr>");
    };

    function bulkBuyGear(x, y) { //x=device, y=devicename
        $('#' + x.type).append("<tr class='" + y + "'><td class='buyUp button'><strong>+</strong></td><td class='numrfid'>0</td><td class='sellDown button'><em>-</em></td><td>" + x.name + "</td><td>" + x.avail + " " + x.restrict + "</td><td>" + x.cost + "&yen;</td></tr>");
    }

}

function funSkillSum(w, x, y, z) { //used to calculate the dice pool of a skill
    var sum;
    if (w == true && x == 0) {
        sum = y + z + x - 1;
    } else if (w == false && x == 0) {
        sum = "n/a";
    } else {
        sum = y + z + x;
    }
    return sum;
}

function renderSkills() { //this has become for rendering/updating anything that can be accessed with a for loop; it seems.
    for (var prop in activeSkills) {
        attUpdater("stat", prop, activeSkills);
        statUpdater("rating", prop, activeSkills);
        statUpdater("mod", prop, activeSkills);
        activeSkills[prop]["skillsum"] = funSkillSum(activeSkills[prop]["defaultable"], activeSkills[prop]["rating"], activeSkills[prop]["mod"], attributes.current[activeSkills[prop]["stat"]] + attributes.augment[activeSkills[prop]["stat"]]);
        dicePoolUpdater(activeSkills[prop]["skillsum"], [prop]);
    }
    for (var prop in knowledgeSkills) {
        switch (knowledgeSkills[prop]["catalog"]) { //knowledge skill shit is here
            case "academic":
            case "professional":
                knowledgeSkills[prop]["stat"] = "log";
                break;
            case "interests":
            case "street":
            case "language":
                knowledgeSkills[prop]["stat"] = "int";
                break;
        }

        attUpdater("stat", [prop], knowledgeSkills);
        statUpdater("rating", [prop], knowledgeSkills);
        statUpdater("mod", [prop], knowledgeSkills);
        skillsum = funSkillSum(knowledgeSkills[prop]["defaultable"], knowledgeSkills[prop]["rating"], knowledgeSkills[prop]["mod"], attributes.current[knowledgeSkills[prop]["stat"]] + attributes.augment[knowledgeSkills[prop]["stat"]]);
        dicePoolUpdater(skillsum, [prop]);
    }

    for (var prop in adeptPowers) { //rendering and updating adept powers!
        statUpdater("level", prop, adeptPowers);
        if (adeptPowers[prop]["drain"] == true) {
            $("." + prop + " .drain").empty().append("<span>" + adeptPowers[prop]["level"] + "</span>");
        }
    }

    function attUpdater(x, y, z) { //attibute updater
        $("." + y + " ." + x).empty().append(attributes.current[z[y][x]] + attributes.augment[z[y][x]]);
    }

    function statUpdater(x, y, z) { //all other stats
        $("." + y + " ." + x).empty().append("<span>" + z[y][x] + "</span>");
    }

    function dicePoolUpdater(x, y) {
        $("." + y + " .skillsum").empty().append("<span>" + x + "</span>");
    }

    for (var skill in groupSkills) {
        $("." + [skill] + " ." + "rating").empty().append("<span>" + groupSkills[skill]["rating"] + "</span>");
    }

    for (var item in weapons) {
        if (weapons[item]["stat"] > 0) {
            weapons[item]["stat"] = attributes.current.str + attributes.augment.str;
        }
        if (weapons[item]["skill"] == "unarmedcombat" || weapons[item]["skill"] == "throwingweapons") {
            weapons[item]["accuracy"] = attributes.limits.phyLimit + attributes.limitMod.phyLimitMod;
        }
        augmentedStat("accmod", "accuracy", [item], weapons)
        $(".reach." + item).empty().append("<span>" + weapons[item]["reach"] + "(" + (weapons[item]["reach"] + reachmod) + ")" + "</span>");
        $(".weaprating." + item + ".weapratingnum").empty().append(weapons[item]["rating"]);
        $(".ap." + item).empty().append(weapons[item]["ap"]); //render weapon ap
        $(".avail." + item).empty().append(weapons[item]["avail"] + " " + weapons[item]["restrict"]);
        $(".cost." + item).empty().append("<span>" + weapons[item]["cost"] + "&#65509</span>");
        augmentedDam("damtype", "element", "stat", "damage", [item], weapons); //render weapon damage this also changes the ap for weapons with altammo
    }

    for (var itemNum in inventory) { //this is suppose to update the nuyen price of the time

        if (typeof inventory[itemNum]["skill"] === 'undefined') {

        } else if (inventory[itemNum]["weaponfoci"] > 0 && activeSkills[inventory[itemNum]["skill"]]["skillsum"] != "n/a") { //this if statements sets the dice pool for the item
            var dp = activeSkills[inventory[itemNum]["skill"]]["skillsum"] + inventory[itemNum]["weaponfoci"];
        } else if (inventory[itemNum]["rating"] > attributes.current.str) { //this is for bows
            var dp = activeSkills[inventory[itemNum]["skill"]]["skillsum"] - ((inventory[itemNum]["rating"] - attributes.current.str) * 3);
        } else { //this is for everything else
            var dp = activeSkills[inventory[itemNum]["skill"]]["skillsum"];
        }
        $("#" + itemNum + " .weaponDP").empty().append("<span>" + (dp) + "</span>"); //this renders the dice pool
        $("#" + itemNum + " .custWeapPrice").empty().append("<span>" + inventory[itemNum]["cost"] + "&#65509</span>"); //this renders the cost
        $("#" + itemNum + " .acc").empty().append(inventory[itemNum]["accuracy"] + "(" + (inventory[itemNum]["accuracy"] + inventory[itemNum]["accmod"]) + ")"); //this renders accuacy of a gun
        $("#" + itemNum + " .rc").empty().append(inventory[itemNum]["rc"] + Math.ceil((attributes.current.str / 3) + 1) + "(" + (inventory[itemNum]["rc"] + inventory[itemNum]["rcmod"] + Math.ceil((attributes.current.str / 3) + 1)) + ")"); //this renders the recoil comp
        $("#" + itemNum + " .avail").empty().append(inventory[itemNum]["avail"] + " " + inventory[itemNum]["restrict"]); //this renders the avail of a gun
    }

    function augmentedStat(w, x, y, z) { //w-stat modefiers, x=class and key of the stat, y=name of the item and key of the item, z=the object to have the keys work on
        $("." + y + "." + x).empty().append("<span>" + z[y][x] + "(" + (z[y][x] + z[y][w]) + ")" + "</span>");
    }

    function augmentedDam(u, v, w, x, y, z) { //u=damtype, v=element, w=stat, x=damage, y=[item], z=weapon
        switch ('undefined') { //I'm so happy this works! Its a switch statement that looks to see if something exists
            case typeof z[y]["altammo"]:
                damnDamage(u, v, w, x, y, z);
                break;
            case typeof z[y]["altammo"][x]: //if altammo.damage doesn't exist, render ammo like normal!
                damnDamage(u, v, w, x, y, z);
                break;
            case typeof z[y]["altammo"][v]:
                $("." + y + "." + x).empty().append("<span>" + (z[y][x] + z[y][w]) + "(" + (z[y][x] + z[y][w] + z[y]["dvmod"]) + ")" + z[y][u] + " " + z[y][v] + "/ " + (z[y]["altammo"][x] + z[y][w]) + "(" + (z[y]["altammo"][x] + z[y][w] + z[y]["dvmod"]) + ")" + z[y][u] + "</span>");
                damnAP(y);
                break;
            default:
                $("." + y + "." + x).empty().append("<span>" + (z[y][x] + z[y][w]) + "(" + (z[y][x] + z[y][w] + z[y]["dvmod"]) + ")" + z[y][u] + " " + z[y][v] + "/ " + (z[y]["altammo"][x] + z[y][w]) + "(" + (z[y]["altammo"][x] + z[y][w] + z[y]["dvmod"]) + ")" + z[y][u] + " " + z[y]["altammo"][v] + "</span>");
                damnAP(y);
                break;
        }
    }

    function damnAP(y) {
        $(".ap." + y).append("/" + weapons[y]["altammo"]["ap"]); //render weapon altammo ap
    }

    function damnDamage(u, v, w, x, y, z) { //as if this shit wasn't stupidly complex enough.
        $("." + y + "." + x).empty().append("<span>" + (z[y][x] + z[y][w]) + "(" + (z[y][x] + z[y][w] + z[y]["dvmod"]) + ")" + z[y][u] + " " + z[y][v] + "</span>");
    }
};

$(document).ready(function() { //this is makes it so that that skill points becomes fixed to the window
    var top = $("#characterPoints").offset().top - parseFloat($('#characterPoints').css('margin-top')); //this stupid variable doesn't get set right unless I put it in the document ready funcation
    $(window).scroll(function() {
        var y = $(window).scrollTop();
        if (y >= top) {
            $("#characterPoints").addClass("fixed");
        } else {
            $("#characterPoints").removeClass("fixed");
        }
    });
})

$(".knowButton").click( //used to select which type of knowledge skill is being sent
    knowledgeTypeSelect
)

function knowledgeTypeSelect() {
    fnselect($(this));
    knowledgeType = $(this).attr("id");
}

$("#addSkill").click(
    addKnowing
)

function addKnowing() {
    knowledgeSkills.push({
        name: $(".knowledgeName").val(),
        catalog: knowledgeType,
        stat: attributes.current.int,
        rating: 0,
        mod: 0,
        max: 6,
        defaultable: false
    });

    skill = knowledgeSkills.length - 1;
    skillsum = funSkillSum(knowledgeSkills[skill]["defaultable"], knowledgeSkills[skill]["rating"], knowledgeSkills[skill]["mod"], knowledgeSkills[skill]["stat"]);

    $("<tr class='" + [skill] + "'><td class='incAtt " + [skill] + "'>+</td><td class='rating'>" + knowledgeSkills[skill]["rating"] + "</td><td class='decAtt " + [skill] + "'>-</td><td class='skillName'>" + knowledgeSkills[skill]["name"] + "</td><td class='stat'>" + knowledgeSkills[skill]["stat"] + "</td><td class= 'mod'>" + knowledgeSkills[skill]["mod"] + "</td><td class='skillsum'>" + skillsum + "</td><tr>")
        .appendTo("." + knowledgeSkills[skill]["catalog"]);

}

$(".add").click(
    addPowerPoint
)

function addPowerPoint() { //this activates adept powers
    var power = adeptPowers[$(this).attr("id")]; //this is just short hand to say adeptPowers["power name"]

    if ($(this).hasClass("active")) { //if the power is already on, then
        deactivate($(this)); //remove the class that says its on
        power["active"] = false; //turn off power
        //I still need to figure out how to reduce the skill mod when we turn off the skill
        for (var skill in power["skillmod"]) {
            resetMod(power["skillmod"][skill], power["level"]);
        }
        for (var key in power["attmod"]) { //this rests the augmented attibute...for the most part.
            switch (power["attmod"][key]) {
                case "body":
                    attributes.augment.bod -= power["level"];
                    break;
                case "reaction":
                    attributes.augment.rea -= power["level"];
                    break;
                case "agility":
                    attributes.augment.agi -= power["level"];
                    break;
                case "strength":
                    attributes.augment.str -= power["level"];
                    break;
            }
        }
        if ($(this).attr("id") == "improvedreflexes") { //god damn improvereflexes has to be a special snowflake and follow different rules
            power["cost"] = 1.5;
            attributes.initiative.iniphyDice = 1;
            switch (power["level"]) {
                case 1:
                    powerPoints += 1.5;
                    attributes.augment.rea -= 1;
                    break;
                case 2:
                    powerPoints += 2.5;
                    attributes.augment.rea -= 2;
                    break;
                case 3:
                    powerPoints += 3.5;
                    attributes.augment.rea -= 3;
                    break;
            }
        } else if (power["level"] != "n/a") { //this is for every power that is not improve reflexes

            powerPoints = powerPoints + (power["cost"] * power["level"]); //basically, it recovers the ammount of power points that was spend on the power of turned off
        } else {
            powerPoints += power["cost"];
        }
        if (power["level"] != "n/a") { //if the power level is NOT n/a then do this stuff here
            power["level"] = 0;
            $(".incAtt" + "." + $(this).attr("id")).addClass("deact");
            $(".decAtt" + "." + $(this).attr("id")).addClass("deact");
        }
        minusLimitMod(power["limitmod"]); //for the 3 powers that increase limits, this will reduce the limits they effect
    } else { //This is for when the power is already off, it turns it on, amoung other things
        if (powerPoints - power["cost"] >= 0) { //if the cost of the power takes the powerpoints below 0, then do nothing
            activate($(this));
            power["active"] = true; //turn on
            if (power["level"] != "n/a") { //if the power is turned on, then add a level and remove the decative class on the + and - buttons
                power["level"]++;
                $(".incAtt" + "." + $(this).attr("id")).removeClass("deact");
                $(".decAtt" + "." + $(this).attr("id")).removeClass("deact");
                for (var skill in power["skillmod"]) {
                    addMod(power["skillmod"][skill], power["level"]);
                }
                addAttMod(power["attmod"]);

                if ($(this).attr("id") == "improvedreflexes") {
                    attributes.augment.rea++;
                    attributes.initiative.iniphyDice++;
                }
            }
            addLimitMod(power["limitmod"]); //this will increase limits
            powerPoints = powerPoints - power["cost"]
        }
    }

    disUpdater();
}

function addLimitMod(x) {
    for (var key in x) {
        switch (x[key]) {
            case "physical":
                attributes.limitMod.phyLimitMod++;
                break;
            case "mental":
                attributes.limitMod.menLimitMod++;
                break;
            case "social":
                attributes.limitMod.socLimitMod++;
                break;

        }
    }
}

function minusLimitMod(x) {
    for (var key in x) {
        switch (x[key]) {
            case "physical":
                attributes.limitMod.phyLimitMod--;
                break;
            case "mental":
                attributes.limitMod.menLimitMod--;
                break;
            case "social":
                attributes.limitMod.socLimitMod--;
                break;

        }
    }
}

function addAttMod(x) { //this will increase the augmented attribute
    for (var key in x) {
        switch (x[key]) {
            case "body":
                attributes.augment.bod = addAugmentAtt(attributes.augment.bod);
                break;
            case "reaction":
                attributes.augment.rea = addAugmentAtt(attributes.augment.rea);
                break;
            case "agility":
                attributes.augment.agi = addAugmentAtt(attributes.augment.agi);
                break;
            case "strength":
                attributes.augment.str = addAugmentAtt(attributes.augment.str);
                break;
        }
    };
}


function addMod(x, y) { //x=skill name y=adept power level
    if (y <= attributes.current.mag) {
        activeSkills[x]["mod"]++;
    }
}

function minusMod(x, y) {
    if (y >= 0) {
        activeSkills[x]["mod"]--;
    }
}

function resetMod(x, y) {
    activeSkills[x]["mod"] -= y
}

$().click( //this will make a spell as either being a spell or a alchemy preparation
    spellActivate
)

$("#spelllist").on("click", ".spellact, .prepact", //When ever #spelllist is updated, it we check the spellact and prepact to do the spellactivate function
    spellActivate
);

function spellActivate() { //this is used to turn of add spells and alchemical preparations
    var spell = spellforms[$(this).parent().attr("id")];

    switch (spell["name"]) { //switch to find the 3 custom detection spells
        case "Detect [Life Form]":
            customDetectSpell($("input.detectlifeform").val(), " ", "detectlifeform");
            break;
        case "Detect [Life Form], Extended":
            customDetectSpell($("input.detectlifeformextended").val(), "extended", "detectlifeformextended");
            break;
        case "Detect [Object]":
            customDetectSpell($("input.detectobject").val(), " ", "detectobject");
            break;
        case "Decrease [Attribute]":
            customAttributeSpell($("select.decreaseattribute").val(), "decreaseattribute", "Decrease ");
            break;
        case "Increase [Attribute]":
            customAttributeSpell($("select.increaseattribute").val(), "increaseattribute", "Increase ");
            break;
        default: //if the spell isn't one of those three, then do this
            if ($(this).hasClass("active")) { //if the spell has already been activated, then do this
                deactivate($(this)); //remove the active class, and change the + to a -
                if ($(this).hasClass("spellact")) { //is this a spell? then turn it off
                    spell["spell"] = false;
                } else { //Well, if its not a spell, then its a preporation, and then turn that off
                    spell["preporation"] = false;
                }
                spells++; //return spell points to buy more spells
            } else { //If the spell isn't on, then its off, so do this stuff
                if (spells > 0) { //do you have spell points to buy more spells?
                    activate($(this)); //Then add the active class and replace the - with a +
                    if ($(this).hasClass("spellact")) { //was it the spell you clicked? then turn it on
                        spell["spell"] = true;
                    } else { //if its not a spell, then its a preporation
                        spell["preporation"] = true;
                    }
                    spells--; //reduce spell points
                }
            }
            break;
    };
    disUpdater(); //update the renderer, which will update the spell points to the new total

    function customDetectSpell(x, y, z) { //this function is for custom detection spells, in case the name wasn't a dead give away
        if (x == "" || typeof spellforms["detect" + x + y] != 'undefined') { //Did the user forget to input data or already enter this data? Then do NOTHING!
            console.log("Stop clicking that!");
            return;
        }
        spellforms["detect" + x + y] = {
            name: "Detect " + x + " " + y,
            category: "detection",
            spell: false,
            preparation: false,
            active: "active",
            direction: spellforms[z]["direction"],
            type: spellforms[z]["type"],
            range: "T",
            duration: "Sustain",
            drain: spellforms[z]["drain"]
        }; //sets all the values for the new spellform object
        spellhold = spellforms["detect" + x + y] //short hand, because typing all that junk was annoying
        var spell = "detect" + x + y;
        $("#" + z).after($("<tr id='" + spell + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='illact " + spell + "'>" + spellhold["active"] + "</td><td class='direction " + spell + "'>" + spellhold["direction"] + "</td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>")); //Add the spell to the list on the DOM after where it was entered
    }

    function customAttributeSpell(x, y, z) {
        if (x == "" || typeof spellforms[z + x] != 'undefined') { //Did the user forget to input data or already enter this data? Then do NOTHING!
            console.log("You can't " + z + "that!");
            return;
        }
        spellforms[z + x] = {
            name: z + " " + x,
            category: "health",
            spell: false,
            preparation: false,
            essence: "Essence",
            type: spellforms[y]["type"],
            range: "T",
            duration: "Sustain",
            drain: spellforms[y]["drain"]
        }; //sets all the values for the new spellform object
        spellhold = spellforms[z + x] //short hand, because typing all that junk was annoying
        var spell = y;
        $("#" + y).after($("<tr id='" + z + x + "' class='" + spellhold["category"] + "'><td class='spellact " + spell + " button'><strong>-</strong></td><td class='prepact " + spell + " button'><strong>-</strong></td><td class='spellname " + spell + "'>" + spellhold["name"] + "</td><td class='heaEss " + spell + "'>" + spellhold["essence"] + "</td><td class='spelltype " + spell + "'>" + spellhold["type"] + "</td><td class='spellrange " + spell + "'>" + spellhold["range"] + "</td><td class='spelldur " + spell + "'>" + spellhold["duration"] + "</td><td class='drain " + spell + "'>" + spellhold["drain"].toString() + "</td></tr>")); //Add the spell to the list on the DOM after where it was entered

    }
}

$(".formact").click(complexFormActivate);

function complexFormActivate() {
    var form = complexforms[$(this).parent().attr("id")];

    if ($(this).hasClass("active")) { //if the complex form has already been activated, then do this stuff
        deactivate($(this)); //remove the active class, and change the + to a -
        form["formact"] = false; //the form is turned off
        forms++; //return complex form points to buy more forms
    } else { //If the form isn't on, then its off, so do this stuff
        if (forms > 0) { //do you have complex form points to buy more forms?
            activate($(this)); //Then add the active class and replace the - with a +
            form["formact"] = true; //turn off complex form
            forms--; //reduce form points
        }
    }
    disUpdater();
}

function activate(x) { //this will highlight and add a + to show that the thing is active
    x.addClass("active").empty().append("<strong>+</strong>");
}

function deactivate(x) { //this will turn off the highlight and change the + to a - to show its inactive
    x.removeClass("active").empty().append("<strong>-</strong>");
}

$(".weapact").click(buyWeapon);
var invNum = 1; //inventory number for naming two items of the same kind
function buyWeapon() {
    if ($(this).hasClass("deact")) {
        return;
    }
    var itemhold = weapons[$(this).parent().attr("id")];
    var item = $(this).parent().attr("id");
    var itemNum = item + invNum;
    var gotMoney = nuyen - itemhold["cost"] > 0;
    inventory[itemNum] = {}; //this creates a blank object for the weapon's stats to be added too
    for (var key in itemhold) {
        if (key == "mods") { //when we get to the key called mods in the weapon, do this
            inventory[itemNum][key] = {}; //make a blank key for the mod
            for (var subkey in itemhold[key]) { //this creates a section for the mods for each instance of a gun, so gun instances don't end up sharing all the same mods
                inventory[itemNum][key][subkey] = itemhold[key][subkey];
            }
        } else {
            inventory[itemNum][key] = itemhold[key];
        }
    }
    inventory[itemNum]["active"] = true;
    if ($(this).closest(".meleeweapon").hasClass("meleeweapon") && gotMoney) { //this you buy a melee weapon do this stuff
        $("#" + item).after("<tr id='" + itemNum + "'><td class='sell button'><em>-</em></td><td>" + itemhold["name"] + "</td><td class='inventory " + item + itemNum + "' colspan=5></td><td class='custWeapPrice'>" + itemhold["cost"] + "&#65509</td></tr>");
        if (attributes.current.mag > 0) {
            inventory[itemNum]["weaponfoci"] = 0;
            $("<td class='label'>Weapon Focus</td><td class='" + itemNum + " incAtt weaponfoci'>+</td><td class='focirating weaponfoci'>0</td><td class='" + itemNum + " decAtt weaponfoci'>-</td>").appendTo($(".inventory." + item + itemNum));
        }

        buyingItem(itemhold);
    }
    if ($(this).hasClass("bow") && gotMoney) { //buying bows
        addingArrows(7, "#bow", item, itemNum, "Arrows");
        buyingItem(itemhold);
    }
    if ($(this).closest(".crossbow").hasClass("crossbow") && gotMoney) { //buying crossbows
        addingArrows(4, "#" + item, item, itemNum, "Bolts");
        buyingItem(itemhold);
    }
    if ($(this).hasClass("shuriken") && gotMoney) { //buying throwing weapons
        inventory[itemNum]["arrow"] = 1;
        $("#shuriken").after("<tr id='" + itemNum + "'><td class='sell button'><em>-</em></td><td class='inventory " + item + itemNum + "' colspan=4></td><td class='custWeapPrice'></td></tr>");
        $(".inventory." + item + itemNum).append("<td class='label'>Shuriken/Throwing Knives</td><td class='" + itemNum + " incAtt arrow'>+</td><td class='arrowNum arrow'>1</td><td class='" + itemNum + " decAtt arrow'>-</td>");
        buyingItem(itemhold);
    }
    licenseDP(itemNum, item, itemhold, ""); //adds license and dice pool

    if ($(this).closest(".firearms").hasClass("firearms") && gotMoney) { //this adds firearms
        $("#" + item).after("<tr id='" + itemNum + "' class='invName'><td class='sell button'><em>-</em></td><td class='inventory " + item + itemNum + "' colspan=8></td><td class='custWeapPrice'></td></tr>");
        buyingItem(itemhold); //this takes money out of the nuyen, so buys the item

        $(".inventory." + item + itemNum).append("<tr class='mounts'></tr>"); //this adds the area for the gun mounts
        var acctarget = ".inventory." + item + itemNum + " .mounts";
        $(acctarget).append("<tr><td class='label'>Top</td><td class='label'>Barrel</td><td class='label'>Under</td></tr>");
        $(acctarget).append("<tr><td class='topmount " + itemNum + "'>n/a</td><td class='barrelmount " + itemNum + "'>n/a</td><td class='underbarrel " + itemNum + "'>n/a</td></tr>");
        topMount(item, itemNum); //if it allows top mounts, it will add them
        barrelMount(item, itemNum); //if the gun allows barrel mounts it'll add the options
        bottomMount(item, itemNum); //this adds under barrel mounts
        holsterAddOn(itemhold, itemNum, item); //adds holster if a gun supports it
        $(".inventory." + item + itemNum).append("<tr class='accessories'></tr>"); //this is where nonmount accessories go
        acctarget = ".inventory." + item + itemNum + " .accessories"; //makes targetting accessories eaiser
        $(acctarget).append("<tr class='nonmounts " + itemNum + "'></tr>"); //puting a row in a row breaks the normal table
        var nonmount = ".nonmounts." + itemNum;
        if (itemhold.avail + 2 <= maxAvail || itemhold.mods.internalsmart == "Smartgun") { //adding a internal smartgun increaes avail, this doesn't go over 12
            $(nonmount).append("<td class='label'>Internal Smartgun</td><td class='smartgun " + itemNum + " button'>+</td>");
        }
        if (itemhold.mods.internalsmart == "Smartgun") { //if the gun already has an internal smartgun system, this prevents people from adding another one
            $(".smartgun." + itemNum).addClass("deact active").empty().append("-");
        }
        var skillcheck = itemhold.skill;
        if (itemhold.category == "assaultrifles" || skillcheck == "longarms" || skillcheck == "heavyweapons") { //add shockpad to some guns
            $(nonmount).append("<td class='label'>Shock Pad</td><td class='shockpad " + itemNum + " button'>+</td>");
        }
        if (itemhold.damtype == "Grenade" || itemhold.damtype == "Missile") { //adds airburst link to explosive weapons
            $(nonmount).append("<td class='label'>Airburst Link</td><td class='airburstlink " + itemNum + " button'>+</td>");
        }
        if (itemhold.mods.integral != "n/a") { //adds accessories that are already built in to the smartgun
            $(nonmount).append("<td class='label'>Integral</td><td class='integral " + itemNum + " active' colspan=2>" + itemhold["mods"]["integral"] + "</td>")
        }

        $(nonmount).after("<table><tr class='options'></tr></table>"); //adds a new table so that the clip and fake licenses don't get all scretched out
        if (itemhold.clip == "Clip") { //adds spare clips
            moreclips(itemNum, item, "Clips");
        } else if (itemhold.clip == "Detachable Cylinder" || itemhold.clip == "Cylinder") { //add speed loader for revolvers
            moreclips(itemNum, item, "Speed Loader");
        }
        licenseDP(itemNum, item, itemhold, " .options"); //add license and dicepool
        $(".inventory." + item + itemNum + " .options .labelDP").before("<td class='label'>Acc</td><td class='acc " + itemNum + "'>" + itemhold.accuracy + "(" + (itemhold.accuracy + itemhold.accmod) + ")" + "</td><td class='label'>RC</td><td class='rc " + itemNum + "'>" + itemhold.rc + Math.ceil((attributes.current.str / 3) + 1) + "(" + (itemhold.rc + itemhold.rcmod + Math.ceil((attributes.current.str / 3) + 1)) + ")" + "</td>");
        $(".inventory." + item + itemNum + " .options").append("<td class='label'>Avail</td><td class='avail " + itemNum + "'>" + itemhold.avail + " " + itemhold.restrict + "</td>");
    }

    function moreclips(x, y, z) {
        inventory[itemNum]["extraclips"] = 0;
        $("<td class='label'>" + z + "</td><td class='" + x + " incAtt extraclips'>+</td><td class='numofclips extraclips'>0</td><td class='" + x + " decAtt extraclips'>-</td>").appendTo($(".inventory." + y + x + " .options"));
    }

    function holsterAddOn(x, y, z) { //x=itemhold, y=itemNum,z=item
        var check = x["category"];
        if (check == "lightpistols" || check == "tasers" || check == "holdouts") { //checks to see if small arms to use arm silder
            makeholster(y, z);
            $(".holster." + y).append("<td class='concealableholster " + y + " button'>Concealable Holster</td><td class='hiddenarmslide " + y + " button'>Hidden Arm Slide</td><td class='quickdrawholster " + y + " button'>Quick-draw Holster</td>");
        };
        if (check == "heavypistols" || check == "machinepistols") { //checks to see if larger small arms that can usholsters that are not arm slider
            makeholster(y, z);
            $(".holster." + y).append("<td class='concealableholster " + y + " button'>Concealable Holster</td><td class='quickdrawholster " + y + " button'>Quick-draw Holster</td>");
        }
    }

    function makeholster(y, z) { //adds the stuff to make the holsters
        $(".inventory." + z + y).append("<tr class='holsters " + y + "'></tr>");
        $(".holsters." + y).append("<tr class='holster " + y + "'><td class='label'>Holster</td></tr>");
    }

    function licenseDP(x, y, z, l) {
        if (z["restrict"] == "Restricted") { //if restricted add the ability to buy a fake license
            inventory[x]["license"] = 0;
            $("<td class='label'>Fake License</td><td class='" + x + " incAtt license'>+</td><td class='licenserating license'>0</td><td class='" + x + " decAtt license'>-</td>").appendTo($(".inventory." + y + x + l));
        }
        $("<td class='labelDP label'>DP</td><td class='weaponDP'>" + (activeSkills[inventory[x]["skill"]]["rating"] + activeSkills[inventory[x]["skill"]]["stat"] + activeSkills[inventory[x]["skill"]]["mod"]) + "</td>").appendTo($(".inventory." + y + x + l));

    }

    function topMount(x, y) {
        if (weapons[x]["mods"]["top"] == "empty") {
            $(".topmount." + y).empty().append("<select><option value='empty'>Empty</option><option value='Laser Sight'>Laser Sight</option><option value='Imaging Scope'>Imaging Scope</option><option value='Periscope'>Periscope</option><option value='Smartgun'>Smartgun</option></select>");
        };
    }

    function barrelMount(x, y) {
        if (weapons[x]["mods"]["barrel"] == "empty") {
            $(".barrelmount." + y).empty().append("<select><option value='empty'>Empty</option><option value='Gas Vent 1'>Gas Vent System 1</option><option value='Gas Vent 2'>Gas Vent System 2</option><option value='Gas Vent 3'>Gas Vent System 3</option><option value='Silencer'>Silencer</option></select>");
        };
    }

    function bottomMount(x, y) {
        if (weapons[x]["mods"]["under"] == "empty") {
            $(".underbarrel." + y).empty().append("<select><option value='empty'>Empty</option><option value='Laser Sight'>Laser Sight</option><option value='Bipod'>Bipod</option><option value='Smart Firing Platform'>Smart Firing Platform</option><option value='Smartgun'>Smartgun</option><option value='Tripod'>Tripod</option></select>");
            if (weapons[x]["skill"] == "heavyweapons" || weapons[x]["category"] == "assaultrifles") {
                $(".underbarrel." + y + " select").append("<option value='Gyro Mount'>Gyro Mount</option>");
            }
        };
    }

    function addingArrows(v, w, x, y, z) { //v=number of columns, w=if to target to set item after, x=the weapon, y=weapon+number from inventory, z=name of projectile
        inventory[y]["arrow"] = 0;
        inventory[y]["inject"] = 0;
        $(w).after("<tr id='" + y + "'><td class='sell button'><em>-</em></td><td class='inventory " + x + y + "' colspan=" + v + "></td><td class='custWeapPrice'></td></tr>");
        $(".inventory." + x + y).append("<td class='label'>" + z + "</td><td class='" + y + " incAtt arrow'>+</td><td class='arrowNum arrow'>0</td><td class='" + y + " decAtt arrow'>-</td><td class='label'>Injection " + z + "</td><td class='" + y + " incAtt injarrow'>+</td><td class='arrowNum injarrow'>0</td><td class='" + y + " decAtt injarrow'>-</td>");
    }

    function buyingItem(itemhold) { //reduces money based on the cost of the item
        nuyen -= itemhold["cost"];
    }
    invNum++;
    disUpdater();
}

$("#gearResource").on("click", ".sell", sellWeapon);

function sellWeapon() {
    var item = $(this).parent().attr("id")
    nuyen += inventory[item]["cost"];
    inventory[item]["active"] = false;
    fociRating -= inventory[item]["weaponfoci"];
    if (inventory[item]["weaponfoci"] > 0) {
        karma += inventory[item]["weaponfoci"] * 3;
        focinumber--;
        fociRating -= inventory[item]["weaponfoci"];
        pointUpdater("#karmapnt", karma);
    };
    $(this).parent().remove();
    delete inventory[item];
    updaters.nuyenUpdater();
}

$("#firearms").on("change", "select", settingWeapon);

function settingWeapon() { //this will change the weapon mounts and the nuyen
    var item = $(this).closest(".invName").attr("id");
    var itemmod = inventory[item]["mods"]
    var itemhold = inventory[item];

    itemmod.top = mountCheck($(".topmount." + item + " select").val(), itemmod.top, itemmod.under);
    itemmod.barrel = mountCheck($(".barrelmount." + item + " select").val(), itemmod.barrel);
    itemmod.under = mountCheck($(".underbarrel." + item + " select").val(), itemmod.under, itemmod.top);


    function mountCheck(x, y, z) {
        if (x != y) { //reset stats below
            price = thePriceisRight(y); //the price of the old mod
            nuyen += price; //returns money of the old mod
            inventory[item]["cost"] -= price; //takes out of the price of the old mod
            itemhold["rc"] -= addingRecoil(y); //takes away the recoil of the old mod
            itemhold["rcmod"] -= moddingRecoil(y); //takes away the recoil mod of the old mod
            itemhold["accmod"] -= addingAccurecy(y, z);

            //set new stats below
            price = thePriceisRight(x); //sets the new price
            nuyen -= price; //reduces the nuyen by the price of the new mod
            inventory[item]["cost"] += price; //adds the price of the new mod to the gun's price
            itemhold["rc"] += addingRecoil(x); //sets the new recoil
            itemhold["rcmod"] += moddingRecoil(x); //sets the new recoil mod
            itemhold["accmod"] += addingAccurecy(x, z);
        };
        return x;
    }

    function addingAccurecy(x, z) {
        if (x == "Smartgun" || z == "Smartgun" || itemmod["internalsmart"] == "Smartgun") { //this figures out of accurecy bonus
            y = 2;
        } else if (x == "Laser Sight" || z == "Laser Sight" || itemmod["integral"].indexOf("Laser Sight") !== -1) {
            y = 1;
        } else {
            y = 0;
        };
        return y;
    }

    function moddingRecoil(x) {
        if (x == "Tripod" || x == "Gyro Mount") {
            y = 6;
        } else if (x == "Bipod") {
            y = 2;
        } else {
            y = 0;
        };
        return y;
    }

    function addingRecoil(x) {
        if (x == "Gas Vent 3" || itemmod["integral"].indexOf("Gas Vent 3") !== -1) { //gas vents apparently determine the natural recoil
            y = 3;
        } else if (x == "Gas Vent 2" || itemmod["integral"].indexOf("Gas Vent 2") !== -1) {
            y = 2;
        } else if (x == "Gas Vent 1" || itemmod["integral"].indexOf("Gas Vent 1") !== -1) {
            y = 1;
        } else {
            y = 0
        };
        return y
    }

    function thePriceisRight(x) { //this is the price of all the mods
        switch (x) {
            default: y = 0;
            break;
            case "Laser Sight":
                    y = 125;
                break;
            case "Imaging Scope":
                    y = 300;
                break;
            case "Periscope":
                    y = 70;
                break;
            case "Smartgun":
                    y = 200;
                break;
            case "Gas Vent 1":
                    y = 200;
                break;
            case "Gas Vent 2":
                    y = 400;
                break;
            case "Gas Vent 3":
                    y = 600;
                break;
            case "Silencer":
                    y = 500;
                break;
            case "Bipod":
                    y = 200;
                break;
            case "Gyro Mount":
                    y = 1400;
                break;
            case "Smart Firing Platform":
                    y = 2500;
                break;
            case "Tripod":
                    y = 500;
                break;
        }
        return y;
    }

    disUpdater();
}

$("#firearms").on("click", ".smartgun.button", thinkingsmart)

function thinkingsmart() { //the interal smartgun button
    if ($(this).hasClass("deact")) { //if the button is deactivated, do nothing
        return;
    }

    var item = $(this).closest(".invName").attr("id");
    var itemmod = inventory[item]["mods"];
    var itemhold = inventory[item];

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        itemmod["internalsmart"] = "empty"
        if (itemmod.top == "Smartgun" || itemmod.under == "Smartgun") { //this figures out of accurecy bonus
            itemhold["accmod"] -= 0;
        } else if (itemmod.top == "Laser Sight" || itemmod.under == "Laser Sight" || itemmod["integral"].indexOf("Laser Sight") !== -1) {
            itemhold["accmod"] -= 1;
        } else {
            itemhold["accmod"] -= 2;
        };
        for (var key in weapons) {
            if (weapons[key]["name"] == itemhold["name"]) {
                nuyen += weapons[key]["cost"];
                itemhold["cost"] -= weapons[key]["cost"];
                itemhold["avail"] -= 2;
                if (weapons[key]["restrict"] == " ") {
                    itemhold["restrict"] = " "
                }
            }
        }
    } else {
        $(this).addClass("active");
        itemmod["internalsmart"] = "Smartgun"
        if (itemmod.top == "Smartgun" || itemmod.under == "Smartgun") { //this figures out of accurecy bonus
            itemhold["accmod"] += 0;
        } else if (itemmod.top == "Laser Sight" || itemmod.under == "Laser Sight" || itemmod["integral"].indexOf("Laser Sight") !== -1) {
            itemhold["accmod"] += 1;
        } else {
            itemhold["accmod"] += 2;
        };
        for (var key in weapons) {
            if (weapons[key]["name"] == itemhold["name"]) {
                nuyen -= weapons[key]["cost"];
                itemhold["cost"] += weapons[key]["cost"];
                itemhold["avail"] += 2;
                if (itemhold["restrict"] == " ") {
                    itemhold["restrict"] = "Restricted"
                }
            }
        }
    }
    disUpdater();
}

$("#firearms").on("click", ".shockpad.button", shockpadding)

function shockpadding() {
    if ($(this).hasClass("deact")) { //if the button is deactivated, do nothing
        return;
    }

    var item = $(this).closest(".invName").attr("id");
    var itemmod = inventory[item]["mods"];
    var itemhold = inventory[item];

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        itemmod["shockpad"] = "empty"
        itemhold["rc"]--;
        nuyen += 50;
        itemhold["cost"] -= 50;
    } else {
        $(this).addClass("active");
        itemmod["shockpad"] = "Shock Pad"
        itemhold["rc"]++;
        nuyen -= 50;
        itemhold["cost"] += 50;
    }
    disUpdater();
}

$("#firearms").on("click", ".airburstlink.button", airJordan)

function airJordan() { //this is for airbustlink for explosive weapons
    if ($(this).hasClass("deact")) { //if the button is deactivated, do nothing
        return;
    }

    var item = $(this).closest(".invName").attr("id");
    var itemmod = inventory[item]["mods"];
    var itemhold = inventory[item];

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        itemmod["airburstlink"] = false;
        nuyen += 600;
        itemhold["cost"] -= 600;
    } else {
        $(this).addClass("active");
        itemmod["airburstlink"] = true;
        nuyen -= 600;
        itemhold["cost"] += 600;
    }
    disUpdater();
}

$("#firearms").on("click", ".concealableholster.button, .hiddenarmslide.button, .quickdrawholster.button", holSTAR)

function holSTAR() { //this creates and manages the background stuff for the holsters of a gun
    var item = $(this).closest(".invName").attr("id");
    var itemmod = inventory[item]["mods"];
    var itemhold = inventory[item];

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        if ($(this).hasClass("concealableholster")) {
            itemmod["concealableholster"] = false;
            nuyen += 150;
            itemhold["cost"] -= 150;
        } else if ($(this).hasClass("hiddenarmslide")) {
            itemmod["hiddenarmslide"] = false;
            nuyen += 350;
            itemhold["cost"] -= 350;
        } else if ($(this).hasClass("quickdrawholster")) {
            itemmod["quickdrawholster"] = false;
            nuyen += 175;
            itemhold["cost"] -= 175;
        }
    } else {
        $(this).addClass("active");
        if ($(this).hasClass("concealableholster")) {
            itemmod["concealableholster"] = true;
            nuyen -= 150;
            itemhold["cost"] += 150;
        } else if ($(this).hasClass("hiddenarmslide")) {
            itemmod["hiddenarmslide"] = true;
            nuyen -= 350;
            itemhold["cost"] += 350;
        } else if ($(this).hasClass("quickdrawholster")) {
            itemmod["quickdrawholster"] = true;
            nuyen -= 175;
            itemhold["cost"] += 175;
        }
    }
    disUpdater();
}

$("#ammunition").on("click", ".buyammo,.sellammo,.buygrenades,.sellgrenades", buyingammo);

function buyingammo() {
    var ammo = $(this).parent().attr("class");
    var gunclass = $(this).closest(".ammunition").attr("id");
    if ($(this).parent().hasClass("gas")) {
        gasname = $("select.toxicgas").val();
        gas = toxin[gasname];
        if (typeof ammunition[gasname] === 'undefined') {
            ammunition[gasname] = {
                name: gas["name"],
                ammo: 0,
                class: "grenades",
                dammod: gas["power"],
                typemod: gas["effect"],
                elemod: "",
                apmod: 0,
                blast: "10m Radius",
                avail: gas["avail"] + 2,
                restrict: gas["restrict"],
                cost: gas["cost"] + 40
            }

            z = ammunition[gasname]
            $(".gas").after("<tr class='" + gasname + "'><td class='buygrenades button'>+</td><td class='ammountofammo'>0</td><td class='sellgrenades button'>-</td><td class='grenadesname'>" + z["name"] + "</td><td class='grenadesdammod'>" + z["dammod"] + " " + z["typemod"] + " " + z["elemod"] + "</td><td class='apmod'>" + z["apmod"] + "</td><td class='blast'>" + z["blast"] + "</td><td class='avail'>" + z["avail"] + " " + z["restrict"] + "</td><td class='cost'>" + z["cost"] + "&#65509</td></tr>");
        }
        return;
    }
    if (typeof inventory[gunclass + ammo] === 'undefined') {
        inventory[gunclass + ammo] = {};

        for (var key in ammunition[ammo]) {
            inventory[gunclass + ammo][key] = ammunition[ammo][key];
        }
    }

    var invammo = inventory[gunclass + ammo];
    inventory[gunclass + ammo]["class"] = gunclass;
    if (nuyen - inventory[gunclass + ammo]["cost"] > 0 && $(this).hasClass("buyammo")) {
        addAmmo($(this), gunclass + ammo, 10, invammo);
    } else if (inventory[gunclass + ammo]["ammo"] > 0 && $(this).hasClass("sellammo")) {
        subAmmo($(this), gunclass + ammo, 10, invammo);
    } else if (nuyen - inventory[gunclass + ammo]["cost"] > 0 && $(this).hasClass("buygrenades")) {
        addAmmo($(this), gunclass + ammo, 1, invammo);
    } else if (inventory[gunclass + ammo]["ammo"] > 0 && $(this).hasClass("sellgrenades")) {
        subAmmo($(this), gunclass + ammo, 1, invammo);
    }
    updaters.nuyenUpdater();
}

function addAmmo(w, x, y) { //w=this, x=name of ammo in inventory, y=ammount of ammo bought at a time
    inventory[x]["ammo"] += y;
    nuyen -= inventory[x]["cost"];
    $(w.next(".ammountofammo")).empty().append(inventory[x]["ammo"]);
}

function subAmmo(w, x, y) { //w=this, x=name of ammo in inventory, y=ammount of ammo bought at a time
    inventory[x]["ammo"] -= y;
    nuyen += inventory[x]["cost"];
    $(w.prev(".ammountofammo")).empty().append(inventory[x]["ammo"]);
}

//expolsives ammo after this

$("#grenadeammo .blastafter, #rocketammo .blastafter").after("<td>Blast</td>");

$(".grenadesname").on("change", "select.toxicgas", toxicgas);

gasgrenade("teargas"); //sets grenade at start
$(".gas .sellgrenades").addClass("deact");

function toxicgas() {
    gasgrenade($(this).val());
}

function gasgrenade(x) {
    $(".gas .grenadesdammod").empty().append(toxin[x]["power"] + " " + toxin[x]["effect"]);
    $(".gas .avail").empty().append((toxin[x]["avail"] + 2) + " " + toxin[x]["restrict"]);
    $(".gas .cost").empty().append((toxin[x]["cost"] + 40) + "&#65509;");
}

$("#explosive").on("click", ".bombup, .bombdown", kaboom); //increases an explosive's rating

function kaboom() {
    if ($(this).hasClass("deact")) {
        return;
    }
    var bomb = $(this).parent().attr("class");
    if ($(this).hasClass("bombup") && explosives[bomb]["rating"] < 25) {
        explosives[bomb]["rating"]++;
        bombupdate(bomb);
    } else if ($(this).hasClass("bombdown") && explosives[bomb]["rating"] > 6) {
        explosives[bomb]["rating"]--;
        bombupdate(bomb);
    }

    function bombupdate(x) {
        $("." + x + " .explosiverating").empty().append(explosives[x]["rating"]);
        explosives[x]["cost"] = explosives[x]["rating"] * 100;
        $("." + x + " .bombbond").empty().append(explosives[x]["cost"] + "&#65509;");
    }
}

$("#explosive").on("click", ".buybomb,.sellbomb", bombsaway); //buy and sell explosives

function bombsaway() {
    var bomb = $(this).parent().attr("class");
    if ($(this).hasClass("buybomb") && nuyen - explosives[bomb]["cost"] > 0) {
        inventory[bomb + invNum] = {};
        bombname = bomb + invNum;
        for (var key in explosives[bomb]) {
            inventory[bombname][key] = explosives[bomb][key];
        }
        inventory[bombname]["kg"] = 1;
        $("." + bomb + ".explosives").append("<tr class='" + bombname + "'><td class='sellbomb button'><em>-<em></td><td class='inventory' colspan=4></td><td class='bombprice'>" + inventory[bombname]["cost"] + "&#65509;</td></tr>");
        $("." + bombname + " .inventory").append("<td class='label'>Rating</td><td>" + inventory[bombname]["rating"] + "</td><td class='label'>Kilograms</td><td class='kgup button'>+</td><td class='kg'>" + inventory[bombname]["kg"] + "</td><td class='kgdown button'>-</td>");

        invNum++
        nuyen -= inventory[bombname]["cost"];
    } else if ($(this).hasClass("sellbomb")) {
        $("." + bomb).remove();
        nuyen += inventory[bomb]["cost"];
        delete inventory[bomb];
    }

    updaters.nuyenUpdater();
}

$("#explosive").on("click", ".kgup, .kgdown", fatboy);

function fatboy() {
    var bomb = $(this).parent().parent().attr("class");
    if ($(this).hasClass("kgup") && nuyen - inventory[bomb]["rating"] * 100 >= 0) {
        inventory[bomb]["kg"]++;
        bombupdate(bomb);
        if (inventory[bomb]["name"] == "Commercial") {
            nuyen -= 100
        } else {
            nuyen -= inventory[bomb]["rating"] * 100;
        }
    } else if ($(this).hasClass("kgdown") && inventory[bomb]["kg"] > 0) {
        inventory[bomb]["kg"]--;
        bombupdate(bomb);
        if (inventory[bomb]["name"] == "Commercial") {
            nuyen += 100
        } else {
            nuyen += inventory[bomb]["rating"] * 100;
        }
    }
    updaters.nuyenUpdater();

    function bombupdate(x) {
        $("." + x + " .kg").empty().append(inventory[x]["kg"]);
        if (inventory[x]["name"] == "Commercial") {
            inventory[x]["cost"] = inventory[x]["kg"] * 100;
        } else {
            inventory[x]["cost"] = inventory[x]["kg"] * (inventory[x]["rating"] * 100);
        }
        $("." + x + " .bombprice").empty().append(inventory[x]["cost"] + "&#65509;");
    }
}

$(".detonator").append("<tr class='label'><td>Buy</td><td>Ammount</td><td>Sell</td><td>Availability</td><td>Cost</td></tr><tr><td class='buyDet button'>+</td><td class='caps'>0</td><td class='sellDet button'>-</td><td>" + detonator.avail + " " + detonator.restrict + "</td><td>" + detonator.cost + "&#65509;</td></tr>");

$("#explosive").on("click", ".buyDet, .sellDet", buyDetonator);

function buyDetonator() {
    if (typeof inventory["detonator"] === 'undefined') {
        inventory["detonator"] = {}
        for (var key in detonator) {
            inventory["detonator"][key] = detonator[key];
        }
    }
    if ($(this).hasClass("buyDet") && nuyen - inventory["detonator"]["cost"] > 0) {
        inventory["detonator"]["ammount"]++;
        nuyen -= inventory["detonator"]["cost"];
    } else if ($(this).hasClass("sellDet") && inventory["detonator"]["ammount"] > 0) {
        inventory["detonator"]["ammount"]--;
        nuyen += inventory["detonator"]["cost"];
    }
    $(".caps").empty().append(inventory["detonator"]["ammount"]);
    updaters.nuyenUpdater();

}

$("#clotharmor").on("click", ".buyarmor", sponge);

function sponge() {
    var armtype = $(this).parent().attr("class");
    if (nuyen - armor[armtype]["cost"] < 0 || $(this).hasClass("deact")) {
        return;
    }
    inventory[armtype + invNum] = {}
    for (var key in armor[armtype]) {
        inventory[armtype + invNum][key] = armor[armtype][key];
    }
    $("." + armtype).after("<tr class='" + armtype + invNum + "'><td class='sellarmor button'><em>-</em></td><td class='armormods' colspan=3></td><td class='armorcost'>" + inventory[armtype + invNum]["cost"] + "&#65509;</td></tr>");
    inventory[armtype + invNum]["mods"] = {}; //create emtpy mods section for intentory armor
    for (var mods in armormods) { //this will add the mods
        inventory[armtype + invNum]["mods"][mods] = {}; //this will add the name of the mods
        for (var modstats in armormods[mods]) {
            inventory[armtype + invNum]["mods"][mods][modstats] = armormods[mods][modstats] //this adds all the stats for each mod
        }
        if (typeof armormods[mods]["rating"] !== "undefined") { //this is for mods that don't have ratings
            $("." + armtype + invNum + " .armormods").append("<tr class='" + mods + "'><td class='label'>" + inventory[armtype + invNum]["mods"][mods]["name"] + "</td><td class='armmodup button'>+</td><td class='armmodrating'>0</td><td class='armmoddown button'>-</td><td class='label'>Capacity</td><td class='armorcap'>" + inventory[armtype + invNum]["mods"][mods]["capacity"] + "</td></tr>");
        } else if (typeof armor[armtype]["helm"] === "undefined" && mods == "chemicalseal") { //this checks to see if the armor has a helm
            //do nothing
        } else { //this adds all other mods
            modnorating(armtype + invNum, mods)
        }
    }
    if (inventory[armtype + invNum]["helm"] == false) { //if the armor supports a helm, add it to the mods
        $("." + armtype + invNum + " .armormods").append("<tr class='helm'><td class='label'>Helmet</td><td class='buyhelmmod button' colspan=3><strong>+</strong></td></tr>");
    }
    nuyen -= armor[armtype]["cost"];
    invNum++;
    updaters.nuyenUpdater();

    function modnorating(x, y) {
        $("." + x + " .armormods").append("<tr class='" + y + "'><td class='label'>" + inventory[armtype + invNum]["mods"][y]["name"] + "</td><td class='buyarmmod button' colspan=3><strong>+</strong></td><td class='label'>Capacity</td><td>" + inventory[armtype + invNum]["mods"][y]["capacity"] + "</td></tr>");
    }
}
$("#clotharmor").on("click", ".sellarmor", naked);

function naked() { //this sells armor
    var armtype = $(this).parent().attr("class");
    nuyen += inventory[armtype]["cost"];
    $("." + armtype).remove();
    delete inventory[armtype];
    updaters.nuyenUpdater();
}

$("#clotharmor").on("click", ".armmodup, .armmoddown, .buyarmmod", armormodding);

function armormodding() {
    mod = $(this).parent().attr("class");
    item = $(this).parent().parent().parent().attr("class");
    invmod = inventory[item]["mods"][mod];
    var legit = nuyen - invmod["cost"] > 0
    if ($(this).hasClass("armmodup") && invmod["rating"] < 6 && inventory[item]["capacity"] < inventory[item]["armor"] && legit) {
        invmod["rating"]++;
        inventory[item]["capacity"]++;
        nuyen -= invmod["cost"];
        inventory[item]["cost"] += invmod["cost"];
        modUpdater(item, mod, invmod);
    } else if ($(this).hasClass("armmoddown") && invmod["rating"] > 0) {
        invmod["rating"]--;
        inventory[item]["capacity"]--;
        nuyen += invmod["cost"];
        inventory[item]["cost"] -= invmod["cost"];
        modUpdater(item, mod, invmod);
    } else if ($(this).hasClass("buyarmmod") && invmod["active"] == false && invmod["capacity"] + inventory[item]["capacity"] <= inventory[item]["armor"] && legit) {
        inventory[item]["capacity"] += invmod["capacity"];
        nuyen -= invmod["cost"];
        inventory[item]["cost"] += invmod["cost"];
        invmod["active"] = true;
        sellsign($(this));
        costUpdater(item);
        if (mod == "chemicalseal" && inventory[item]["helm"] == false) {
            turnonhelm(item, $("." + item + " .buyhelmmod"))
        }
    } else if ($(this).hasClass("buyarmmod") && invmod["active"] == true) {
        inventory[item]["capacity"] -= invmod["capacity"];
        nuyen += invmod["cost"];
        inventory[item]["cost"] -= invmod["cost"];
        invmod["active"] = false;
        buysign($(this));
        costUpdater(item);
    }
    updaters.nuyenUpdater();

    function modUpdater(x, y, z) {
        $("." + x + " ." + y + " .armmodrating, ." + x + " ." + y + " .armorcap").empty().append(z["rating"]);
        costUpdater(x);
    }

}

function costUpdater(x) {
    $("." + x + " .armorcost").empty().append(inventory[x]["cost"] + "&yen;");
}

function sellsign(x) {
    x.empty().append("<em>-</em>");
}

function buysign(x) {
    x.empty().append("<strong>+</strong>");
}

$("#clotharmor").on("click", ".buyhelmmod", helmup);

function helmup() {
    item = $(this).parent().parent().parent().attr("class");
    if (inventory[item]["helm"] == false && nuyen - inventory[item]["helmmod"]["cost"] > 0) {
        turnonhelm(item, $(this))
    } else {
        buysign($(this));
        inventory[item]["helm"] = false;
        nuyen += inventory[item]["helmmod"]["cost"];
        inventory[item]["cost"] -= inventory[item]["helmmod"]["cost"];
        costUpdater(item);
        if (inventory[item]["mods"]["chemicalseal"]["active"] == true) {
            invmod = inventory[item]["mods"]["chemicalseal"];
            inventory[item]["capacity"] -= invmod["capacity"];
            nuyen += invmod["cost"];
            inventory[item]["cost"] -= invmod["cost"];
            invmod["active"] = false;
            buysign($("." + item + " .chemicalseal .buyarmmod"));
            costUpdater(item);
        }
    }
    updaters.nuyenUpdater();
}

function turnonhelm(item, x) {
    sellsign(x);
    inventory[item]["helm"] = true;
    nuyen -= inventory[item]["helmmod"]["cost"];
    inventory[item]["cost"] += inventory[item]["helmmod"]["cost"];
    costUpdater(item);
}

$("#clothing").on("change", "input", fashioncost);

var clothingcost = 20; //this is the cost of clothing
var electrochromiccost = 0; //this is the cost of clothing with electro chromatic
var feedbackcost = 0; //this is the cost of clothing with feedback
var synthleathercost = 0; //this is the cost of leather clothing

var clothingavail = 0; //the avail of the clothing
var clothingarmor = 0; //the armor value of the clothing, only effected by leather

function fashioncost() { //this is to help calulate how much clothes cost
    cost = $(this).val();
    if (cost == "" || cost < 1) { //if clothes value is less then 1, then its cost = 20
        clothingcost = 20;
    } else { //else the cost is whatever the input says
        clothingcost = cost;
    }
    fashionprice(); //this calulates and renders the cost with the mods that you can add to cloths
}

function fashionprice() {
    $("#clothing .armor").empty().append(clothingarmor);
    $("#clothing .avail").empty().append(clothingavail);
    $("#clothing .cost").empty().append((parseInt(clothingcost) + electrochromiccost + feedbackcost + synthleathercost) + "&yen;");
}

$("#clothing").on("click", ".button", fashionbutton);

function fashionbutton() { //this will change the value and avail of cloths based off of what buttons are pressed.
    switch ($(this).attr("class")) {
        case ("electrochromic button"):
            electrochromiccost = 500;
            fashionactivate($(this), 2);
            break;
        case ("electrochromic button active"):
            electrochromiccost = 0;
            fashionDeactivate($(this), 2);
            break;
        case ("feedback button"):
            feedbackcost = 500;
            fashionactivate($(this), 8);
            break;
        case ("feedback button active"):
            feedbackcost = 0;
            fashionDeactivate($(this), 8);
            break;
        case ("leather button"):
            synthleathercost = 200;
            fashionactivate($(this), 0);
            clothingarmor = 4;
            break;
        case ("leather button active"):
            synthleathercost = 0;
            fashionDeactivate($(this), 0);
            clothingarmor = 0;
            break;
        case ("buycloths button"):
            if (nuyen - (parseInt(clothingcost) + electrochromiccost + feedbackcost + synthleathercost) < 0) {
                return;
            }
            inventory["clothing" + invNum] = {
                electrochromic: false,
                feedback: false,
                leather: false,
                armor: clothingarmor,
                avail: clothingavail,
                cost: parseInt(clothingcost) + electrochromiccost + feedbackcost + synthleathercost
            }
            $("#clothing").after("<tr class='clothing" + invNum + "'><td class='sellarmor button'><em>-</em></td><td>" + clothingcost + "&yen;</td><td class='electrochromic'>Electrochromic</td><td class='feedback'>Feedback</td><td class='leather'>Synthleather</td><td>" + clothingarmor + "</td><td>" + clothingavail + "</td><td>" + inventory["clothing" + invNum]["cost"] + "&yen;</td></tr>");
            if (synthleathercost == 200) {
                inventory["clothing" + invNum]["leather"] = true;
                clothingmodactive(invNum + " .leather");
            }
            if (feedbackcost == 500) {
                inventory["clothing" + invNum]["feedback"] = true;
                clothingmodactive(invNum + " .feedback");
            }
            if (electrochromiccost == 500) {
                inventory["clothing" + invNum]["electrochromic"] = true;
                clothingmodactive(invNum + " .electrochromic");
            }
            nuyen -= inventory["clothing" + invNum]["cost"]
            invNum++;
            updaters.nuyenUpdater();
            break;
    }
    fashionprice();

    function clothingmodactive(x) {
        $(".clothing" + x).addClass("active");
    }

    function fashionactivate(x, y) {
        x.addClass("active");
        clothingavail += y;
    }

    function fashionDeactivate(x, y) {
        x.removeClass("active");
        clothingavail -= y;
    }
}



$("#gearResource").on("click", ".buyUp, .sellDown", buyinbulk);

function buyinbulk() { //used to buy rfid tags, or possible other items that can be baught like rfid tags
    var rfid = $(this).parent().attr("class");
    if (typeof inventory[rfid] === "undefined") {
        inventory[rfid] = electronics[rfid];
        inventory[rfid]["tagNo"] = 0;
    }
    if ($(this).hasClass("buyUp") && nuyen - inventory[rfid]["cost"] > 0) {
        inventory[rfid]["tagNo"] += inventory[rfid]["peritem"];
        nuyen -= inventory[rfid]["cost"];
    } else if ($(this).hasClass("sellDown") && inventory[rfid]["tagNo"] > 0) {
        inventory[rfid]["tagNo"] -= inventory[rfid]["peritem"];
        nuyen += inventory[rfid]["cost"];
    }
    tenUp(rfid);
    updaters.nuyenUpdater();

    function tenUp(x) {
        $("." + x + " .numrfid").empty().append(inventory[x]["tagNo"]);
    }
}

$("#gearResource").on("click", ".buydevice", appleStore);

function appleStore() { //this function handles buying electroic devices, and now it seems to also be used to buy everything...
    var devicename = $(this).parent().attr("class");
    if ($(this).hasClass("deact") || nuyen - electronics[devicename]["cost"] < 0) {
        return;
    }
    toInventory(devicename);
    switch (electronics[devicename]["type"]) {
        case "commlink":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='linkmods' colspan=3></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            $("." + devicename + invNum + " .linkmods").append("<td class='label'>Sim Mod</td><td class='simmod button'>+</td><td class='label'>Hot Sim</td><td class='hotsim button'>+</td>");
            break;
        case "deck":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='programs' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            var localmod = $("." + devicename + invNum + " .programs");
            localmod.append("<tr class='agent'><td class='label'>Agent</td><td class='agentup button'>+</td><td class='agentrating'>0</td><td class='agentdown button'>-</td></tr>");
            for (var program in programs) {
                localmod.append("<tr class='" + program + "'><td class='label'>" + programs[program]["name"] + "</td><td class='buyprogram button' colspan=3><strong>+</strong></td></tr>");
            }
            break;
        case "rcc":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='programs' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            var localmod = $("." + devicename + invNum + " .programs");
            for (var program in programs) {
                if (programs[program]["rcc"] == true) {
                    localmod.append("<tr class='" + program + "'><td class='label'>" + programs[program]["name"] + "</td><td class='buyprogram button' colspan=3><strong>+</strong></td></tr>");
                }
            }
            break;
        case "accessory":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moddy' colspan=3></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "communication":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='devicerating' colspan=3>n/a</td><td colspan=2></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            if (typeof inventory[devicename + invNum]["rating"] !== "undefined") {
                $("." + devicename + invNum + " .devicerating").empty().append(inventory[devicename + invNum]["rating"]);
            }
            break;

        case "credsticks":
            $("#credsticks " + "." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=3></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "identification":
            inventory[devicename + invNum]["id"] = $("." + devicename + " .fakename").val();
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=3>" + inventory[devicename + invNum]["rating"] + "</td><td>" + inventory[devicename + invNum]["id"] + "</td><td>" + inventory[devicename + invNum]["avail"] + " " + inventory[devicename + invNum]["restrict"] + "</td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "tools":
            inventory[devicename + invNum]["skill"] = $("." + devicename + " .toolname").val();
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=2>" + inventory[devicename + invNum]["skill"] + " " + inventory[devicename + invNum]["name"] + "</td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "optics":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=4></td><td class='deviceavail'>" + inventory[devicename + invNum]["avail"] + "</td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            enhancements(visionenhancements, inventory[devicename + invNum]["rating"], devicename + invNum, devicename);
            break;
        case "audio":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=4></td><td class='deviceavail'>" + inventory[devicename + invNum]["avail"] + "</td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            enhancements(audioenhancements, inventory[devicename + invNum]["rating"], devicename + invNum, devicename);
            break;
        case "securitydevice":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='devicerating' colspan=3>" + inventory[devicename + invNum]["name"] + " " + inventory[devicename + invNum]["rating"] + "</td><td class='mods'></td><td class='avail'>" + inventory[devicename + invNum]["avail"] + "</td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            if (devicename == "maglock") {
                for (var mod in maglockMod) {
                    $("." + devicename + invNum + " .mods").append("<tr class='" + mod + "'><td class='addmod button'><strong>+</strong></td><td class='ratingUp button'>+</td><td class='commrating'>" + maglockMod[mod]["rating"] + "</td><td class='ratingDown button'>-</td><td>" + maglockMod[mod]["name"] + "</td></tr>");
                    if (typeof maglockMod[mod]["rating"] == "undefined") {
                        $("." + devicename + invNum + " ." + mod + " .ratingUp, ." + devicename + invNum + " ." + mod + " .ratingDown").addClass("deact");
                        $("." + devicename + invNum + " ." + mod + " .commrating").empty().append("n/a");
                    }
                }
            }
            break;
        case "bnegear":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='devicerating' colspan=3>" + inventory[devicename + invNum]["name"] + " " + inventory[devicename + invNum]["rating"] + "</td><td class='mods'></td><td class='avail'>" + inventory[devicename + invNum]["avail"] + "</td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "chemicals":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "survivalgear":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "grapplegungear":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=4></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "biotech":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "docwagon":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "slappatches":
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
            break;
        case "enchantingfoci":
        case "metamagicfoci":
        case "powerfoci":
        case "qifoci":
        case "spellfoci":
        case "spiritfoci":
            if (fociRating + inventory[devicename + invNum]["rating"] > fociMaxRating || focinumber + 1 > attributes.current.mag || karma - (inventory[devicename + invNum]["rating"] * inventory[devicename + invNum]["karmaCost"]) <= 0) {
                alert("You're at the max foci rating you can bond");
                return;
            }
            magicalGoods(devicename, devicename + invNum, inventory[devicename + invNum]);
            focinumber++;
            fociRating += inventory[devicename + invNum]["rating"];
            karma -= inventory[devicename + invNum]["rating"] * inventory[devicename + invNum]["karmaCost"];
            pointUpdater("#karmapnt", karma);
            break;
        default:
            $("." + devicename).after("<tr class='" + devicename + invNum + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=5></td><td class='devicecost'>" + inventory[devicename + invNum]["cost"] + "&yen;</td></tr>");
    }
    nuyen -= inventory[devicename + invNum]["cost"];
    invNum++;
    updaters.nuyenUpdater();

    function toInventory(x) { //this adds the device in to the inventory
        inventory[x + invNum] = {};
        for (var deviceAtt in electronics[x]) {
            inventory[x + invNum][deviceAtt] = electronics[x][deviceAtt];
        }

        var y = electronics[x]["type"]
        if (y == "deck" || y == "rcc" || y == "commlink") {
            inventory[x + invNum]["programlist"] = {};

        }

    }

    function magicalGoods(x, y, z) { //x=devicename, y=device's name in inventory, z=device in inventory
        if (typeof z.magicType === "undefined") {
            $("." + x).after("<tr class='" + y + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=3>" + z.rating + "</td><td>" + z.name + "</td><td>" + z.avail + " " + z.restrict + "</td><td class='devicecost'>" + z.cost + "&yen;</td></tr>");
        } else if (x == "qifocus") {
            $("." + x).after("<tr class='" + y + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=3>" + z.rating + "</td><td>" + z.name + "</td><td>" + adeptPowers[z.magicType]["name"] + "</td><td>" + z.avail + " " + z.restrict + "</td><td class='devicecost'>" + z.cost + "&yen;</td></tr>");
        } else {
            $("." + x).after("<tr class='" + y + "'><td class='selldevice button'><em>-</em></td><td class='moody' colspan=3>" + z.rating + "</td><td>" + z.name + "</td><td>" + z.magicType + "</td><td>" + z.avail + " " + z.restrict + "</td><td class='devicecost'>" + z.cost + "&yen;</td></tr>");
        }
    }
}

$("#securitydevice").on('click', ".addmod", addingMagMod);

function addingMagMod() {
    var mod = $(this).parent().attr("class");
    var magic = $(this).parent().parent().parent().attr("class");

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        inventory[magic]["avail"] -= inventory[magic]["maglockMods"][mod]["avail"];
        inventory[magic]["cost"] -= inventory[magic]["maglockMods"][mod]["cost"];
        nuyen += inventory[magic]["maglockMods"][mod]["cost"];
        delete inventory[magic]["maglockMods"][mod];
    } else {
        if (inventory[magic]["avail"] + maglockMod[mod]["avail"] > maxAvail) {
            return;
        }
        $(this).addClass("active");
        inventory[magic]["maglockMods"][mod] = {};
        for (var key in maglockMod[mod]) {
            inventory[magic]["maglockMods"][mod][key] = maglockMod[mod][key];
        }
        inventory[magic]["avail"] += maglockMod[mod]["avail"];
        inventory[magic]["cost"] += maglockMod[mod]["cost"];
        nuyen -= maglockMod[mod]["cost"];
    }
    $("." + magic + " .avail").empty().append(inventory[magic]["avail"]);
    $("." + magic + " .devicecost").empty().append(inventory[magic]["cost"] + "&yen;");
    updaters.nuyenUpdater();
}

//This function is for giving devices access to its mods
function enhancements(w, x, y, z) { //w==enchancements, x=device capacity, y=device name + inventory number, z=the normal device

    inventory[y]["mods"] = [];
    var defaultMods = electronics[z]["mods"];
    if (typeof defaultMods !== "undefined") {
        inventory[y]["mods"] = defaultMods.slice(0);
    }

    var preinstalled = inventory[y]["mods"].length;

    for (var mod in inventory[y]["mods"]) {
        $("." + y + " .moody").append("<div class='modslot " + i + "'>" + inventory[y]["mods"][mod] + "</div>");
    }

    for (var i = 0 + preinstalled; i < x + preinstalled; i++) {
        $("." + y + " .moody").append("<div class='modslot " + i + "'>" + "<select class='" + inventory[y]["type"] + "'></select>" + "</div>");
        inventory[y]["mods"][i] = "";
    }
    for (var mod in w) {
        $("." + y + " .moody .modslot select").append("<option value='" + mod + "'>" + w[mod]["name"] + "</option>");
        var modcap = w[mod]["cap"];
        if (modcap > 1) {
            for (var i = modcap; i > 1; i--) {
                $("." + y + " .moody .modslot." + (inventory[y]["mods"].length - i + 1) + " option[value='" + mod + "']").prop("disabled", "disabled");
            }
        }
    }

}

$("#gearResource").on("click", ".selldevice", microsoftStore);

function microsoftStore() { //this sells the device
    var devicename = $(this).parent().attr("class");
    $("." + devicename).remove();
    nuyen += inventory[devicename]["cost"];
    if (typeof inventory[devicename]["karmaCost"] !== "undefined") {
        focinumber--;
        fociRating -= inventory[devicename]["rating"];
        karma += inventory[devicename]["rating"] * inventory[devicename]["karmaCost"];
        pointUpdater("#karmapnt", karma);
    }
    delete inventory[devicename];
    updaters.nuyenUpdater();
}

$("#devices").on("click", ".programs .button", buyProgram); //this is for buying cyber programs for decks and RCCs

function buyProgram() {
    var device = $(this).parent().parent().parent().attr("class");
    var program = $(this).parent().attr("class");
    if (typeof programs[program] !== "undefined") {
        cost = programcost(program);
    }
    if ($(this).hasClass("agentup")) {
        if (typeof inventory[device]["programlist"]["agent"] === "undefined" && nuyen - 1000 > 0) {
            inventory[device]["programlist"]["agent"] = 1;
            nuyen -= 1000;
            inventory[device]["cost"] += 1000;
        } else if (inventory[device]["programlist"]["agent"] < 4) {
            if (inventory[device]["programlist"]["agent"] < 3 && nuyen - 1000 > 0) {
                nuyen -= 1000;
                inventory[device]["cost"] += 1000;
            } else if (inventory[device]["programlist"]["agent"] == 3 && nuyen - 5000 > 0) {
                nuyen -= 5000;
                inventory[device]["cost"] += 5000;
            } else if (inventory[device]["programlist"]["agent"] >= 4 && nuyen - 2000 > 0) {
                nuyen -= 2000;
                inventory[device]["cost"] += 2000;
            } else {
                inventory[device]["programlist"]["agent"] = 0;
            }
            inventory[device]["programlist"]["agent"]++;
            agentupdate(device);
        }
        $("." + device + " .agentrating").empty().append(inventory[device]["programlist"]["agent"])
    } else if ($(this).hasClass("agentdown")) {
        if (inventory[device]["programlist"]["agent"] > 0) {
            inventory[device]["programlist"]["agent"]--;
            if (inventory[device]["programlist"]["agent"] < 3) {
                nuyen += 1000;
                inventory[device]["cost"] -= 1000;
            } else if (inventory[device]["programlist"]["agent"] == 3) {
                nuyen += 5000;
                inventory[device]["cost"] -= 5000;
            } else if (inventory[device]["programlist"]["agent"] > 3) {
                nuyen += 2000;
                inventory[device]["cost"] -= 2000;
            }
        }
        agentupdate(device);
    } else if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        delete inventory[device]["programlist"][program];
        nuyen += cost;
        inventory[device]["cost"] -= cost;
    } else if (nuyen - cost > 0) {
        $(this).addClass("active");
        inventory[device]["programlist"][program] = programs[program];
        nuyen -= cost;
        inventory[device]["cost"] += cost;
    }
    $("." + device + " .devicecost").empty().append(inventory[device]["cost"] + "&yen;");
    updaters.nuyenUpdater();

    function programcost(x) {
        cost = 0;
        if (programs[x]["category"] == "common") {
            cost = 80;
        } else {
            cost = 250;
        }
        return (cost);
    }

    function agentupdate(x) {
        $("." + x + " .agentrating").empty().append(inventory[x]["programlist"]["agent"])
    }
}


$("#devices").on("click", ".linkmods .button", buylinkmod); //commlink mods

function buylinkmod() {
    var device = $(this).parent().parent().attr("class");
    if ($(this).hasClass("simmod")) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            inventory[device]["programlist"]["simmod"] = false;
            nuyen += 100;
            inventory[device]["cost"] -= 100;
            if (inventory[device]["programlist"]["hotsim"] == true) {
                $("." + device + " .hotsim").removeClass("active");
                inventory[device]["programlist"]["hotsim"] = false;
                nuyen += 250;
                inventory[device]["cost"] -= 250;
            }
        } else {
            $(this).addClass("active");
            inventory[device]["programlist"]["simmod"] = true;
            nuyen -= 100;
            inventory[device]["cost"] += 100;
        }
    } else if ($(this).hasClass("hotsim")) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            inventory[device]["programlist"]["hotsim"] = false;
            nuyen += 250;
            inventory[device]["cost"] -= 250;
        } else {
            $(this).addClass("active");
            inventory[device]["programlist"]["hotsim"] = true;
            nuyen -= 250;
            inventory[device]["cost"] += 250;
            if (inventory[device]["programlist"]["simmod"] == false || typeof inventory[device]["programlist"]["simmod"] === "undefined") {
                $("." + device + " .simmod").addClass("active");
                inventory[device]["programlist"]["simmod"] = true;
                nuyen -= 100;
                inventory[device]["cost"] += 100;
            }
        }
    }
    $("." + device + " .devicecost").empty().append(inventory[device]["cost"] + "&yen;");
    updaters.nuyenUpdater();
}

$("#gearResource").on("click", ".ratingUp, .ratingDown", commRating); //this is for raising and slowing communcation devices ratings

function commRating() {
    if ($(this).hasClass("deact")) {
        return;
    }
    var device = $(this).parent().attr("class");
    if (typeof electronics[device] !== "undefined") {
        var ed = electronics[device]; //ed=electronic device
    } else if (typeof maglockMod !== "undefined") {
        var ed = maglockMod[device];
    }


    if (typeof ed.ratingmax === "undefined") { //if ratingmax isn't defined, then the max is 6, else its the ratingmax
        var ratingmax = 6;
    } else {
        var ratingmax = ed.ratingmax;
    }


    if ($(this).hasClass("ratingUp") && ed["avail"] < maxAvail && ed["rating"] < ratingmax) { //if this is the rating up button, up the rating of the device
        ed["rating"]++;
        ed["avail"] += ed["availx"];
        ed.cost += ed.costx;
    } else if ($(this).hasClass("ratingDown") && ed["rating"] > 1) { //else if this is the rating down device, lower the rating
        ed["rating"]--;
        ed["avail"] -= ed["availx"];
        ed.cost -= ed.costx;
    }
    $("." + device + " .commrating").empty().append(ed["rating"]);
    $("." + device + " .avail").empty().append(ed["avail"] + " " + ed["restrict"]);
    $("." + device + " .price").empty().append(ed["cost"] + "&yen;");
}

$("#e-accessories").on("change", ".modslot select", modChange)

function modChange() {
    var device = $(this).parents("tr").attr("class");
    var slotNum = Number($(this).parent().attr('class').split(' ')[1]);
    var mod = $(this).val();
    var oldMod = inventory[device]["mods"][slotNum];
    console.log(oldMod);
    if (oldMod === "") {
        oldMod = "empty";
    }
    switch ($(this).attr("class")) {
        case "audio":
            var enhanceMods = audioenhancements;
            break;
        case "optics":
            var enhanceMods = visionenhancements;
            break;
    }

    if (nuyen - enhanceMods[mod]["cost"] + enhanceMods[oldMod]["cost"] < 0 || inventory[device]["avail"] + enhanceMods[mod]["avail"] - enhanceMods[oldMod]["avail"] > maxAvail) { //if the mod costs too much or changes the avail too high then change to empty and return
        $(this).val(oldMod);
        return;
    }

    if (oldMod != "") {
        nuyen += enhanceMods[oldMod]["cost"];
        inventory[device]["avail"] -= enhanceMods[oldMod]["avail"];
        inventory[device]["cost"] -= enhanceMods[oldMod]["cost"];
        multipleCapacity(oldMod, false);
    }
    multipleCapacity(mod, 'disabled');



    inventory[device]["avail"] += enhanceMods[mod]["avail"];
    inventory[device]["cost"] += enhanceMods[mod]["cost"];
    nuyen -= enhanceMods[mod]["cost"];
    inventory[device]["mods"][slotNum] = mod;

    //updates the avail and cost
    $("." + device + " .deviceavail").empty().append(inventory[device]["avail"] + inventory[device]["restrict"]);
    $("." + device + " .devicecost").empty().append(inventory[device]["cost"] + "&yen;");

    updaters.nuyenUpdater();


    function multipleCapacity(x, y) { //x= mod, y=disable or false
        var cap = enhanceMods[x]["cap"];
        if (cap > 1) {
            for (var i = 1; i < cap; i++) {
                var nextslot = ("." + device + " .modslot." + (slotNum + i) + " select");
                if ($(nextslot).val() != "empty") {
                    console.log(enhanceMods[$(nextslot).val()]["cost"]);
                    nuyen += enhanceMods[$(nextslot).val()]["cost"];
                    inventory[device]["cost"] -= enhanceMods[$(nextslot).val()]["cost"];
                    inventory[device]["mods"][slotNum + i] = "empty";
                    $(nextslot).val("empty");
                }

                $(nextslot).prop('disabled', y);
            }
        }
    }
}

$("#magicequipment").on("change", ".magicType select", spellChange)

function spellChange() {
    electronics[$(this).parents("tr").attr("class")]["magicType"] = $(this).val();
}

$("#qifoci").on("change", ".adeptPowers select", adeptPowerChange)

function adeptPowerChange() {
    var power = $(this).val();
    var qifoci = $(this).parents("tr").attr("class");

    if (adeptPowers[power]["level"] == "n/a") {
        $("." + qifoci + " .ratingUp," + "." + qifoci + " .ratingDown").addClass("deact");
    } else {
        $("." + qifoci + " .ratingUp," + "." + qifoci + " .ratingDown").removeClass("deact");
    }
    electronics.qifocus.magicType = power;
    electronics.qifocus.rating = adeptPowers[power]["cost"] * 4; //sets the rating of the focus to 4x the cost of the power points
    electronics.qifocus.avail = electronics.qifocus.rating * 3 //sets avail to 3x the focus rating
    electronics.qifocus.cost = electronics.qifocus.rating * 3000 //set cost to 3000x the rating
    $("." + qifoci + " .commrating").empty().append(electronics.qifocus.rating);
    $("." + qifoci + " .avail").empty().append(electronics.qifocus.avail + " " + electronics.qifocus.restrict);
    $("." + qifoci + " .price").empty().append(electronics.qifocus.cost + "&yen;");
}

$("#cyberlimbs").on("change", "select", typeOfLimb)

function typeOfLimb() {
    var limb = $(this).parents("tr").attr("class");
    var limbType = $("." + limb + " .type select").val();
    var selectLimb = $(this).val();
    switch (selectLimb) {
        case "used":
        case "standard":
        case "alpha":
        case "beta":
        case "delta":
            augmentations[limbType][limb]["cost"] /= augmentations["grade"][augmentations[limbType][limb]["grade"]]["cost"];
            augmentations[limbType][limb]["cost"] *= augmentations["grade"][selectLimb]["cost"];
            augmentations[limbType][limb]["essence"] /= augmentations["grade"][augmentations[limbType][limb]["grade"]]["ess"];
            augmentations[limbType][limb]["essence"] *= augmentations["grade"][selectLimb]["ess"];
            augmentations[limbType][limb]["avail"] -= augmentations["grade"][augmentations[limbType][limb]["grade"]]["avail"];
            augmentations[limbType][limb]["avail"] += augmentations["grade"][selectLimb]["avail"];
            augmentations[limbType][limb]["grade"] = selectLimb;
        case "obvious":
        case "synthetic":
            $("." + limb + " .limb").empty().append(augmentations[limbType][limb]["name"]);
            $("." + limb + " .grade select").val(augmentations[limbType][limb]["grade"]);
            $("." + limb + " .str").empty().append(augmentations[limbType][limb]["str"]);
            $("." + limb + " .agi").empty().append(augmentations[limbType][limb]["agi"]);
            $("." + limb + " .cap").empty().append(augmentations[limbType][limb]["capmax"]);
            $("." + limb + " .avail").empty().append(augmentations[limbType][limb]["avail"]);
            $("." + limb + " .ess").empty().append(Math.round(augmentations[limbType][limb]["essence"] * 1000) / 1000);
            $("." + limb + " .price").empty().append(augmentations[limbType][limb]["cost"] + "&yen;");
            break;
    }
}

$("#cyberlimbs").on("click", ".button", customLimb) //this allows for a limb to have custom str or agi. It also allows people to buy limbs, since that's also a button

function customLimb() {
    var limb = $(this).parents("tr").attr("class");
    var limbType = $("." + limb + " .type select").val();
    var limbGrade = $("." + limb + " .grade select").val();

    switch ($(this).attr("class")) {
        case "strUp button":
            if (augmentations[limbType][limb]["str"] >= attributes.maximum.strmax) {
                return;
            }
            augmentations[limbType][limb]["str"]++;
            augmentations[limbType][limb]["avail"]++;
            augmentations[limbType][limb]["cost"] += (5000 * augmentations.grade[limbGrade]["cost"]);
            customlimbUpdater();
            break;
        case "strDown button":
            if (augmentations[limbType][limb]["str"] <= 3) {
                return;
            }
            augmentations[limbType][limb]["str"]--;
            augmentations[limbType][limb]["avail"]--;
            augmentations[limbType][limb]["cost"] -= (5000 * augmentations.grade[limbGrade]["cost"]);
            customlimbUpdater();
            break;
        case "agiUp button":
            if (augmentations[limbType][limb]["agi"] >= attributes.maximum.agimax) {
                return;
            }
            augmentations[limbType][limb]["agi"]++;
            augmentations[limbType][limb]["avail"]++;
            augmentations[limbType][limb]["cost"] += (5000 * augmentations.grade[limbGrade]["cost"]);
            customlimbUpdater();
            break;
        case "agiDown button":
            if (augmentations[limbType][limb]["agi"] <= 3) {
                return;
            }
            augmentations[limbType][limb]["agi"]--;
            augmentations[limbType][limb]["avail"]--;
            augmentations[limbType][limb]["cost"] -= (5000 * augmentations.grade[limbGrade]["cost"]);
            customlimbUpdater();
            break;
        case "buyAug button":
            if (augmentations[limbType][limb]["slot"] == "arm" || augmentations[limbType][limb]["slot"] == "leg") {
                var side = $("." + limb + " .location select").val();
            } else {
                var side = "";
            }
            if ($.isEmptyObject(characteraugmentation.limbs[side + augmentations[limbType][limb]["slot"]])) {
                var limbloc = side + augmentations[limbType][limb]["slot"];
                var cyber = characteraugmentation.limbs[limbloc] = $.extend({}, augmentations[limbType][limb]);
                $("." + limb).after("<tr class='" + limbloc + "'><td class='sellAug button'><em>-</em></td><td>" + side + " " + limbType + " " + augmentations[limbType][limb]["slot"] + "</td><td class='cybermods' colspan=12><table class='mods'><tbody></tbody></table></td><td class='price'>" + cyber.cost + "&yen;</td></tr>");

                for (var mod in augmentations.mods) {
                    for (var x in augmentations.mods[mod]["allow"]) {
                        if (augmentations.mods[mod]["allow"][x] == augmentations[limbType][limb]["slot"]) {
                            var targetMod = augmentations.mods[mod];
                            if (typeof targetMod.rating !== "undefined") {
                                $("." + limbloc + " .cybermods table.mods tbody").append("<tr class='" + mod + "'><td>" + targetMod.name + "</td><td class='modUp button'><strong>+</strong></td><td class='modRating'>0</td><td class='modDown button'><strong>-</strong></td><td class='label'>Cap</td><td class='cap'>[" + targetMod.capacity + "]</td><td class='label'>Avail</td><td class='avail'>" + targetMod.avail + targetMod.restrict + "</td><td class='label'>Price</td><td class='price'>" + targetMod.cost * augmentations.grade[cyber.grade]["cost"] + "&yen;</td></tr>");
                            } else {
                                $("." + limbloc + " .cybermods table.mods tbody").append("<tr class='" + mod + "'><td>" + targetMod.name + "</td><td class='buyMod button' colspan=3><strong>-</strong></td><td class='label'>Cap</td><td class='cap'>[" + targetMod.capacity + "]</td><td class='label'>Avail</td><td class='avail'>" + targetMod.avail + targetMod.restrict + "</td><td class='label'>Price</td><td class='price'>" + targetMod.cost * augmentations.grade[cyber.grade]["cost"] + "&yen;</td></tr>");
                            }
                        }
                    }
                }

                $("." + limbloc + " .cybermods").append("<table class='weapons'><tbody><tr class='label'><td>CyberWeapon</td><td>Buy</td><td>Ext. Clip</td><td>Laser Sight</td><td>Silencer</td><td>Cap</td><td>Acc</td><td>Dam</td><td>Fire Mod</td><td>RC</td><td>Ammo</td><td>Avail</td><td>Cost</td></tr></tbody></table>");

                for (var weapon in augmentations.weapons) {
                    var weap = augmentations.weapons[weapon];
                    $("." + limbloc + " .cybermods table.weapons tbody").append("<tr class='" + weapon + "'><td>" + weap.name + "</td><td class='buyMod button'><strong>+</strong></td><td class='clip button'>+</td><td class='laser button'>+</td><td class='silencer button'>+</td><td class='capacity'>[" + weap.capacity + "]</td><td class='accuracy'>" + weap.stats.accuracy + "(" + (weap.stats.accuracy + weap.stats.accmod) + ")" + "</td><td class='damage'>" + weap.stats.damage + weap.stats.damtype + "</td><td class='mode'></td><td class='rc'>" + weap.stats.rc + "</td><td class='ammo'></td><td class='avail'>" + weap.avail + weap.restrict + "</td><td class='cost'>" + weap.cost + "&yen;</td></tr>");
                    for (fire in weap.stats.mode) {
                        $("." + limbloc + " .cybermods .weapons ." + weapon + " .mode").append(weap.stats.mode[fire] + ", ");
                    }
                    for (type in weap.stats.ammo) {
                        $("." + limbloc + " .cybermods .weapons ." + weapon + " .ammo").append(weap.stats.ammo[type] + "(" + weap.stats.clip[type] + ")");
                    }
                }

                $("." + limbloc + " .cybermods").append("<table class='cyberstats'><tbody><tr class='label'><td>Capacity</td><td>Str</td><td>Agi</td><td>Armor</td><td>RC</td><td>Avail</td><td>Ess</td></tr><tr class='stats'><td class='cap'>" + cyber.cap + "/" + cyber.capmax + "</td><td class='str'>(" + (cyber.str + cyber.augstr) + ")</td><td class='agi'>(" + (cyber.agi + cyber.augagi) + ")</td><td class='armor'>" + cyber.armor + "</td><td class='rc'>" + (cyber.rc + (Math.ceil(cyber.str / 3)) + 1) + "</td><td>" + cyber.avail + "</td><td>" + cyber.essence + "</td></tr></tbody></table>")

                cyber["mods"] = {};

                ess -= cyber.essence;
                attributes.current.mag -= cyber.essence;
                attributes.maximum.magmax -= cyber.essence;
                attributes.current.res -= cyber.essence;
                attributes.maximum.resmax -= cyber.essence;
                nuyen -= cyber.cost;
                disUpdater();

            } else {
                alert("You already have a wiz new " + side + " " + augmentations[limbType][limb]["slot"]);
            }

            break;
        case "buyMod button":
            var mod = limb;
            limb = $(this).parents("tr").parents("tr").attr("class");
            var typeOfMod = $(this).parents("table").attr("class");

            activate($(this));

            var charlimb = characteraugmentation.limbs[limb];
            var modslot = charlimb["mods"];
            modslot[mod] = $().extend({}, augmentations[typeOfMod][mod]); //this copies the limb into its location

            //this stuff changes all the stats to the new bought stuff
            charlimb.cap += modslot[mod]["capacity"];
            nuyen -= augmentations[typeOfMod][mod]["cost"] * augmentations.grade[charlimb.grade]["cost"];
            charlimb.cost += augmentations[typeOfMod][mod]["cost"] * augmentations.grade[charlimb.grade]["cost"];

            cyberlimbUpdater();
            break;
        case "buyMod button active":
            var mod = limb;
            limb = $(this).parents("tr").parents("tr").attr("class");
            var charlimb = characteraugmentation.limbs[limb];
            var typeOfMod = $(this).parents("table").attr("class");
            deactivate($(this));

            charlimb.cap -= charlimb.mods[mod]["capacity"];
            nuyen += augmentations[typeOfMod][mod]["cost"] * augmentations.grade[charlimb.grade]["cost"];
            charlimb.cost -= augmentations[typeOfMod][mod]["cost"] * augmentations.grade[charlimb.grade]["cost"];

            cyberlimbUpdater();
            delete characteraugmentation.limbs[limb]["mods"][mod];
            break;
        case "modUp button":
            var mod = limb;
            limb = $(this).parents("tr").parents("tr").attr("class");
            var charlimb = characteraugmentation.limbs[limb];

            if (typeof charlimb.mods[mod] === "undefined") {
                charlimb.mods[mod] = $().extend({}, augmentations.mods[mod]);
            }
            if (charlimb.mods[mod]["rating"] >= charlimb.mods[mod]["ratingmax"]) {
                return;
            }

            charlimb.mods[mod]["rating"]++;
            charlimb.mods[mod]["capacity"]++;
            var costUp = charlimb.mods[mod]["costx"] * augmentations.grade[charlimb.grade]["cost"];
            charlimb.mods[mod]["cost"] += costUp;
            charlimb.mods[mod]["avail"] += charlimb.mods[mod]["availx"];
            charlimb[charlimb.mods[mod]["stat"]]++;
            charlimb.cost += costUp;
            nuyen -= costUp;
            charlimb.cap++; //might need to come back and change this if there are mods that capacity increase in higher increments

            cyberEnhanceUpdater();
            cyberlimbUpdater();

            break;
        case "modDown button":
            var mod = limb;
            limb = $(this).parents("tr").parents("tr").attr("class");
            var charlimb = characteraugmentation.limbs[limb];
            if (charlimb.mods[mod]["rating"] > 0) {
                charlimb.mods[mod]["rating"]--;
                charlimb.mods[mod]["capacity"]--;
                var costDown = charlimb.mods[mod]["costx"] * augmentations.grade[charlimb.grade]["cost"]
                charlimb.mods[mod]["cost"] -= costDown;
                charlimb.mods[mod]["avail"] -= charlimb.mods[mod]["availx"];
                charlimb[charlimb.mods[mod]["stat"]]--;
                charlimb.cost -= costDown;
                nuyen += costDown;
                charlimb.cap--;

                cyberEnhanceUpdater();
                cyberlimbUpdater();
            }
            break;
        case "sellAug button":
            var cyber = characteraugmentation.limbs[limb];
            ess += cyber.essence;
            attributes.current.mag += cyber.essence;
            attributes.maximum.magmax += cyber.essence;
            attributes.current.res += cyber.essence;
            attributes.maximum.resmax += cyber.essence;
            nuyen += cyber.cost;

            characteraugmentation.limbs[limb] = {};
            $(this).parent().remove();
            disUpdater();
            break;

    }

    function cyberEnhanceUpdater() {
        $("." + limb + " ." + mod + " .price").empty().append(charlimb.mods[mod]["cost"] + "&yen;");
        $("." + limb + " ." + mod + " .avail").empty().append(charlimb.mods[mod]["avail"]);
        $("." + limb + " ." + mod + " .cap").empty().append("[" + charlimb.mods[mod]["capacity"] + "]");
        $("." + limb + " ." + mod + " .modRating").empty().append(charlimb.mods[mod]["rating"]);
        $("." + limb + " .cyberstats ." + charlimb.mods[mod]["stat"]).empty().append("(" + charlimb[charlimb.mods[mod]["stat"]] + ")");
    }

    function cyberlimbUpdater() {
        $("." + limb + " .cyberstats .cap").empty().append(characteraugmentation.limbs[limb]["cap"] + "/" + characteraugmentation.limbs[limb]["capmax"]);
        $("." + limb + ">.price").empty().append(charlimb.cost + "&yen;")
        updaters.nuyenUpdater();
    }

    function customlimbUpdater() {
        $("." + limb + " .str").empty().append(augmentations[limbType][limb]["str"]);
        $("." + limb + " .agi").empty().append(augmentations[limbType][limb]["agi"]);
        $("." + limb + " .avail").empty().append(augmentations[limbType][limb]["avail"]);
        $("." + limb + " .price").empty().append(augmentations[limbType][limb]["cost"] + "&yen;");
    }
}
