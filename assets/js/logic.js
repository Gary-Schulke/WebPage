
//const API_KEY = 'pk.eyJ1IjoiZ2FyeXNjaHVsa2UiLCJhIjoiY2s0enc4bnpyMDg5NTNtbzB5d3RkNGExOSJ9.RL2z_jZO5LmlNuw-s4A7jw';
const MAPBOX_URL = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
const ATTRIBUTION = "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>";

var myMap = L.map('map', { center: [39.7392, -104.9903], zoom: 5 });

myMap.fitBounds([[40.23, -124.80], [29.95, -90.07]]);

function makeLRIcon(iconPNG, shadowPNG) {
    let newIcon = L.icon({
        iconUrl: iconPNG,
        shadowUrl: shadowPNG,
        iconSize: [100, 100], // size of the icon
        shadowSize: [150, 150], // size of the shadow
        iconAnchor: [125, 125], // point of the icon which will correspond to marker's location
        shadowAnchor: [150, 150],  // the same for the shadow
        popupAnchor: [0, 0]       // point from which the popup should open relative to the iconAnchor
    });
    return newIcon
};

function makeURIcon(iconPNG, shadowPNG) {
    let newIcon = L.icon({
        iconUrl: iconPNG,
        shadowUrl: shadowPNG,
        iconSize: [100, 100], // size of the icon
        shadowSize: [150, 150], // size of the shadow
        iconAnchor: [125, -25], // point of the icon which will correspond to marker's location
        shadowAnchor: [150, 0],  // the same for the shadow
        popupAnchor: [0, 0]       // point from which the popup should open relative to the iconAnchor
    });
    return newIcon
};

function makeULIcon(iconPNG, shadowPNG) {
    let newIcon = L.icon({
        iconUrl: iconPNG,
        shadowUrl: shadowPNG,
        iconSize: [100, 100], // size of the icon
        shadowSize: [150, 150], // size of the shadow
        iconAnchor: [-25, -25], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [0, 0]       // point from which the popup should open relative to the iconAnchor
    });
    return newIcon
};

function makeLLIcon(iconPNG, shadowPNG) {
    let newIcon = L.icon({
        iconUrl: iconPNG,
        shadowUrl: shadowPNG,
        iconSize: [100, 100], // size of the icon
        shadowSize: [150, 150], // size of the shadow
        iconAnchor: [-50, 150], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 150],  // the same for the shadow
        popupAnchor: [0, 0]       // point from which the popup should open relative to the iconAnchor
    });
    return newIcon
};

function makeIcon(iconPNG) {
    let newIcon = L.icon({
        iconUrl: iconPNG,
        iconSize: [35, 35],   // size of the icon
        iconAnchor: [-0, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, 0]   // point from which the popup should open relative to the iconAnchor    
    });

    return newIcon;
};

var tileLayer = L.tileLayer(MAPBOX_URL, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
}).addTo(myMap);

// let ico = makeLRIcon('Commodor_Pet.png','background_LR.png');
// let sheldonMarker = L.marker([43.1857, -95.8752], {icon: ico, title: 'Sheldon, IA', draggable: false}).addTo(myMap);

ico = makeLLIcon('assets/images/PDP11_computer.png', 'assets/images/background_LL.png');
let albuquerqueMarker = L.marker([35.1972, -106.5886], { icon: ico, title: 'Honeywell DASD\nAlbuquerque, NM', draggable: false }).addTo(myMap);

ico = makeULIcon('assets/images/Dell5500_computer.png', 'assets/images/background_UL.png');
let scottsdaleMarker = L.marker([33.5013, -111.9253], { icon: ico, title: 'General Dynamics C4S\nScottsdale, AZ', draggable: false }).addTo(myMap);

ico = makeURIcon('assets/images/GatewayP3.png', 'assets/images/background_UR.png');
let chandlerMarker = L.marker([33.3075, -111.8449], { icon: ico, title: 'Novellus Systems\nChandler, AZ', draggable: false }).addTo(myMap);

ico = makeULIcon('assets/images/LenovoP50_computer.png', 'assets/images/background_UL.png');
let tualatinMarker = L.marker([45.3879, -122.7933], { icon: ico, title: 'Lam Research Inc\nTualatin, OR', draggable: false }).addTo(myMap);

