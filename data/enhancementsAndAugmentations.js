var visionenhancements = {
    empty: {
        name: "Empty",
        avail: 0,
        cost: 0
    },
    lowlightvision: {
        name: "Low-light vision",
        cap: 1,
        avail: 4,
        restricted: "",
        cost: 500
    },
    flarecompensation: {
        name: "Flare Compensation",
        cap: 1,
        avail: 1,
        restricted: "",
        cost: 250
    },
    imagelink: {
        name: "Image Link",
        cap: 1,
        avail: 0,
        restricted: "",
        cost: 25
    },
    smartlink: {
        name: "Smartlink",
        cap: 1,
        avail: 4,
        restricted: "Restricted",
        cost: 2000
    },
    thermographicvision: {
        name: "Thermographic Vision",
        cap: 1,
        avail: 6,
        restricted: "",
        cost: 500
    },
    visionenhancement1: {
        name: "Vision Enhancement 1",
        rating: 1,
        cap: 1,
        avail: 2,
        restricted: "",
        cost: 500
    },
    visionenhancement2: {
        name: "Vision Enhancement 2",
        rating: 2,
        cap: 2,
        avail: 4,
        restricted: "",
        cost: 1000
    },
    visionenhancement3: {
        name: "Vision Enhancement 3",
        rating: 3,
        cap: 3,
        avail: 6,
        restricted: "",
        cost: 1500
    },
    visionmagnification: {
        name: "Vision Magnification",
        cap: 1,
        avail: 2,
        restricted: "",
        cost: 250
    },
};

var audioenhancements = {
    empty: {
        name: "Empty",
        avail: 0,
        cost: 0
    },
    audioenhancement1: {
        name: "Audio Enhancement 1",
        rating: 1,
        cap: 1,
        avail: 2,
        restricted: "",
        cost: 500
    },
    audioenhancement2: {
        name: "Audio Enhancement 2",
        rating: 2,
        cap: 2,
        avail: 4,
        restricted: "",
        cost: 1000
    },
    audioenhancement3: {
        name: "Audio Enhancement 3",
        rating: 3,
        cap: 3,
        avail: 6,
        restricted: "",
        cost: 1500
    },
    selectsoundfilter1: {
        name: "Select Sound Filter 1",
        rating: 1,
        cap: 1,
        avail: 3,
        restricted: "",
        cost: 250
    },
    selectsoundfilter2: {
        name: "Select Sound Filter 2",
        rating: 2,
        cap: 2,
        avail: 6,
        restricted: "",
        cost: 500
    },
    selectsoundfilter3: {
        name: "Select Sound Filter 3",
        rating: 3,
        cap: 3,
        avail: 9,
        restricted: "",
        cost: 750
    },
    spatialrecognizer: {
        name: "Spatial Recognizer",
        rating: 1,
        cap: 2,
        avail: 4,
        restricted: "",
        cost: 1000
    },
};

var characteraugmentation = {
    limbs: {
        head: {},
        chest: {},
        leftarm: {},
        leftleg: {},
        rightarm: {},
        rightleg: {}
    }
}

