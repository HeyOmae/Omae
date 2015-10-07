var adeptPowers = {
    adrenalineboost: {
        name: "Adrenaline Boost",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "free",
        drain: true
    },
    astralperception: {
        name: "Astral Perception",
        active: false,
        level: "n/a",
        cost: 1,
        activation: "simple",
        drain: false
    },
    attributeboostagility: {
        name: "Attribute Boost (Agility)",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "simple",
        drain: true
    },
    attributeboostbody: {
        name: "Attribute Boost (Body)",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "simple",
        drain: true
    },
    attributeboostreaction: {
        name: "Attribute Boost (Reaction)",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "simple",
        drain: true
    },
    attributebooststrength: {
        name: "Attribute Boost (Strength)",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "simple",
        drain: true
    },
    combatsense: {
        name: "Combat Sense",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    criticalstrikeunarmed: {
        name: "Critical Strike (Unarmed)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    criticalstrikeclubs: {
        name: "Critical Strike (Clubs)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    criticalstrikeblades: {
        name: "Critical Strike (Blades)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    criticalstrikeastralcombat: {
        name: "Critical Strike (Astral Combat)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    criticalstrikeexoticweapon: {
        name: "Critical Strike (Exotic Weapon)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    dangersense: {
        name: "Danger Sense",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedperception: {
        name: "Enhanced Perception",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "perception",
            2: "assensing"
        }
    },
    enhancedaccuracyarchery: {
        name: "Enhanced Accuracy (Archery)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracyautomatics: {
        name: "Enhanced Accuracy (Automatics)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracyblades: {
        name: "Enhanced Accuracy (Blades)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracyclubs: {
        name: "Enhanced Accuracy (Clubs)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracyexoticmelee: {
        name: "Enhanced Accuracy (Exotic Melee)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracyexoticranged: {
        name: "Enhanced Accuracy (Exotic Ranged)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracygunnery: {
        name: "Enhanced Accuracy (Gunnery)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracyheavyweapons: {
        name: "Enhanced Accuracy (Heavy Weapons)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracylongarms: {
        name: "Enhanced Accuracy (Longarms)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracypistols: {
        name: "Enhanced Accuracy (Pistols)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    enhancedaccuracythrowingweapons: {
        name: "Enhanced Accuracy (Throwing Weapons)",
        active: false,
        level: "n/a",
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    improvedabilityarchery: {
        name: "Improved Ability (Archery)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "archery"
        }
    },
    improvedabilityautomatics: {
        name: "Improved Ability (Automatics)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "automatics"
        }
    },
    improvedabilityblades: {
        name: "Improved Ability (Blades)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "blades"
        }
    },
    improvedabilityclubs: {
        name: "Improved Ability (Clubs)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "clubs"
        }
    },
    improvedabilityexoticrangedweapon: {
        name: "Improved Ability (Exotic Ranged Weapon)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "exoticrangedweapon"
        }
    },
    improvedabilityexoticmeleeweapon: {
        name: "Improved Ability (Exotic Melee Weapon)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "exoticmeleeweapon"
        }
    },
    improvedabilityheavyweapons: {
        name: "Improved Ability (Heavy Weapons)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "heavyweapons"
        }
    },
    improvedabilitylongarms: {
        name: "Improved Ability (Longarms)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "longarms"
        }
    },
    improvedabilitypistols: {
        name: "Improved Ability (Pistols)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pistols"
        }
    },
    improvedabilitythrowingweapons: {
        name: "Improved Ability (Throwing Weapons)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "throwingweapons"
        }
    },
    improvedabilityunarmedcombat: {
        name: "Improved Ability (Unarmed Combat)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "unarmedcombat"
        }
    },
    improvedabilitydisguise: {
        name: "Improved Ability (Disguise)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "disguise"
        }
    },
    improvedabilitydiving: {
        name: "Improved Ability (Diving)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "diving"
        }
    },
    improvedabilityescapeartist: {
        name: "Improved Ability (Escape Artist)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "escapeartist"
        }
    },
    improvedabilityfreefall: {
        name: "Improved Ability (Free Fall)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "freefall"
        }
    },
    improvedabilitygymnastics: {
        name: "Improved Ability (Gymnastics)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "gymnastics"
        }
    },
    improvedabilitypalming: {
        name: "Improved Ability (Palming)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "palming"
        }
    },
    improvedabilityperception: {
        name: "Improved Ability (Perception)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "perception"
        }
    },
    improvedabilityrunning: {
        name: "Improved Ability (Running)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "running"
        }
    },
    improvedabilitysneaking: {
        name: "Improved Ability (Sneaking)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "sneaking"
        }
    },
    improvedabilitysurvival: {
        name: "Improved Ability (Survival)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "survival"
        }
    },
    improvedabilityswimming: {
        name: "Improved Ability (Swimming)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "swimming"
        }
    },
    improvedabilitytracking: {
        name: "Improved Ability (Tracking)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "tracking"
        }
    },
    improvedabilitycon: {
        name: "Improved Ability (Con)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "con"
        }
    },
    improvedabilityetiquette: {
        name: "Improved Ability (Etiquette)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "etiquette"
        }
    },
    improvedabilityimpersonation: {
        name: "Improved Ability (Impersonation)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "impersonation"
        }
    },
    improvedabilityinstruction: {
        name: "Improved Ability (Instruction)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "instruction"
        }
    },
    improvedabilityintimidation: {
        name: "Improved Ability (Intimidation)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "intimidation"
        }
    },
    improvedabilityleadership: {
        name: "Improved Ability (Leadership)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "leadership"
        }
    },
    improvedabilitynegotiation: {
        name: "Improved Ability (Negotiation)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "negotiation"
        }
    },
    improvedabilityperformance: {
        name: "Improved Ability (Performance)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "performance"
        }
    },
    improvedabilityaeronauticsmechanic: {
        name: "Improved Ability (Aeronautics Mechanic)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "aeronauticsmechanic"
        }
    },
    improvedabilityanimalhandling: {
        name: "Improved Ability (Animal Handling)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "animalhandling"
        }
    },
    improvedabilityarmorer: {
        name: "Improved Ability (Armorer)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "armorer"
        }
    },
    improvedabilityartisan: {
        name: "Improved Ability (Artisan)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "artisan"
        }
    },
    improvedabilityautomotivemechanic: {
        name: "Improved Ability (Automotive Mechanic)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "automotivemechanic"
        }
    },
    improvedabilitybiotechnology: {
        name: "Improved Ability (Biotechnology)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "biotechnology"
        }
    },
    improvedabilitychemistry: {
        name: "Improved Ability (Chemistry)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "chemistry"
        }
    },
    improvedabilitycomputer: {
        name: "Improved Ability (Computer)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "computer"
        }
    },
    improvedabilitycybercombat: {
        name: "Improved Ability (Cybercombat)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "cybercombat"
        }
    },
    improvedabilitycybertechnology: {
        name: "Improved Ability (Cybertechnology)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "cybertechnology"
        }
    },
    improvedabilitydemolitions: {
        name: "Improved Ability (Demolitions)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "demolitions"
        }
    },
    improvedabilityelectronicwarfare: {
        name: "Improved Ability (Electronic Warfare)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "electronicwarfare"
        }
    },
    improvedabilityfirstaid: {
        name: "Improved Ability (First Aid)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "firstaid"
        }
    },
    improvedabilityforgery: {
        name: "Improved Ability (Forgery)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "forgery"
        }
    },
    improvedabilityhacking: {
        name: "Improved Ability (Hacking)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "hacking"
        }
    },
    improvedabilityhardware: {
        name: "Improved Ability (Hardware)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "hardware"
        }
    },
    improvedabilityindustrialmechanic: {
        name: "Improved Ability (Industrial Mechanic)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "industrialmechanic"
        }
    },
    improvedabilitylocksmith: {
        name: "Improved Ability (Locksmith)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "locksmith"
        }
    },
    improvedabilitymedicine: {
        name: "Improved Ability (Medicine)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "medicine"
        }
    },
    improvedabilitynauticalmechanic: {
        name: "Improved Ability (Nautical Mechanic)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "nauticalmechanic"
        }
    },
    improvedabilitynavigation: {
        name: "Improved Ability (Navigation)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "navigation"
        }
    },
    improvedabilitysoftware: {
        name: "Improved Ability (Software)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "software"
        }
    },
    improvedabilitygunnery: {
        name: "Improved Ability (Gunnery)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "gunnery"
        }
    },
    improvedabilitypilotaerospace: {
        name: "Improved Ability (Pilot Aerospace)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pilotaerospace"
        }
    },
    improvedabilitypilotaircraft: {
        name: "Improved Ability (Pilot Aircraft)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pilotaircraft"
        }
    },
    improvedabilitypilotwalker: {
        name: "Improved Ability (Pilot Walker)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pilotwalker"
        }
    },
    improvedabilitypilotexotic: {
        name: "Improved Ability (Pilot Exotic)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pilotexotic"
        }
    },
    improvedabilitypilotgroundcraft: {
        name: "Improved Ability (Pilot Ground Craft)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pilotgroundcraft"
        }
    },
    improvedabilitypilotwatercraft: {
        name: "Improved Ability (Pilot Watercraft)",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false,
        skillmod: {
            1: "pilotwatercraft"
        }
    },
    improvedphysicalattributebody: {
        name: "Improved Physical Attribute (Body)",
        active: false,
        level: 0,
        cost: 1,
        activation: "n/a",
        drain: false,
        attmod: {
            1: "body"
        }
    },
    improvedphysicalattributeagility: {
        name: "Improved Physical Attribute (Agility)",
        active: false,
        level: 0,
        cost: 1,
        activation: "n/a",
        drain: false,
        attmod: {
            1: "agility"
        }
    },
    improvedphysicalattributereaction: {
        name: "Improved Physical Attribute (Reaction)",
        active: false,
        level: 0,
        cost: 1,
        activation: "n/a",
        drain: false,
        attmod: {
            1: "reaction"
        }
    },
    improvedphysicalattributestrength: {
        name: "Improved Physical Attribute (Strength)",
        active: false,
        level: 0,
        cost: 1,
        activation: "n/a",
        drain: false,
        attmod: {
            1: "strength"
        }
    },
    improvedpotentialphysical: {
        name: "Improved Potential (Physical)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false,
        limitmod: {
            1: "physical"
        }
    },
    improvedpotentialmental: {
        name: "Improved Potential (Mental)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false,
        limitmod: {
            1: "mental"
        }
    },
    improvedpotentialsocial: {
        name: "Improved Potential (Social)",
        active: false,
        level: "n/a",
        cost: 0.5,
        activation: "n/a",
        drain: false,
        limitmod: {
            1: "social"
        }
    },
    improvedreflexes: {
        name: "Improved Reflexes",
        active: false,
        level: 0,
        cost: 1.5,
        activation: "n/a",
        drain: false
    },
    improvedsense: {
        name: "Improved Sense",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    killinghands: {
        name: "Killing Hands",
        active: true,
        level: 0,
        cost: 0.5,
        activation: "free",
        drain: false
    },
    kinesics: {
        name: "Kinesics",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    lightbody: {
        name: "Light Body",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    missileparry: {
        name: "Missile Parry",
        active: true,
        level: 0,
        cost: 0.25,
        activation: "interrupt",
        drain: false
    },
    mysticarmor: {
        name: "Mystic Armor",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    naturalimmunity: {
        name: "Natural Immunity",
        active: false,
        level: 0,
        cost: 0.25,
        activation: "n/a",
        drain: false
    },
    painresistance: {
        name: "Pain Resistance",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    rapidhealing: {
        name: "Rapid Healing",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    spellresistance: {
        name: "Spell Resistance",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    tracelesswalk: {
        name: "Traceless Walk",
        active: false,
        level: 0,
        cost: 1,
        activation: "n/a",
        drain: false
    },
    voicecontrol: {
        name: "Voice Control",
        active: false,
        level: 0,
        cost: 0.5,
        activation: "n/a",
        drain: false
    },
    wallrunning: {
        name: "Wall Running",
        active: true,
        level: 0,
        cost: 0.5,
        activation: "simple",
        drain: false
    }
};