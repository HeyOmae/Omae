var software = {
    datasoft: {},
    mapsoft: {},
    shopsoft: {},
    tutorsoft: {}
}

var maglockMod = {
    keypad: {
        name: "Keypad",
        avail: 0,
        restrict: "",
        cost: 50
    },
    cardreader: {
        name: "Card reader",
        avail: 0,
        restrict: "",
        cost: 50
    },
    antitampercircuits: {
        name: "Anti-tamper circuits",
        rating: 1,
        ratingmax: 4,
        avail: 1,
        availx: 1,
        restrict: "",
        costx: 250,
        cost: 250
    },
    biometricreader: {
        name: "Biometric Reader",
        avail: 4,
        restrict: "",
        cost: 200
    }
}

var programs = {
    //common
    browser: {
        name: "Browser",
        active: false,
        category: "common",
        rcc: true,
        test: "Matrix Search"
    },
    configurator: {
        name: "Configurator",
        active: false,
        catergoy: "common",
        rcc: false
    },
    edit: {
        name: "Edit",
        active: false,
        category: "common",
        rcc: false,
        test: "Edit",
        mod: 2
    },
    encryption: {
        name: "Encryption",
        active: false,
        category: "common",
        rcc: false,
        firewall: 1
    },
    signalscrub: {
        name: "Signal Scrub",
        active: false,
        category: "common",
        rcc: true,
        noisereduction: 2
    },
    toolbox: {
        name: "Toolbox",
        active: false,
        category: "common",
        rcc: true,
        dataprocessing: 1
    },
    virtualmachine: {
        name: "Virtual Machine",
        active: false,
        category: "common",
        rcc: true,
        programs: 2,
        damagetaken: 1
    },
    //hacking
    armor: {
        name: "Armor",
        active: false,
        category: "hacking",
        rcc: true,
        test: "Resist Matrix Damage",
        mod: 2
    },
    babymonitor: {
        name: "Baby Monitor",
        active: false,
        category: "hacking",
        rcc: false
    },
    biofeedback: {
        name: "Biofeedback",
        active: false,
        category: "hacking",
        rcc: false
    },
    biofeedbackfilter: {
        name: "Biofeedback Filter",
        active: false,
        category: "hacking",
        rcc: true,
        test: "Resist Biofeedback Damage",
        mod: 2
    },
    blackout: {
        name: "Blackout",
        active: false,
        category: "hacking",
        rcc: false
    },
    decryption: {
        name: "Decryption",
        active: false,
        category: "hacking",
        rcc: false,
        attack: 1
    },
    defuse: {
        name: "Defuse",
        active: false,
        category: "hacking",
        rcc: false,
        test: "Resist Data Bomb Damage",
        mod: 4
    },
    demolition: {
        name: "Demolition",
        active: false,
        category: "hacking",
        rcc: false,
        databombrating: 1
    },
    exploit: {
        name: "Exploit",
        active: false,
        category: "hacking",
        rcc: false,
        test: "Hack On The Fly",
        mod: 2
    },
    fork: {
        name: "Fork",
        active: false,
        category: "hacking",
        rcc: false
    },
    guard: {
        name: "Guard",
        active: false,
        category: "hacking",
        rcc: true
    },
    hammer: {
        name: "Hammer",
        active: false,
        category: "hacking",
        rcc: false,
        matrixdamage: 2
    },
    lockdown: {
        name: "Lockdown",
        active: false,
        category: "hacking",
        rcc: false
    },
    mugger: {
        name: "Mugger",
        active: false,
        category: "hacking",
        rcc: false
    },
    shell: {
        name: "Shell",
        active: false,
        category: "hacking",
        rcc: true,
        test: "Resist Matrix Damage, Resist Biofeedback Damage",
        mod: 1
    },
    sneak: {
        name: "Sneak",
        active: false,
        category: "hacking",
        rcc: true,
        test: "Defend Trace User",
        mod: 2
    },
    stealth: {
        name: "Stealth",
        active: false,
        category: "hacking",
        rcc: false,
        sleaze: 1
    },
    track: {
        name: "Track",
        active: false,
        category: "hacking",
        rcc: false,
        test: "Trace User",
        mod: 2
    },
    wrapper: {
        name: "Wrapper",
        active: false,
        category: "hacking",
        rcc: true
    }
};