var augmentations = {
    grade: {
        used: {
            cost: 0.75,
            ess: 1.25,
            avail: -4
        },
        standard: {
            cost: 1,
            ess: 1,
            avail: 0
        },
        alpha: {
            cost: 1.2,
            ess: 0.8,
            avail: 2
        },
        beta: {
            cost: 1.5,
            ess: 0.7,
            avail: 4
        },
        delta: {
            cost: 2.5,
            ess: 0.5,
            avail: 8
        }
    },
    obvious: {
        fullarm: {
            name: "Obvious Full Arm",
            grade: "standard",
            slot: "arm",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            armor: 0,
            rc: 0,
            essence: 1,
            cap: 0,
            capmax: 15,
            avail: 4,
            cost: 15000
        },
        fullleg: {
            name: "Obvious Full Leg",
            grade: "standard",
            slot: "leg",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 1,
            cap: 0,
            capmax: 20,
            avail: 4,
            cost: 15000
        },
        hand: {
            name: "Obvious Hand",
            grade: "standard",
            slot: "arm",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.25,
            cap: 0,
            capmax: 4,
            avail: 2,
            cost: 5000
        },
        foot: {
            name: "Obvious Foot",
            grade: "standard",
            slot: "leg",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.25,
            cap: 0,
            capmax: 4,
            avail: 2,
            cost: 5000
        },
        lowerarm: {
            name: "Obvious Lower Arm",
            grade: "standard",
            slot: "arm",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.45,
            cap: 0,
            capmax: 10,
            avail: 4,
            cost: 10000
        },
        lowerleg: {
            name: "Obvious Lower Leg",
            grade: "standard",
            slot: "leg",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.45,
            cap: 0,
            capmax: 12,
            avail: 4,
            cost: 10000
        },
        torso: {
            name: "Obvious Torso",
            grade: "standard",
            slot: "chest",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 1.5,
            cap: 0,
            capmax: 10,
            avail: 12,
            cost: 20000
        },
        skull: {
            name: "Obvious Skull",
            grade: "standard",
            slot: "head",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.75,
            cap: 0,
            capmax: 4,
            avail: 16,
            cost: 10000
        }
    },
    synthetic: {
        fullarm: {
            name: "Synthetic Full Arm",
            grade: "standard",
            slot: "arm",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 1,
            cap: 0,
            capmax: 8,
            avail: 4,
            cost: 20000
        },
        fullleg: {
            name: "Synthetic Full Leg",
            grade: "standard",
            slot: "leg",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 1,
            cap: 0,
            capmax: 10,
            avail: 4,
            cost: 20000
        },
        hand: {
            name: "Synthetic Hand",
            grade: "standard",
            slot: "arm",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.25,
            cap: 0,
            capmax: 2,
            avail: 2,
            cost: 6000
        },
        foot: {
            name: "Synthetic Lower Arm",
            grade: "standard",
            slot: "arm",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.45,
            cap: 0,
            capmax: 5,
            avail: 4,
            cost: 12000
        },
        lowerleg: {
            name: "Synthetic Lower Leg",
            grade: "standard",
            slot: "leg",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.45,
            cap: 0,
            capmax: 6,
            avail: 4,
            cost: 12000
        },
        torso: {
            name: "Synthetic Torso",
            grade: "standard",
            slot: "chest",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 1.5,
            cap: 0,
            capmax: 5,
            avail: 12,
            cost: 25000
        },
        skull: {
            name: "Synthetic Skull",
            grade: "standard",
            slot: "head",
            str: 3,
            augstr: 0,
            agi: 3,
            augagi: 0,
            armor: 0,
            rc: 0,
            essence: 0.75,
            cap: 0,
            capmax: 2,
            avail: 16,
            cost: 15000
        }
    },
    mods: {
        //limb enhancement
        enhancementagility: {
            name: "Enhancement Agility",
            type: "limb enhancement",
            stat: "agi",
            allow: ["arm", "leg", "chest", "head"],
            rating: 0,
            ratingmax: 3,
            capacity: 0,
            avail: 0,
            availx: 3,
            restrict: "R",
            cost: 0,
            costx: 6500,
            ref: {
                book: "SR5",
                page: "456,457"
            }
        },
        enhancementarmor: {
            name: "Enhancement Armor",
            type: "limb enhancement",
            stat: "armor",
            allow: ["arm", "leg", "chest", "head"],
            rating: 0,
            ratingmax: 3,
            capacity: 0,
            avail: 0,
            availx: 5,
            restrict: "",
            cost: 0,
            costx: 3000,
            ref: {
                book: "SR5",
                page: "456,457"
            }
        },
        enhancementstrength: {
            name: "Enhancement Strength",
            type: "limb enhancement",
            stat: "str",
            allow: ["arm", "leg", "chest", "head"],
            rating: 0,
            ratingmax: 3,
            capacity: 0,
            avail: 0,
            availx: 3,
            restrict: "R",
            cost: 0,
            costx: 6500,
            ref: {
                book: "SR5",
                page: "456,457"
            }
        },

        //limb accessories
        cyberarmgyromount: {
            name: "Cyberarm Gyromount",
            type: "accessory",
            stat: "rc",
            allow: ["arm"],
            rc: 3,
            capacity: 8,
            avail: 12,
            restrict: "F",
            cost: 6000,
            ref: {
                book: "SR5",
                page: "456,457"
            }
        },
        cyberarmslide: {
            name: "Cyberarm Slide",
            type: "accessory",
            allow: ["arm"],
            capacity: 3,
            avail: 12,
            restrict: "R",
            cost: 3000,
            ref: {
                book: "SR5",
                page: "456,457"
            }
        },
        cyberholster: {
            name: "Cyber Holster",
            type: "accessory",
            allow: ["arm", "leg", "chest", "head"],
            capacity: 5,
            avail: 8,
            restrict: "R",
            cost: 2000,
            ref: {
                book: "SR5",
                page: "457"
            }
        },
        hydraulicjacks: {
            name: "Hydraulic Jacks",
            type: "accessory",
            allow: ["leg"],
            rating: 0,
            ratingmax: 6,
            capacity: 0,
            avail: 9,
            availx: 0,
            restrict: "",
            cost: 0,
            costx: 8000,
            ref: {
                book: "SR5",
                page: "456,457"
            }
        },
        largesmugglingcompartment: {
            name: "Large Smuggling Compartment",
            type: "accessory",
            allow: ["arm", "leg", "chest", "head"],
            capacity: 5,
            avail: 6,
            restrict: "",
            cost: 8000,
            ref: {
                book: "SR5",
                page: "457"
            }
        },

    },
    weapons: {
        holdoutpistol: {
            name: "Hold-Out Pistol",
            type: "cybergun",
            clip: false,
            laser: false,
            silencer: false,
            capacity: 2,
            avail: 8,
            restrict: "R",
            cost: 2000,
            ref: {
                book: "SR5",
                page: "458"
            },
            stats: {
                skill: "pistols",
                accuracy: 4,
                accmod: 2,
                damage: 6,
                stat: 0,
                dvmod: 0,
                damtype: "P",
                element: "",
                mode: {
                    SA: "SA"
                },
                rc: 0,
                rcmod: 0,
                ammo: {
                    mag: 2,
                    clip: 6
                },
                clip: {
                    mag: "m",
                    clip: "c"
                },
                ap: 0
            }
        }
    }
}
