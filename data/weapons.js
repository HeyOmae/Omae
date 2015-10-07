var weaponmods = {
    airburstlink: {
        name: "Airburst Link",
        weaptype: ["grenadelauncher", "rocketlauncher"],
    },
}

var weapons = {
    //blades
    combataxe: {
        name: "Combat axe",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 4,
        accmod: 0,
        reach: 2,
        damage: 5,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -4,
        avail: 12,
        restrict: "Restricted",
        cost: 4000,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    combatknife: {
        name: "Combat knife",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 6,
        accmod: 0,
        reach: 0,
        damage: 2,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -3,
        avail: 4,
        restrict: " ",
        cost: 300,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    forearmsnapblades: {
        name: "Forearm snap-blades",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 4,
        accmod: 0,
        reach: 0,
        damage: 2,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -2,
        avail: 7,
        restrict: "Restricted",
        cost: 200,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    katana: {
        name: "Katana",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 7,
        accmod: 0,
        reach: 1,
        damage: 3,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -3,
        avail: 9,
        restrict: "Restricted",
        cost: 1000,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    knife: {
        name: "Knife",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 5,
        accmod: 0,
        reach: 0,
        damage: 1,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -1,
        avail: 0,
        restrict: " ",
        cost: 10,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    polearm: {
        name: "Pole arm",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 5,
        accmod: 0,
        reach: 3,
        damage: 3,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -2,
        avail: 6,
        restrict: "Restricted",
        cost: 1000,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    survivalknife: {
        name: "Survival knife",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 5,
        accmod: 0,
        reach: 0,
        damage: 2,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -1,
        avail: 0,
        restrict: " ",
        cost: 100,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    sword: {
        name: "Sword",
        active: false,
        category: "blades",
        skill: "blades",
        accuracy: 6,
        accmod: 0,
        reach: 1,
        damage: 3,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -2,
        avail: 5,
        restrict: "Restricted",
        cost: 500,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    //clubs
    club: {
        name: "Club",
        active: false,
        category: "clubs",
        skill: "clubs",
        accuracy: 4,
        accmod: 0,
        reach: 1,
        damage: 3,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: 0,
        avail: 0,
        restrict: " ",
        cost: 30,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    extendablebaton: {
        name: "Extendable Baton",
        active: false,
        category: "clubs",
        skill: "clubs",
        accuracy: 5,
        accmod: 0,
        reach: 1,
        damage: 2,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: 0,
        avail: 4,
        restrict: " ",
        cost: 100,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    sap: {
        name: "Sap",
        active: false,
        category: "clubs",
        skill: "clubs",
        accuracy: 5,
        accmod: 0,
        reach: 0,
        damage: 2,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: 0,
        avail: 2,
        restrict: " ",
        cost: 30,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    staff: {
        name: "Staff",
        active: false,
        category: "clubs",
        skill: "clubs",
        accuracy: 6,
        accmod: 0,
        reach: 2,
        damage: 3,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: 0,
        avail: 3,
        restrict: " ",
        cost: 100,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    stunbaton: {
        name: "Stun Baton",
        active: false,
        category: "clubs",
        skill: "clubs",
        accuracy: 4,
        accmod: 0,
        reach: 1,
        damage: 9,
        stat: 0,
        dvmod: 0,
        damtype: "Stun",
        element: "Electricity",
        ap: -5,
        avail: 6,
        restrict: "Restricted",
        cost: 750,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    telescopingstaff: {
        name: "Telescoping Staff",
        active: false,
        category: "clubs",
        skill: "clubs",
        accuracy: 4,
        accmod: 0,
        reach: 2,
        damage: 2,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: 0,
        avail: 4,
        restrict: " ",
        cost: 350,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    //unarmed
    knucks: {
        name: "Knucks",
        active: false,
        category: "unarmedcombat",
        skill: "unarmedcombat",
        accuracy: attributes.limits.phyLimit,
        accmod: 0,
        reach: 0,
        damage: 1,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: 0,
        avail: 2,
        restrict: "Restricted",
        cost: 100,
        ref: {
            book: "SR5",
            page: "422,423"
        }
    },
    shockgloves: {
        name: "Shock Gloves",
        active: false,
        category: "unarmedcombat",
        skill: "unarmedcombat",
        accuracy: attributes.limits.phyLimit,
        accmod: 0,
        reach: 0,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Stun",
        element: "Electricity",
        ap: -5,
        avail: 6,
        restrict: "Restricted",
        cost: 550,
        ref: {
            book: "SR5",
            page: "423"
        }
    },
    //exotic melee weapon
    monofilamentwhip: {
        name: "Monofilament Whip",
        active: false,
        category: "exoticmeleeweapon",
        skill: "monofilamentwhip",
        skillName: "Monofilament Whip",
        accuracy: 5,
        accmod: 2,
        reach: 2,
        damage: 12,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -8,
        avail: 12,
        restrict: "Forbidden",
        cost: 10000,
        ref: {
            book: "SR5",
            page: "423"
        }
    },
    monofilamentchainsaw: {
        name: "Monofilament Chainsaw",
        active: false,
        category: "exoticmeleeweapon",
        skill: "chainsaw",
        skillName: "Chainsaw",
        accuracy: 3,
        accmod: 0,
        reach: 1,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -6,
        avail: 8,
        restrict: "",
        cost: 500,
        ref: {
            book: "SR5",
            page: "448"
        }
    },
    //bow
    bow: {
        name: "Bow",
        active: false,
        rating: 1,
        category: "bow",
        skill: "archery",
        accuracy: 6,
        accmod: 0,
        damage: attributes.current.str + 2,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -1,
        avail: 1,
        restrict: " ",
        cost: 100,
        ref: {
            book: "SR5",
            page: "423,424"
        }
    },
    //crossbow
    lightcrossbow: {
        name: "Light",
        active: false,
        category: "crossbow",
        skill: "archery",
        accuracy: 7,
        accmod: 0,
        damage: 5,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -1,
        avail: 2,
        restrict: " ",
        cost: 300,
        ref: {
            book: "SR5",
            page: "424"
        }
    },
    mediumcrossbow: {
        name: "Medium",
        active: false,
        category: "crossbow",
        skill: "archery",
        accuracy: 6,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -2,
        avail: 4,
        restrict: "Restricted",
        cost: 500,
        ref: {
            book: "SR5",
            page: "424"
        }
    },
    heavycrossbow: {
        name: "Heavy",
        active: false,
        category: "crossbow",
        skill: "archery",
        accuracy: 5,
        accmod: 0,
        damage: 10,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -3,
        avail: 8,
        restrict: "Restricted",
        cost: 1000,
        ref: {
            book: "SR5",
            page: "424"
        }
    },
    //throwing weapons
    shuriken: {
        name: "shuriken",
        active: false,
        category: "throwingweapons",
        skill: "throwingweapons",
        rating: 0,
        accuracy: attributes.limits.phyLimit,
        accmod: 0,
        damage: 1,
        stat: attributes.current.str,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        ap: -1,
        avail: 4,
        restrict: "Restricted",
        cost: 25,
        ref: {
            book: "SR5",
            page: "424"
        }
    },

    //firearms
    //tasers
    defianceexshocker: {
        name: "Defiance EX Shocker",
        active: false,
        category: "tasers",
        skill: "pistols",
        accuracy: 4,
        accmod: 0,
        damage: 9,
        stat: 0,
        dvmod: 0,
        damtype: "Stun",
        element: "Electricity",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 4,
        clip: "Internal Mag",
        ap: -5,
        avail: 0,
        restrict: " ",
        cost: 250,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    yamahapulsar: {
        name: "Yamaha Pulsar",
        active: false,
        category: "tasers",
        skill: "pistols",
        accuracy: 5,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Stun",
        element: "Electricity",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 4,
        clip: "Internal Mag",
        ap: -5,
        avail: 0,
        restrict: " ",
        cost: 180,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },

    //holdouts
    fichettitigganineedler: {
        name: "Fichetti Tiggani Needler",
        active: false,
        category: "holdouts",
        skill: "pistols",
        accuracy: 5,
        accmod: 0,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: "Flechette",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 4,
        clip: "Clip",
        ap: 5,
        avail: 5,
        restrict: "Restricted",
        cost: 1000,
        mods: {
            top: "n/a",
            barrel: "n/a",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    streetlinespecial: {
        name: "Streetline Special",
        active: false,
        category: "holdouts",
        skill: "pistols",
        accuracy: 4,
        accmod: 0,
        damage: 6,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 6,
        clip: "Clip",
        ap: 0,
        avail: 4,
        restrict: "Restricted",
        cost: 120,
        mods: {
            top: "n/a",
            barrel: "n/a",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    waltherpalmpistol: {
        name: "Walther Palm Pistol",
        active: false,
        category: "holdouts",
        skill: "pistols",
        accuracy: 4,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 0,
        ammo: 2,
        clip: "Break Action",
        ap: 0,
        avail: 4,
        restrict: "Restricted",
        cost: 180,
        mods: {
            top: "n/a",
            barrel: "n/a",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },

    //lightpistols
    areslightfire75: {
        name: "Ares Light Fire 75",
        active: false,
        category: "lightpistols",
        skill: "pistols",
        accuracy: 6,
        accmod: 2,
        damage: 6,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 16,
        clip: "Clip",
        ap: 0,
        avail: 6,
        restrict: "Forbidden",
        cost: 1250,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "Smartgun",
            integral: "Silencer"
        }
    },
    areslightfire70: {
        name: "Ares Light Fire 70",
        active: false,
        category: "lightpistols",
        skill: "pistols",
        accuracy: 7,
        accmod: 0,
        damage: 6,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 16,
        clip: "Clip",
        ap: 0,
        avail: 3,
        restrict: "Restricted",
        cost: 200,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    beretta201t: {
        name: "Beretta 201T",
        active: false,
        category: "lightpistols",
        skill: "pistols",
        accuracy: 6,
        accmod: 0,
        damage: 6,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 1,
        ammo: 21,
        clip: "Clip",
        ap: 0,
        avail: 7,
        restrict: "Restricted",
        cost: 210,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    coltamerical36: {
        name: "Colt America L36",
        active: false,
        category: "lightpistols",
        skill: "pistols",
        accuracy: 7,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 11,
        clip: "Clip",
        ap: 0,
        avail: 4,
        restrict: "Restricted",
        cost: 320,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    fichettisecurity600: {
        name: "Fichetti Security 600",
        active: false,
        category: "lightpistols",
        skill: "pistols",
        accuracy: 6,
        accmod: 1,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 1,
        ammo: 30,
        clip: "Clip",
        ap: 0,
        avail: 6,
        restrict: "Restricted",
        cost: 350,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Laser Sight"
        }
    },
    taurusomni6: {
        name: "Taurus Omni-6",
        active: false,
        category: "lightpistols",
        skill: "pistols",
        accuracy: 5,
        accmod: 1,
        damage: 6,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 6,
        altammo: {
            damage: 7,
            mode: {
                SS: "Single Shot"
            },
            ap: -1
        },
        clip: "Detachable Cylinder",
        ap: 0,
        avail: 3,
        restrict: "Restricted",
        cost: 300,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Laser Sight"
        }
    },

    //heavypistols
    arespredatorv: {
        name: "Ares Predator V",
        active: false,
        category: "heavypistols",
        skill: "pistols",
        accuracy: 5,
        accmod: 2,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 15,
        clip: "Clip",
        ap: -1,
        avail: 5,
        restrict: "Restricted",
        cost: 725,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "Smartgun",
            integral: "n/a"
        }
    },
    aresviperslivergun: {
        name: "Ares Viper Slivergun",
        active: false,
        category: "heavypistols",
        skill: "pistols",
        accuracy: 4,
        accmod: 0,
        damage: 9,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: "Flechette",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 0,
        ammo: 15,
        clip: "Clip",
        ap: +4,
        avail: 8,
        restrict: "Forbidden",
        cost: 380,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Silencer"
        }
    },
    browningultrapower: {
        name: "Browning Ultra-Power",
        active: false,
        category: "heavypistols",
        skill: "pistols",
        accuracy: 5,
        accmod: 1,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 10,
        clip: "Clip",
        ap: -1,
        avail: 4,
        restrict: "Restricted",
        cost: 640,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Laser Sight"
        }
    },
    coltgovernment2066: {
        name: "Colt Government 2066",
        active: false,
        category: "heavypistols",
        skill: "pistols",
        accuracy: 6,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 14,
        clip: "Clip",
        ap: -1,
        avail: 7,
        restrict: "Restricted",
        cost: 425,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    remingtonroomsweeper: {
        name: "Remington Roomsweeper",
        active: false,
        category: "heavypistols",
        skill: "pistols",
        accuracy: 4,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 2,
        damtype: "Physical",
        element: "",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 8,
        altammo: {
            damage: 9,
            element: "Flechette",
            ap: 4
        },
        clip: "Internal Mag",
        ap: -1,
        avail: 6,
        restrict: "Restricted",
        cost: 250,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    rugersuperwarhawk: {
        name: "Ruger Super Warhawk",
        active: false,
        category: "heavypistols",
        skill: "pistols",
        accuracy: 5,
        accmod: 0,
        damage: 9,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 6,
        clip: "Cylinder",
        ap: -2,
        avail: 4,
        restrict: "Restricted",
        cost: 400,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },

    //machinepistols
    arescrusaderii: {
        name: "Ares Crusader II",
        active: false,
        category: "machinepistols",
        skill: "automatics",
        accuracy: 5,
        accmod: 2,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 2,
        rcmod: 0,
        ammo: 40,
        clip: "Clip",
        ap: 0,
        avail: 9,
        restrict: "Restricted",
        cost: 830,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "Smartgun",
            integral: "Gas Vent 2"
        }
    },
    ceskablackscorpion: {
        name: "Ceska Black Scorpion",
        active: false,
        category: "machinepistols",
        skill: "automatics",
        accuracy: 5,
        accmod: 0,
        damage: 6,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 1,
        ammo: 35,
        clip: "Clip",
        ap: 0,
        avail: 6,
        restrict: "Restricted",
        cost: 270,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    steyrmp: {
        name: "Steyr MP",
        active: false,
        category: "machinepistols",
        skill: "automatics",
        accuracy: 4,
        accmod: 1,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 0,
        rcmod: 0,
        ammo: 30,
        clip: "Clip",
        ap: 0,
        avail: 8,
        restrict: "Restricted",
        cost: 350,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Laser Sight"
        }
    },

    //submachineguns
    coltcobratz120: {
        name: "Colt Cobra TZ-120",
        active: false,
        category: "submachineguns",
        skill: "automatics",
        accuracy: 4,
        accmod: 1,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 2,
        rcmod: 1,
        ammo: 32,
        clip: "Clip",
        ap: 0,
        avail: 5,
        restrict: "Restricted",
        cost: 660,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Laser Sight, Gas Vent 2"
        }
    },
    fnp93praetor: {
        name: "FN P93 Praetor",
        active: false,
        category: "submachineguns",
        skill: "automatics",
        accuracy: 6,
        accmod: 0,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 1,
        rcmod: 1,
        ammo: 50,
        clip: "Clip",
        ap: 0,
        avail: 11,
        restrict: "Forbidden",
        cost: 900,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Flash Light,"
        }
    },
    hk227: {
        name: "HK-227",
        active: false,
        category: "submachineguns",
        skill: "automatics",
        accuracy: 5,
        accmod: 2,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 0,
        rcmod: 1,
        ammo: 28,
        clip: "Clip",
        ap: 0,
        avail: 8,
        restrict: "Restricted",
        cost: 730,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "Smartgun",
            integral: "Silencer"
        }
    },
    ingramsmartgunx: {
        name: "Ingram Smartgun-X",
        active: false,
        category: "submachineguns",
        skill: "automatics",
        accuracy: 4,
        accmod: 2,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 2,
        rcmod: 0,
        ammo: 32,
        clip: "Clip",
        ap: 0,
        avail: 6,
        restrict: "Restricted",
        cost: 800,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "Smartgun",
            integral: "Gas Vent 2, Silencer"
        }
    },
    sckmodel100: {
        name: "SCK Model 100",
        active: false,
        category: "submachineguns",
        skill: "automatics",
        accuracy: 5,
        accmod: 2,
        damage: 8,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 1,
        ammo: 30,
        clip: "Clip",
        ap: 0,
        avail: 6,
        restrict: "Restricted",
        cost: 875,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "Smartgun",
            integral: "n/a"
        }
    },
    uziiv: {
        name: "Uzi Iv",
        active: false,
        category: "submachineguns",
        skill: "automatics",
        accuracy: 4,
        accmod: 1,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 1,
        ammo: 24,
        clip: "Clip",
        ap: 0,
        avail: 4,
        restrict: "Restricted",
        cost: 450,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "Laser Sight"
        }
    },

    //assaultrifles
    ak97: {
        name: "AK-97",
        active: false,
        category: "assaultrifles",
        skill: "automatics",
        accuracy: 5,
        accmod: 0,
        damage: 10,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 0,
        rcmod: 0,
        ammo: 38,
        clip: "Clip",
        ap: -2,
        avail: 4,
        restrict: "Restricted",
        cost: 950,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    aresalpha: {
        name: "Ares Alpha",
        active: false,
        category: "assaultrifles",
        skill: "automatics",
        accuracy: 5,
        accmod: 2,
        damage: 11,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 2,
        rcmod: 0,
        ammo: 42,
        clip: "Clip",
        ap: -2,
        avail: 11,
        restrict: "Forbidden",
        cost: 2650,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "Smartgun",
            integral: "Grenade Launcher"
        }
    },
    coltm23: {
        name: "Colt M23",
        active: false,
        category: "assaultrifles",
        skill: "automatics",
        accuracy: 4,
        accmod: 0,
        damage: 9,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 0,
        rcmod: 0,
        ammo: 40,
        clip: "Clip",
        ap: -2,
        avail: 4,
        restrict: "Restricted",
        cost: 550,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    fnhar: {
        name: "FN HAR",
        active: false,
        category: "assaultrifles",
        skill: "automatics",
        accuracy: 5,
        accmod: 1,
        damage: 10,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 2,
        rcmod: 0,
        ammo: 35,
        clip: "Clip",
        ap: -2,
        avail: 8,
        restrict: "Restricted",
        cost: 1500,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Laser Sight, Gas Vent 2"
        }
    },
    yamaharaiden: {
        name: "Yamaha Raiden",
        active: false,
        category: "assaultrifles",
        skill: "automatics",
        accuracy: 6,
        accmod: 2,
        damage: 11,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 1,
        rcmod: 0,
        ammo: 60,
        clip: "Clip",
        ap: -2,
        avail: 14,
        restrict: "Forbidden",
        cost: 2600,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "Smartgun",
            integral: "Silencer"
        }
    },

    //sniperrifles
    aresdesertstrike: {
        name: "Ares Desert Strike",
        active: false,
        category: "sniperrifles",
        skill: "longarms",
        accuracy: 7,
        accmod: 0,
        damage: 13,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 1,
        ammo: 14,
        clip: "Clip",
        ap: -4,
        avail: 10,
        restrict: "Forbidden",
        cost: 17500,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Imaging Scope"
        }
    },
    cavalierarmscrockettebr: {
        name: "Cavalier Arms Crockett EBR",
        active: false,
        category: "sniperrifles",
        skill: "longarms",
        accuracy: 6,
        accmod: 0,
        damage: 12,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 1,
        ammo: 20,
        clip: "Clip",
        ap: -3,
        avail: 12,
        restrict: "Forbidden",
        cost: 10300,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Imaging Scope"
        }
    },
    rangerarmssm5: {
        name: "Ranger Arms SM-5",
        active: false,
        category: "sniperrifles",
        skill: "longarms",
        accuracy: 8,
        accmod: 0,
        damage: 14,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 1,
        ammo: 15,
        clip: "Clip",
        ap: -5,
        avail: 16,
        restrict: "Forbidden",
        cost: 28000,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Imaging Scope, Silencer"
        }
    },
    remington950: {
        name: "Remington 950",
        active: false,
        category: "sniperrifles",
        skill: "longarms",
        accuracy: 7,
        accmod: 0,
        damage: 12,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 5,
        clip: "Internal Mag",
        ap: -4,
        avail: 4,
        restrict: "Restricted",
        cost: 2100,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    ruger100: {
        name: "Ruger 100",
        active: false,
        category: "sniperrifles",
        skill: "longarms",
        accuracy: 6,
        accmod: 0,
        damage: 11,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 1,
        ammo: 8,
        clip: "Internal Mag",
        ap: -3,
        avail: 4,
        restrict: "Restricted",
        cost: 1300,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Imaging Scope"
        }
    },

    //shotguns
    defiancet250: {
        name: "Defiance T-250",
        active: false,
        category: "shotguns",
        skill: "longarms",
        accuracy: 4,
        accmod: 0,
        damage: 10,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SS: "Single Shot",
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 5,
        clip: "Internal Mag",
        ap: -1,
        avail: 4,
        restrict: "Restricted",
        cost: 450,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    enfieldas7: {
        name: "Enfield AS-7",
        active: false,
        category: "shotguns",
        skill: "longarms",
        accuracy: 4,
        accmod: 1,
        damage: 13,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic",
            BF: "Burst Fire"
        },
        rc: 0,
        rcmod: 0,
        ammo: 10,
        altammo: {
            ammo: 24,
            clip: "Drum"
        },
        clip: "Clip",
        ap: -1,
        avail: 12,
        restrict: "Forbidden",
        cost: 1100,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Laser Sight"
        }
    },
    pjssmodel55: {
        name: "PJSS Model 55",
        active: false,
        category: "shotguns",
        skill: "longarms",
        accuracy: 6,
        accmod: 0,
        damage: 11,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 1,
        ammo: 2,
        clip: "Break Action",
        ap: -1,
        avail: 9,
        restrict: "Restricted",
        cost: 1000,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },

    //exoticrangedweapon
    aressiiisupersquirt: {
        name: "Ares S-III Super Squirt",
        active: false,
        category: "exoticrangedweapon",
        skill: "supersquirt",
        skillName: "Super Squirt",
        accuracy: 3,
        accmod: 0,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Chemical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 20,
        clip: "Clip",
        ap: 0,
        avail: 7,
        restrict: "Restricted",
        cost: 950,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    fichettipaininducer: {
        name: "Fichetti Pain Inducer",
        active: false,
        category: "exoticrangedweapon",
        skill: "paininducer",
        skillName: "Pain Inducer",
        accuracy: 3,
        accmod: 0,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Special",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 10,
        clip: "Special",
        ap: 0,
        avail: 11,
        restrict: "Restricted",
        cost: 5000,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    parashielddartpistol: {
        name: "Parashield Dart Pistol",
        active: false,
        category: "exoticrangedweapon",
        skill: "dartpistol",
        skillName: "Dart Pistol",
        accuracy: 5,
        accmod: 0,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Chemical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 5,
        clip: "Clip",
        ap: 0,
        avail: 4,
        restrict: "Restricted",
        cost: 600,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "n/a",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    parashielddartrifle: {
        name: "Parashield Dart Rifle",
        active: false,
        category: "exoticrangedweapon",
        skill: "dartrifle",
        skillName: "Dart Rifle",
        accuracy: 6,
        accmod: 0,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Chemical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 6,
        clip: "Internal Mag",
        ap: 0,
        avail: 6,
        restrict: "Restricted",
        cost: 1200,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "empty",
            integral: "Imaging Scope"
        }
    },
    grapplegun: {
        name: "Grapple Gun",
        active: false,
        category: "exoticrangedweapon",
        skill: "grapplegun",
        skillName: "Grapple Gun",
        accuracy: 3,
        accmod: 0,
        damage: 7,
        stat: 0,
        dvmod: 0,
        damtype: "Stun",
        element: "",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 1,
        clip: "Muzzle-Loader",
        ap: -2,
        avail: 8,
        restrict: "Restricted",
        cost: 500,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "empty"
        }
    },
    microflarelauncher: {
        name: "Micro Flare Launcher",
        active: false,
        category: "exoticrangedweapon",
        skill: "microflarelauncher",
        skillName: "Micro Flare Launcher",
        accuracy: 3,
        accmod: 0,
        damage: 5,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: "Fire",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 1,
        clip: "Muzzle-Loader",
        ap: -5,
        avail: 0,
        restrict: "",
        cost: 175,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "empty"
        }
    },

    //machineguns
    ingramvaliant: {
        name: "Ingram Valiant",
        active: false,
        category: "machineguns",
        skill: "heavyweapons",
        accuracy: 5,
        accmod: 1,
        damage: 9,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            BF: "Burst Fire",
            FA: "Full Auto"
        },
        rc: 2,
        rcmod: 1,
        ammo: 50,
        altammo: {
            ammo: 100,
            clip: "Belt"
        },
        clip: "Clip",
        ap: -2,
        avail: 12,
        restrict: "Forbidden",
        cost: 5800,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Laser Sight, Gas Vent 2"
        }
    },
    stoneraresm202: {
        name: "Stoner-Ares M202",
        active: false,
        category: "machineguns",
        skill: "heavyweapons",
        accuracy: 5,
        accmod: 0,
        damage: 10,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            FA: "Full Auto"
        },
        rc: 0,
        rcmod: 0,
        ammo: 50,
        altammo: {
            ammo: 100,
            clip: "Belt"
        },
        clip: "Clip",
        ap: -3,
        avail: 12,
        restrict: "Forbidden",
        cost: 7000,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    rpkhmg: {
        name: "RPK HMG",
        active: false,
        category: "machineguns",
        skill: "heavyweapons",
        accuracy: 5,
        accmod: 0,
        damage: 12,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            FA: "Full Auto"
        },
        rc: 0,
        rcmod: 6,
        ammo: 50,
        altammo: {
            ammo: 100,
            clip: "Belt"
        },
        clip: "Clip",
        ap: -4,
        avail: 16,
        restrict: "Forbidden",
        cost: 16300,
        mods: {
            top: "empty",
            barrel: "empty",
            under: "empty",
            internalsmart: "empty",
            integral: "Tripod"
        }
    },

    //cannonslaunchers
    aresantioch2: {
        name: "Ares Antioch-2",
        active: false,
        category: "cannonslaunchers",
        skill: "heavyweapons",
        accuracy: 4,
        accmod: 2,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Grenade",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 8,
        clip: "Internal Mag",
        ap: 0,
        avail: 8,
        restrict: "Forbidden",
        cost: 3200,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "Smartgun",
            integral: "n/a"
        }
    },
    armtechmgl12: {
        name: "ArmTech MGL-12",
        active: false,
        category: "cannonslaunchers",
        skill: "heavyweapons",
        accuracy: 4,
        accmod: 0,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Grenade",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 0,
        ammo: 12,
        clip: "Clip",
        ap: 0,
        avail: 10,
        restrict: "Forbidden",
        cost: 5000,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    aztechnologystriker: {
        name: "Aztechnology Striker",
        active: false,
        category: "cannonslaunchers",
        skill: "heavyweapons",
        accuracy: 5,
        accmod: 0,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Missile",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 1,
        clip: "Muzzle Loader",
        ap: 0,
        avail: 10,
        restrict: "Forbidden",
        cost: 1200,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    krimecannon: {
        name: "Krime Cannon",
        active: false,
        category: "cannonslaunchers",
        skill: "heavyweapons",
        accuracy: 4,
        accmod: 0,
        damage: 16,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SA: "Semi-Automatic"
        },
        rc: 0,
        rcmod: 1,
        ammo: 6,
        clip: "Internal Mag",
        ap: -6,
        avail: 20,
        restrict: "Forbidden",
        cost: 21000,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "empty",
            integral: "n/a"
        }
    },
    onotariinterceptor: {
        name: "Onotari Interceptor",
        active: false,
        category: "cannonslaunchers",
        skill: "heavyweapons",
        accuracy: 4,
        accmod: 2,
        damage: 0,
        stat: 0,
        dvmod: 0,
        damtype: "Missile",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 2,
        clip: "Muzzle Loader",
        ap: 0,
        avail: 18,
        restrict: "Forbidden",
        cost: 14000,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "Smartgun",
            integral: "n/a"
        }
    },
    pantherxxl: {
        name: "Panther XXL",
        active: false,
        category: "cannonslaunchers",
        skill: "heavyweapons",
        accuracy: 5,
        accmod: 2,
        damage: 17,
        stat: 0,
        dvmod: 0,
        damtype: "Physical",
        element: " ",
        mode: {
            SS: "Single Shot"
        },
        rc: 0,
        rcmod: 0,
        ammo: 15,
        clip: "Clip",
        ap: -6,
        avail: 20,
        restrict: "Forbidden",
        cost: 43000,
        mods: {
            top: "empty",
            barrel: "n/a",
            under: "empty",
            internalsmart: "Smartgun",
            integral: "n/a"
        }
    }
};