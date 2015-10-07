var ammunition = {
    //taser
    taserdart: {
        name: "Taser Dart",
        ammo: 0,
        class: "taserammo",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        avail: 3,
        restrict: "",
        cost: 50
    },
    //assult cannon ammo
    assaultcannon: {
        name: "Assault Cannon Rounds",
        ammo: 0,
        class: "cannonammo",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        avail: 12,
        restrict: "Forbidden",
        cost: 400
    },
    //dart guns
    dmsogel: {
        name: "DMSO Gel Rounds",
        ammo: 0,
        class: "specialammo",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 1,
        avail: 2,
        restrict: "Restricted",
        cost: 25
    },
    injectiondarts: {
        name: "Injection Darts",
        ammo: 0,
        class: "specialammo",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        avail: 4,
        restrict: "Restricted",
        cost: 75
    },
    //normal gun ammo
    apds: {
        name: "APDS",
        ammo: 0,
        class: "none",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: -4,
        avail: 12,
        restrict: "Forbidden",
        cost: 120
    },
    explosive: {
        name: "Explosive Rounds",
        ammo: 0,
        class: "none",
        dammod: 1,
        typemod: "",
        elemod: "",
        apmod: -1,
        avail: 9,
        restrict: "Forbidden",
        cost: 80
    },
    flechette: {
        name: "Flechette Rounds",
        ammo: 0,
        class: "none",
        dammod: 2,
        typemod: "",
        elemod: "",
        apmod: 5,
        avail: 6,
        restrict: "Restricted",
        cost: 65
    },
    gel: {
        name: "Gel Rounds",
        ammo: 0,
        class: "none",
        dammod: 0,
        typemod: "Stun",
        elemod: "",
        apmod: 1,
        avail: 2,
        restrict: "Restricted",
        cost: 25
    },
    hollow: {
        name: "Hollow Point Rounds",
        ammo: 0,
        class: "none",
        dammod: 1,
        typemod: "",
        elemod: "",
        apmod: 2,
        avail: 4,
        restrict: "Forbidden",
        cost: 70
    },
    regular: {
        name: "Regular Ammo",
        ammo: 0,
        class: "none",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        avail: 2,
        restrict: "Restricted",
        cost: 20
    },
    sticknshock: {
        name: "Stick-n-Shock",
        ammo: 0,
        class: "none",
        dammod: -2,
        typemod: "Stun",
        elemod: "Electric",
        apmod: -5,
        avail: 6,
        restrict: "Restricted",
        cost: 80
    },
    tracer: {
        name: "Tracer Rounds",
        ammo: 0,
        class: "none",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        avail: 6,
        restrict: "Restricted",
        cost: 60
    },
    //grenades
    flashbang: {
        name: "Flash-bang",
        ammo: 0,
        class: "grenades",
        dammod: 10,
        typemod: "Stun",
        elemod: "",
        apmod: -4,
        blast: "10m Radius",
        avail: 6,
        restrict: "Restricted",
        cost: 100
    },
    flashpak: {
        name: "Flash-pak",
        ammo: 0,
        class: "grenades",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        blast: "Special",
        avail: 4,
        restrict: "",
        cost: 125
    },
    frag: {
        name: "Fragmentation",
        ammo: 0,
        class: "grenades",
        dammod: 18,
        typemod: "Physical",
        elemod: "Flechette",
        apmod: 5,
        blast: "-1/m",
        avail: 11,
        restrict: "Forbidden",
        cost: 100
    },
    hiex: {
        name: "High-explosive",
        ammo: 0,
        class: "grenades",
        dammod: 16,
        typemod: "Physical",
        elemod: "",
        apmod: -2,
        blast: "-2/m",
        avail: 11,
        restrict: "Forbidden",
        cost: 100
    },
    gas: {
        name: "Gas",
        ammo: 0,
        class: "grenades",
        dammod: "chem",
        typemod: "",
        elemod: "",
        apmod: 0,
        blast: "10m Radius",
        avail: 2,
        restrict: "",
        cost: 40
    },
    Smoke: {
        name: "Smoke",
        ammo: 0,
        class: "grenades",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        blast: "10m Radius",
        avail: 4,
        restrict: "Restricted",
        cost: 40
    },
    thermalsmoke: {
        name: "Thermal Smoke",
        ammo: 0,
        class: "grenades",
        dammod: 0,
        typemod: "",
        elemod: "",
        apmod: 0,
        blast: "10m Radius",
        avail: 6,
        restrict: "Restricted",
        cost: 60
    },
    //rocket
    antivehicle: {
        name: "Anti-vehicle",
        ammo: 0,
        class: "rockets",
        dammod: 24,
        typemod: "Physical",
        elemod: "",
        apmod: "-4/-10",
        blast: "-4/m",
        avail: 18,
        restrict: "Forbidden",
        cost: 2800
    },
    fragrocket: {
        name: "Fragmentation",
        ammo: 0,
        class: "rockets",
        dammod: 24,
        typemod: "Physical",
        elemod: "Flechette",
        apmod: 5,
        blast: "-1/m",
        avail: 12,
        restrict: "Forbidden",
        cost: 2000
    },
    hiexrocket: {
        name: "High-explosive",
        ammo: 0,
        class: "rockets",
        dammod: 21,
        typemod: "Physical",
        elemod: "",
        apmod: -2,
        blast: "-2/m",
        avail: 18,
        restrict: "Forbidden",
        cost: 2100
    }

};

var explosives = {
    commercial: {
        name: "Commercial",
        kg: 0,
        rating: 5,
        avail: 8,
        restrict: "Restricted",
        cost: 100
    },
    foam: {
        name: "Foam",
        kg: 0,
        rating: 6,
        avail: 12,
        restrict: "Forbidden",
        cost: 600
    },
    plastic: {
        name: "Plastic",
        kg: 0,
        rating: 6,
        avail: 16,
        restrict: "Forbidden",
        cost: 600
    }
};

var detonator = {
    name: "Detonator Cap",
    ammount: 0,
    avail: 8,
    restrict: "Restricted",
    cost: 75
};

var toxin = {
    teargas: {
        name: "CS/Tear Gas",
        dose: 0,
        vector: "Contact, Inhalation",
        speed: "1 Combat Turn",
        penetration: 0,
        power: 8,
        effect: "Disorientation, Nausea, Stun Damage",
        avail: 4,
        restrict: "Restricted",
        cost: 20
    },
    nausea: {
        name: "Nausea Gas",
        dose: 0,
        vector: "Inhalation",
        speed: "3 Combat Turn",
        penetration: 0,
        power: 9,
        effect: "Disorientation, Nausea",
        avail: 6,
        restrict: "Restricted",
        cost: 25
    },
    neurostunviii: {
        name: "Neuro-Stun VIII",
        dose: 0,
        vector: "Contact, Inhalation",
        speed: "1 Combat Turn",
        penetration: 0,
        power: 12,
        effect: "Disorientation, Stun Damage",
        avail: 12,
        restrict: "Restricted",
        cost: 60
    },
    pepperpunch: {
        name: "Pepper Punch",
        dose: 0,
        vector: "Contact, Inhalation",
        speed: "1 Combat Turn",
        penetration: 0,
        power: 11,
        effect: "Nausea, Stun Damage",
        avail: 0,
        restrict: "",
        cost: 5
    }
};