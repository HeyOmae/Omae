var electronics = { //This has more then just electronics in it now
    //commlinks
    metalink: {
        model: "Meta Link",
        type: "commlink",
        device: 1,
        avail: 2,
        cost: 100
    },
    sonyemperor: {
        model: "Sony Emperor",
        type: "commlink",
        device: 2,
        avail: 4,
        cost: 700
    },
    renrakusensei: {
        model: "Renraku Sensei",
        type: "commlink",
        device: 3,
        avail: 6,
        cost: 1000
    },
    erikaelite: {
        model: "Erika Elite",
        type: "commlink",
        device: 4,
        avail: 8,
        cost: 2500
    },
    hermesikon: {
        model: "Hermes Ikon",
        type: "commlink",
        device: 5,
        avail: 10,
        cost: 3000
    },
    transysavalon: {
        model: "Transys Avalon",
        type: "commlink",
        device: 6,
        avail: 12,
        cost: 5000
    },
    fairlightcaliban: {
        model: "Fairlight Caliban",
        type: "commlink",
        device: 7,
        avail: 14,
        cost: 8000
    },
    //decks
    erikamcd1: {
        model: "Erika MCD-1",
        type: "deck",
        device: 1,
        array: [4, 3, 2, 1],
        programs: 1,
        avail: 3,
        restrict: "Restricted",
        cost: 49500
    },
    Microdecksummit: {
        model: "Microdeck Summit",
        type: "deck",
        device: 1,
        array: [4, 3, 3, 1],
        programs: 1,
        avail: 3,
        restrict: "Restricted",
        cost: 58000
    },
    Microtronicaazteca200: {
        model: "Microtronica Azteca 200",
        type: "deck",
        device: 2,
        array: [5, 4, 3, 2],
        programs: 2,
        avail: 6,
        restrict: "Restricted",
        cost: 110250
    },
    Hermeschariot: {
        model: "Hermes Chariot",
        type: "deck",
        device: 2,
        array: [5, 4, 4, 2],
        programs: 2,
        avail: 6,
        restrict: "Restricted",
        cost: 123000
    },
    Novtechnavigator: {
        model: "Novtech Navigator",
        type: "deck",
        device: 3,
        array: [6, 5, 4, 3],
        programs: 3,
        avail: 6,
        restrict: "Restricted",
        cost: 205750
    },
    Renrakutsurugi: {
        model: "Renraku Tsurugi",
        type: "deck",
        device: 3,
        array: [6, 5, 5, 3],
        programs: 3,
        avail: 9,
        restrict: "Restricted",
        cost: 214125
    },
    Sonyciy720: {
        model: "Sony CIY-720",
        type: "deck",
        device: 4,
        array: [7, 6, 5, 4],
        programs: 4,
        avail: 12,
        restrict: "Restricted",
        cost: 345000
    },
    Shiawase: {
        model: "Shiawase Cyber-5",
        type: "deck",
        device: 5,
        array: [8, 7, 6, 5],
        programs: 5,
        avail: 15,
        restrict: "Restricted",
        cost: 549375
    },
    Fairlightexcalibur: {
        model: "Fairlight Excalibur",
        type: "deck",
        device: 6,
        array: [9, 8, 7, 6],
        programs: 6,
        avail: 18,
        restrict: "Restricted",
        cost: 823250
    },
    //RCC
    scratchbuiltjunk: {
        model: "Scratch-Built Junk",
        type: "rcc",
        device: 1,
        dataprocess: 3,
        firewall: 2,
        avail: 2,
        restrict: "Restricted",
        cost: 1400
    },
    Radioshackremotecontroller: {
        model: "Radio Shack Remote Controller",
        type: "rcc",
        device: 2,
        dataprocess: 3,
        firewall: 3,
        avail: 6,
        restrict: "Restricted",
        cost: 8000
    },
    Essymotorsdronemaster: {
        model: "Essy Motors DroneMaster",
        type: "rcc",
        device: 3,
        dataprocess: 4,
        firewall: 4,
        avail: 6,
        restrict: "Restricted",
        cost: 16000
    },
    Compuforcetaskmaster: {
        model: "CompuForce TaskMaster",
        type: "rcc",
        device: 4,
        mods: {},
        dataprocess: 5,
        firewall: 4,
        avail: 8,
        restrict: "Restricted",
        cost: 32000
    },
    Maerskspider: {
        model: "Maersk Spider",
        type: "rcc",
        device: 4,
        dataprocess: 4,
        firewall: 5,
        avail: 8,
        restrict: "Restricted",
        cost: 34000
    },
    Maserindustrialelectronics: {
        model: "Maser Industrial Electronics",
        type: "rcc",
        device: 5,
        dataprocess: 3,
        firewall: 4,
        avail: 8,
        restrict: "Restricted",
        cost: 64000
    },
    Vulcanliegelord: {
        model: "Vulcan Liegelord",
        type: "rcc",
        device: 5,
        dataprocess: 5,
        firewall: 6,
        avail: 10,
        restrict: "Restricted",
        cost: 66000
    },
    Proteusposeidon: {
        model: "Proteus Poseidon",
        type: "rcc",
        device: 5,
        dataprocess: 5,
        firewall: 6,
        avail: 12,
        restrict: "Restricted",
        cost: 68000
    },
    Lonestarremotecommander: {
        model: "Lone Star Remote Commander",
        type: "rcc",
        device: 6,
        dataprocess: 6,
        firewall: 5,
        avail: 14,
        restrict: "Restricted",
        cost: 75000
    },
    Mctdroneweb: {
        model: "MCT Drone Web",
        type: "rcc",
        device: 6,
        dataprocess: 7,
        firewall: 6,
        avail: 16,
        restrict: "Restricted",
        cost: 95000
    },
    Trioxubermensch: {
        model: "Triox UberMensch",
        type: "rcc",
        device: 6,
        dataprocess: 8,
        firewall: 7,
        avail: 18,
        restrict: "Restricted",
        cost: 140000
    },

    //accessories
    argloves: {
        name: "AR Gloves",
        type: "accessory",
        device: 3,
        avail: 0,
        cost: 150
    },
    biometricreader: {
        name: "Biometric reader",
        type: "accessory",
        device: 3,
        avail: 4,
        cost: 200
    },
    electronicpaper: {
        name: "Electronic paper",
        type: "accessory",
        device: 1,
        avail: 0,
        cost: 5
    },
    printer: {
        name: "Printer",
        type: "accessory",
        device: 3,
        avail: 0,
        cost: 25
    },
    satellitelink: {
        name: "Satellite link",
        type: "accessory",
        device: 4,
        avail: 6,
        cost: 500
    },
    simrig: {
        name: "Simrig",
        type: "accessory",
        device: 3,
        avail: 12,
        cost: 1000
    },
    subvocalmic: {
        name: "Subvocal mic",
        type: "accessory",
        device: 3,
        avail: 4,
        cost: 50
    },
    tridprojector: {
        name: "Trid Projector",
        type: "accessory",
        device: 3,
        avail: 0,
        cost: 200
    },
    trodes: {
        name: "Trodes",
        type: "accessory",
        device: 3,
        avail: 0,
        cost: 70
    },

    //RFID
    standardtag: {
        name: "Standard Tag",
        type: "rfid",
        device: 1,
        avail: 0,
        restrict: "",
        peritem: 10,
        cost: 1
    },
    datachip: {
        name: "Datachip",
        type: "rfid",
        device: 1,
        avail: 0,
        restrict: "",
        peritem: 10,
        cost: 5
    },
    securitytags: {
        name: "Security Tags",
        type: "rfid",
        device: 3,
        avail: 0,
        restrict: "",
        peritem: 10,
        cost: 5
    },
    sensortags: {
        name: "Sensor Tags",
        type: "rfid",
        device: 2,
        avail: 5,
        restrict: "",
        peritem: 10,
        cost: 40
    },
    stealthtags: {
        name: "Stealth Tags",
        type: "rfid",
        device: 3,
        avail: 7,
        restrict: "Restricted",
        peritem: 10,
        cost: 10
    },

    //communications
    bugscanner: {
        name: "Bug Scanner",
        type: "communications",
        rating: 1,
        ratingmax: 6,
        availx: 1,
        avail: 1,
        restrict: "Restricted",
        costx: 100,
        cost: 100
    }, //availx and costx are the multiplier for rating
    datatap: {
        name: "Data Tap",
        type: "communications",
        rating: "n/a",
        avail: 6,
        restrict: "Restricted",
        cost: 300
    },
    headjammer: {
        name: "Headjammer",
        type: "communications",
        rating: 1,
        ratingmax: 6,
        availx: 1,
        avail: 1,
        restrict: "Restricted",
        costx: 150,
        cost: 150
    },
    jammerarea: {
        name: "Jammer, area",
        type: "communications",
        rating: 1,
        ratingmax: 6,
        availx: 3,
        avail: 3,
        restrict: "Forbidden",
        costx: 200,
        cost: 200
    },
    jammerdirectional: {
        name: "Jammer, directional",
        type: "communications",
        rating: 1,
        ratingmax: 6,
        availx: 2,
        avail: 2,
        restrict: "Forbidden",
        costx: 200,
        cost: 200
    },
    microtransciever: {
        name: "Micro-transciever",
        type: "communications",
        rating: "n/a",
        avail: 2,
        restrict: "",
        costx: 100,
        cost: 100
    },
    tageraser: {
        name: "Tag eraser",
        type: "communications",
        rating: "n/a",
        avail: 6,
        restrict: "Restricted",
        cost: 450
    },
    whitenoisegenerator: {
        name: "White noise generator",
        type: "communications",
        rating: 1,
        ratingmax: 6,
        availx: 1,
        avail: 1,
        restrict: "",
        costx: 50,
        cost: 50
    },

    //credsticks
    standard: {
        name: "Standard",
        type: "credsticks",
        maxvalue: "5,000",
        avail: 0,
        restrict: "",
        cost: 5
    },
    silvercredstick: {
        name: "Silver",
        type: "credsticks",
        maxvalue: "20,000",
        avail: 0,
        restrict: "",
        cost: 20
    },
    goldcredstick: {
        name: "Gold",
        type: "credsticks",
        maxvalue: "100,000",
        avail: 5,
        restrict: "",
        cost: 100
    },
    platinumcredstick: {
        name: "Platinum",
        type: "credsticks",
        maxvalue: "500,000",
        avail: 10,
        restrict: "",
        cost: 500
    },
    ebonycredstick: {
        name: "Ebony",
        type: "credsticks",
        maxvalue: "1,000,000",
        avail: 20,
        restrict: "",
        cost: 1000
    },

    //licenses and SINS
    fakesin: {
        name: "Fake SIN",
        id: "",
        type: "identification",
        rating: 1,
        avail: 3,
        availx: 3,
        restrict: "Forbidden",
        costx: 2500,
        cost: 2500
    },
    fakelicense: {
        name: "Fake License",
        id: "",
        type: "identification",
        rating: 1,
        avail: 3,
        availx: 3,
        restrict: "Forbidden",
        costx: 200,
        cost: 200
    },

    //Tools
    toolkit: {
        name: "Kit",
        type: "tools",
        skill: "",
        avail: 0,
        restrict: "",
        cost: 500
    },
    toolshop: {
        name: "Shop",
        type: "tools",
        skill: "",
        avail: 8,
        restrict: "",
        cost: 5000
    },
    toolfacility: {
        name: "Facility",
        type: "tools",
        skill: "",
        avail: 12,
        restrict: "",
        cost: 50000
    },

    //optical & imaging devices
    binoculars: {
        name: "Binoculars",
        type: "optics",
        rating: 1,
        ratingmax: 3,
        mods: ["Vision Magnification"],
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },
    binocularsoptical: {
        name: "Binoculars Opitcal",
        type: "optics",
        rating: "n/a",
        ratingmax: 0,
        mods: ["Vision Magnification"],
        avail: 0,
        restrict: "",
        cost: 50
    },
    camera: {
        name: "Camera",
        type: "optics",
        rating: 1,
        ratingmax: 6,
        mods: ["Audio and Video Recording"],
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 100,
        cost: 100
    },
    microcamera: {
        name: "Micro-Camera",
        type: "optics",
        rating: 1,
        ratingmax: 1,
        mods: ["Audio and Video Recording"],
        avail: 0,
        restrict: "",
        cost: 100
    },
    contacts: {
        name: "Contacts",
        type: "optics",
        rating: 1,
        ratingmax: 3,
        avail: 6,
        availx: 0,
        restrict: "",
        costx: 200,
        cost: 200
    },
    glasses: {
        name: "Glasses",
        type: "optics",
        rating: 1,
        ratingmax: 4,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 100,
        cost: 100
    },
    goggles: {
        name: "Goggles",
        type: "optics",
        rating: 1,
        ratingmax: 6,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },
    monocle: {
        name: "Monocle",
        type: "optics",
        rating: 1,
        ratingmax: 4,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 120,
        cost: 120
    },
    endoscope: {
        name: "Endoscope",
        type: "optics",
        rating: "n/a",
        ratingmax: 0,
        avail: 8,
        restrict: "",
        cost: 250
    },
    periscope: {
        name: "Periscope",
        type: "optics",
        rating: "n/a",
        ratingmax: 0,
        avail: 3,
        restrict: "",
        cost: 50
    },
    magesightgoggles: {
        name: "Mage Sight Goggles",
        type: "optics",
        rating: "n/a",
        ratingmax: 0,
        avail: 3,
        restrict: "",
        cost: 50
    },

    //Audio Devices
    directionalmic: {
        name: "Directional Mic",
        type: "audio",
        rating: 1,
        ratingmax: 6,
        avail: 4,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },
    earbuds: {
        name: "Ear Buds",
        type: "audio",
        rating: 1,
        ratingmax: 3,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },
    headphones: {
        name: "Headphones",
        type: "audio",
        rating: 1,
        ratingmax: 6,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },
    lasermicrophone: {
        name: "Laser Microphone",
        type: "audio",
        rating: 1,
        ratingmax: 6,
        avail: 6,
        availx: 0,
        restrict: "Restricted",
        costx: 100,
        cost: 100
    },
    omnidirectionalmicrophone: {
        name: "Omni-Directional Microphone",
        type: "audio",
        rating: 1,
        ratingmax: 6,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },

    //Security devices
    keycombinationlock: {
        name: "Key/combination lock",
        type: "securitydevice",
        rating: 1,
        ratingmax: 6,
        avail: 1,
        availx: 1,
        restrict: "",
        costx: 10,
        cost: 10
    },
    maglock: {
        name: "Maglock",
        type: "securitydevice",
        rating: 1,
        ratingmax: 6,
        maglockMods: {},
        avail: 1,
        availx: 1,
        restrict: "",
        costx: 100,
        cost: 100
    },


    //restraints
    metalrestraint: {
        name: "Metal",
        type: "restraints",
        armor: 16,
        structure: 2,
        avail: 0,
        restrict: "",
        peritem: 1,
        cost: 20
    },
    plasteelrestraint: {
        name: "Plasteel",
        type: "restraints",
        armor: 20,
        structure: 2,
        avail: 6,
        restrict: "Restricted",
        peritem: 1,
        cost: 50
    },
    plasticrestraint: {
        name: "Plastic (per 10)",
        type: "restraints",
        armor: 6,
        structure: 1,
        avail: 0,
        restrict: "",
        peritem: 10,
        cost: 5
    },
    containmentmanacles: {
        name: "Containment manacles",
        type: "restraints",
        armor: 16,
        structure: 2,
        avail: 6,
        restrict: "Restricted",
        peritem: 1,
        cost: 250
    },

    //b&e gear
    autopicker: {
        name: "Autopicker",
        type: "bnegear",
        rating: 1,
        ratingmax: 6,
        avail: 8,
        availx: 0,
        restrict: "Restricted",
        costx: 500,
        cost: 500
    },
    cellularglovemolder: {
        name: "Cellular glove molder",
        type: "bnegear",
        rating: 1,
        ratingmax: 4,
        avail: 12,
        availx: 0,
        restrict: "Forbidden",
        costx: 500,
        cost: 500
    },
    chisel: {
        name: "Chisel",
        type: "bnegear",
        avail: 0,
        restrict: "",
        cost: 20
    },
    crowbar: {
        name: "Crowbar",
        type: "bnegear",
        avail: 0,
        restrict: "",
        cost: 20
    },
    keycardcopier: {
        name: "Keycard Copier",
        type: "bnegear",
        rating: 1,
        ratingmax: 6,
        avail: 8,
        availx: 0,
        restrict: "Forbidden",
        costx: 600,
        cost: 600
    },
    lockpickset: {
        name: "Lockpick set",
        type: "bnegear",
        avail: 4,
        restrict: "Restricted",
        cost: 250
    },
    maglockpasskey: {
        name: "Maglock passkey",
        type: "bnegear",
        rating: 1,
        ratingmax: 4,
        avail: 3,
        availx: 3,
        restrict: "Forbidden",
        costx: 2000,
        cost: 2000
    },
    miniwelder: {
        name: "Miniwelder",
        type: "bnegear",
        avail: 2,
        restrict: "",
        cost: 250
    },
    miniwelderfuel: {
        name: "Miniwelder fuel canister",
        type: "bnegear",
        avail: 2,
        restrict: "",
        cost: 80
    },
    monofilamentchainsaw: {
        name: "Monofilament chainsaw",
        type: "bnegear",
        avail: 8,
        restrict: "",
        cost: 500
    },
    sequencer: {
        name: "Sequencer",
        type: "bnegear",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Forbidden",
        costx: 250,
        cost: 250
    },

    //industrial chemicals
    gluesolvent: {
        name: "Glue Solvent",
        type: "chemicals",
        avail: 2,
        restrict: "",
        cost: 90
    },
    gluesprayer: {
        name: "Glue Sprayer",
        type: "chemicals",
        avail: 2,
        restrict: "",
        cost: 150
    },
    thermiteburningbar: {
        name: "Thermite burning bar",
        type: "chemicals",
        avail: 16,
        restrict: "Restricted",
        cost: 500
    },

    //survival gear
    chemsuit: {
        name: "Chemsuit",
        type: "survivalgear",
        rating: 1,
        ratingmax: 6,
        avail: 2,
        availx: 2,
        restrict: "",
        costx: 150,
        cost: 150
    },
    climbinggear: {
        name: "Climbing gear",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 200
    },
    divinggear: {
        name: "Diving gear",
        type: "survivalgear",
        avail: 6,
        restrict: "",
        cost: 2000
    },
    flashlight: {
        name: "Flashlight",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 25
    },
    gasmask: {
        name: "Gas mask",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 200
    },
    geckotapegloves: {
        name: "Gecko tape gloves",
        type: "survivalgear",
        avail: 12,
        restrict: "",
        cost: 250
    },
    hazmatsuit: {
        name: "Hazmat suit",
        type: "survivalgear",
        avail: 8,
        restrict: "",
        cost: 3000
    },
    lightstick: {
        name: "Chemsuit",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 25
    },
    magnesiumtorch: {
        name: "Magnesium torch",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 5
    },
    microflarelauncher: {
        name: "Micro flare launcher",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 175
    },
    microflares: {
        name: "Micro flares",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 25
    },
    rappellinggloves: {
        name: "Rappelling gloves",
        type: "survivalgear",
        avail: 0,
        restrict: "",
        cost: 50
    },
    respirator: {
        name: "Respirator",
        type: "survivalgear",
        rating: 1,
        ratingmax: 6,
        avail: 0,
        availx: 0,
        restrict: "",
        costx: 50,
        cost: 50
    },
    survivalkit: {
        name: "Survival Kit",
        type: "survivalgear",
        avail: 4,
        restrict: "",
        cost: 200
    },

    //grapple gun gear
    grapplegun: {
        name: "Grapple gun",
        type: "grapplegungear",
        avail: 8,
        restrict: "Restricted",
        cost: 500
    },
    catalyststick: {
        name: "Catalyst stick",
        type: "grapplegungear",
        avail: 8,
        restrict: "Forbidden",
        cost: 120
    },

    //Grappling rope
    microwire: {
        name: "Microwire",
        type: "grapplerope",
        avail: 4,
        restrict: "",
        peritem: 100,
        cost: 50
    },
    myomericrope: {
        name: "Myomeric rope",
        type: "grapplerope",
        avail: 10,
        restrict: "",
        peritem: 10,
        cost: 200
    },
    standardrope: {
        name: "Standard rope",
        type: "grapplerope",
        avail: 0,
        restrict: "",
        peritem: 100,
        cost: 50
    },
    stealthrope: {
        name: "Stealth rope",
        type: "grapplerope",
        avail: 8,
        restrict: "Forbidden",
        peritem: 100,
        cost: 85
    },

    //biotech
    biomonitor: {
        name: "Biomonitor",
        type: "biotech",
        avail: 3,
        restrict: "",
        cost: 300
    },
    disposablesyringe: {
        name: "Disposable syringe",
        type: "biotech",
        avail: 3,
        restrict: "",
        cost: 10
    },
    medkit: {
        name: "Medkit",
        type: "biotech",
        rating: 1,
        ratingmax: 6,
        avail: 1,
        availx: 1,
        restrict: "",
        costx: 250,
        cost: 250
    },
    medkitsupplies: {
        name: "Medkit supplies",
        type: "biotech",
        avail: 0,
        restrict: "",
        cost: 100
    },

    //docwagon contract
    basiccontract: {
        name: "Basic",
        type: "docwagon",
        avail: 0,
        restrict: "",
        peritem: 1,
        cost: 5000
    },
    goldontract: {
        name: "Gold",
        type: "docwagon",
        avail: 0,
        restrict: "",
        peritem: 1,
        cost: 25000
    },
    platinumontract: {
        name: "Platinum",
        type: "docwagon",
        avail: 0,
        restrict: "",
        peritem: 1,
        cost: 50000
    },
    superplatinumontract: {
        name: "Super-platinum",
        type: "docwagon",
        avail: 0,
        restrict: "",
        peritem: 1,
        cost: 100000
    },

    //slap patches
    antidotepatch: {
        name: "Antidote patch",
        type: "slappatches",
        rating: 1,
        ratingmax: 6,
        avail: 1,
        availx: 1,
        restrict: "",
        costx: 50,
        cost: 50
    },
    chempatch: {
        name: "Chem patch",
        type: "slappatches",
        avail: 6,
        restrict: "",
        cost: 200
    },
    stimpatch: {
        name: "Stim patch",
        type: "slappatches",
        rating: 1,
        ratingmax: 6,
        avail: 2,
        availx: 2,
        restrict: "",
        costx: 25,
        cost: 25
    },
    tranqpatch: {
        name: "Tranq patch",
        type: "slappatches",
        rating: 1,
        ratingmax: 10,
        avail: 2,
        availx: 2,
        restrict: "",
        costx: 20,
        cost: 20
    },
    traumapatch: {
        name: "Trauma patch",
        type: "slappatches",
        avail: 6,
        restrict: "",
        cost: 500
    },

    //magical items
    //enchanting foci
    alchemicalfocus: {
        name: "Alechemical Focus",
        type: "enchantingfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 5000,
        cost: 5000,
        karmaCost: 3
    },
    disenchantingfocus: {
        name: "Disenchanting Focus",
        type: "enchantingfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 5000,
        cost: 5000,
        karmaCost: 3
    },
    //metamagic foci
    centeringfocus: {
        name: "Centering Focus",
        type: "metamagicfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 9000,
        cost: 9000,
        karmaCost: 3
    },
    flexiblesignaturefocus: {
        name: "Flexible Signature Focus",
        type: "metamagicfoci",
        rating: 1,
        ratingmax: 6,
        restrict: "Restricted",
        avail: 3,
        availx: 3,
        costx: 9000,
        cost: 9000,
        karmaCost: 3
    },
    maskingfocus: {
        name: "Masking Focus",
        type: "metamagicfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 9000,
        cost: 9000,
        karmaCost: 3
    },
    spellshapingfocus: {
        name: "Spell Shaping Focus",
        type: "metamagicfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 9000,
        cost: 9000,
        karmaCost: 3
    },
    //power foci
    powerfocifocus: {
        name: "Power Focus",
        type: "powerfoci",
        rating: 1,
        ratingmax: 6,
        avail: 4,
        availx: 4,
        restrict: "Restricted",
        costx: 18000,
        cost: 18000,
        karmaCost: 6
    },
    //qi foci
    qifocus: {
        name: "Qi Focus",
        type: "qifoci",
        magicType: "adrenalineboost",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 3000,
        cost: 3000,
        karmaCost: 2
    },
    //spell foci
    counterspellingfocus: {
        name: "Counterspelling Focus",
        type: "spellfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        magicType: "Combat",
        karmaCost: 2
    },
    ritualspellcastingfocus: {
        name: "Ritual Spellcasting Focus",
        type: "spellfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        magicType: "Anchored",
        karmaCost: 2
    },
    spellcastingfocus: {
        name: "Spellcasting Focus",
        type: "spellfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        magicType: "Combat",
        karmaCost: 2
    },
    sustainingfocus: {
        name: "Sustaining Focus",
        type: "spellfoci",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        magicType: "Combat",
        karmaCost: 2
    },
    //spirit foci
    summoningfocus: {
        name: "Summoning Focus",
        type: "spiritfoci",
        magicType: "Air",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        karmaCost: 2
    },
    banishingfocus: {
        name: "Banishing Focus",
        type: "spiritfoci",
        magicType: "Air",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        karmaCost: 2
    },
    bindingfocus: {
        name: "Binding Focus",
        type: "spiritfoci",
        magicType: "Air",
        rating: 1,
        ratingmax: 6,
        avail: 3,
        availx: 3,
        restrict: "Restricted",
        costx: 4000,
        cost: 4000,
        karmaCost: 2
    },
    //Magical Supplies
    magicallodgematerials: {
        name: "Magical Lodge Materials",
        type: "magicallodgematerials",
        rating: 1,
        ratingmax: 12,
        avail: 2,
        availx: 2,
        restrict: "",
        cost: 500,
        costx: 500
    },
    reagents: {
        name: "Reagents",
        type: "reagents",
        avail: 0,
        restrict: "",
        peritem: 1,
        cost: 20
    }

};