ico = makeIcon('assets/images/UNM_Logo.png');
let unmMarker = L.marker([35.1972, -106.5886], { icon: ico, title: 'University of New Mexico', draggable: false }).addTo(myMap);

let albu = '<img src="assets/images/CPP_logo.png" ' +
    'alt="CPP_logo.png" height="32" width="32" align="middle">&nbsp <strong>C++ </strong><br>' +

    'Developed a <strong>dll</strong> driver enabling C++ programs to communicate with prototype ' +
    'DVD hardware.  Wrote prototype code for manipulating digitized maps for flight planning. <br>' +

    '<img src="assets/images/ADA_logo.png" ' +
    'alt="ADA_logo.png" height="32" width="32" align="middle">&nbsp <strong>ADA</strong> <br>' +

    'ADA has been the preferred programming language for embedded mission critical systems for ' +
    'the military for over 40 years.  It allowed for multiple thread to run on processors significantly ' +
    'less powerful than we have today.  I participated in projects for the CH47 and V-22 aircraft.<br> ' +

    '<img src="assets/images/GWBasic_logo.jpg" ' +
    'alt="GWBasic_logo.jpg" height="32" width="32" align="middle"> ' +
    '&nbsp;<strong>GW Basic</strong> (We all start somewhere.)<br>' +
    'Created a program intefaced to a PC bus temerature input card. ' +
    'It read and plotted 16 channels of temperature data and wrote the data to a CSV file. ' +
    'As with most BWB programs it wasn\'t pretty code but it worked.<br>' +

    '<img src="assets/images/Pascal_logo.png" alt="Pascal_logo.jpg" height="32" width="32" <align="middle">' +
    '&nbsp;<strong>Turbo Pascal</strong> <br>' +
    'Rewrote the GW Basic program above in Pascal.  I also wrote a program to control a Analog and ' +
    'Digital I/O board. ';


albuquerqueMarker.bindPopup(albu);

let scot = '<img src="assets/images/Java_logo.png"' +
    ' alt="Java " height="82" width="82"> ' +
    '&nbsp;Java<br>Built network messaging simulators for the MUOS satellite ground system. ' +
    'Developed a number of Log4j appenders to log data to text file, MySql database, and ' +
    'directly to a browser.  Developed the MySql database schema. Also developed a maintence ' +
    'program to update security keys by integrating a FIPS library implemented in C with the ' +
    'Java program.';
scottsdaleMarker.bindPopup(scot);

let chan = '<p><img src="assets/images/VisualBasic_logo.jpg" ' +
    'alt="VisualBasic_logo.jpg" height="32" width="32" align="middle"> ' +

    '&nbsp;<strong>VisualBasic</strong><br>' +

    'My biggest project was developing an editor for process parameters (recipes). ' +
    'VB is a language that makes many things very easy to do such as user interfaces ' +
    'and including DLL\'s in a program.  It will also let you create global variable until ' +
    'maintainability is impossible.<br>' +

    '<img src="assets/images/Smalltalk_logo.png" alt="Smalltalk_logo.jpg" height="32" width="32">' +
    '&nbsp;<strong>Smalltalk</strong><br>' +
    'My first opportunity to work with Smalltalk.  Using the Rudolph Visual Works framework' +
    'I developed user interfaces and recipe editors for the Novellus 300mm CMP products.' +
    'I also designed and developed an interface to communicate with the factory chemical control ' +
    'system.'
'</p>';
chandlerMarker.bindPopup(chan);

let tual = '<img src="assets/images/C_logo.png" ' +
    'alt="C_logo.png" height="32" width="32"> ' +
    '&nbsp;<strong>C</strong><br>' +
    'Fixed defects and added enhancements to the Sabre ECD process tools.' +
    '<br>' +

    '<img src="assets/images/Smalltalk_logo.png" alt="Smalltalk_logo.jpg" height="32" width="32">' +
    '&nbsp;<strong>Smalltalk</strong><br>' +
    'Reunited with Smalltalk, I created software/hardware interfaces to monitor and control.' +
    'heat exchangers, heaters, and MFCs.';
tualatinMarker.bindPopup(tual);

let unmcs = '<p> <a href="https://www.cs.unm.edu/" target="_blank"><img src="assets/images/UNM_CS.png" ' +
    'alt="unmcs.png" height="70" width="100"> </a><br>University of New Mexico<br>Bachelor of Science<br>Computer Science</p>';
unmMarker.bindPopup(unmcs);