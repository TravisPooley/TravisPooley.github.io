// define the variable for street view
let panorama;

// define the variable for the map
let map;

// number of hints provided
let hints = 0;

// map restriction outer bounds
const FLINDERS_BOUNDS = {
  north: -35.0210873,
  south: -35.031186,
  west: 138.5673029,
  east: 138.5774731
};

// map centre point
const CENTER = {
  lat: -35.0708294, lng: 138.6079405
}

// Set different places where the player will be spawned
var places = [
  [{lat: -35.0924992, lng:138.5871781}],
  // [{ lat: -35.0708294, lng: 138.6079405}]
]

// selecting a random map location randomly
let currentPlace = places[Math.floor(Math.random() * (places.length))] // Pick a random place to be spawned
// saving the coordinates to the random map location
let coordinates = currentPlace[0] // Get coordinates

// outer bounds for map restriction polygon
const outerCoords = [
  { lat: -35.3728208, lng: 138.3674745 },
  { lat: -33.0885873, lng: 138.0281057 },
  { lat: -34.9180909, lng: 138.5983593 },
  { lat: -35.1692521, lng: 138.6484225 }
];

// initializing map and street view
function initialize() {

  // defining streetview object with arguments
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"), {
    position: coordinates,
    pov: {
      heading: 100,
      pitch: 0
    },
    zoom: 1,
    controls: false
  }
  )

  // defining map object with arguments
  map = new google.maps.Map(document.getElementById("map"), {
    center: CENTER,
    mapTypeId: 'satellite',
    tilt: 0,
    // restriction: {
    //   latLngBounds: FLINDERS_BOUNDS,
    //   strictBounds: false,
    // },
    zoom: 15,
  });


  // Define the LatLng coordinates for the polygon's inner path (map restriction coords)
  const innerCoords = [
    { lat: -35.03027672703389, lng: 138.57204873264922 },
    { lat: -35.03028990497521, lng: 138.572365233313 },
    { lat: -35.03031626085146, lng: 138.5727407425751 },
    { lat: -35.030329438786396, lng: 138.57306260765688 },
    { lat: -35.030329438786396, lng: 138.57347566784517 },
    { lat: -35.03028990497521, lng: 138.57381362618105 },
    { lat: -35.03015812546647, lng: 138.57411403359072 },
    { lat: -35.02996924113345, lng: 138.57440371216433 },
    { lat: -35.02965296871476, lng: 138.5746880263199 },
    { lat: -35.02938501473574, lng: 138.57494551838533 },
    { lat: -35.02908631090407, lng: 138.5752083748688 },
    { lat: -35.028783213253206, lng: 138.57544977368013 },
    { lat: -35.0284757217343, lng: 138.57564825714724 },
    { lat: -35.02830123856247, lng: 138.57569223814275 },
    { lat: -35.02815408118362, lng: 138.57573113017347 },
    { lat: -35.027931148231886, lng: 138.57572308354642 },
    { lat: -35.02772029483136, lng: 138.57571503691938 },
    { lat: -35.02750065529412, lng: 138.5756841915157 },
    { lat: -35.027335750497166, lng: 138.57566052787254 },
    { lat: -35.02718639497344, lng: 138.57562968246887 },
    { lat: -35.02704876630172, lng: 138.5756149303193 },
    { lat: -35.02692247260243, lng: 138.57558810822914 },
    { lat: -35.02682363391903, lng: 138.57550093643616 },
    { lat: -35.02672150048732, lng: 138.5754164468522 },
    { lat: -35.02666219714583, lng: 138.57528099529694 },
    { lat: -35.02663364366976, lng: 138.57516968362282 },
    { lat: -35.026619366927996, lng: 138.57508787624786 },
    { lat: -35.02660399197253, lng: 138.57499534003685 },
    { lat: -35.02659191164836, lng: 138.57488536946724 },
    { lat: -35.02656006351241, lng: 138.57478344552467 },
    { lat: -35.02650954575409, lng: 138.57467347495506 },
    { lat: -35.026420590495086, lng: 138.57460105531166 },
    { lat: -35.02630637619342, lng: 138.57454338781784 },
    { lat: -35.02619106351544, lng: 138.57452327125023 },
    { lat: -35.02610100969191, lng: 138.57449242584656 },
    { lat: -35.02597691096766, lng: 138.5744642626519 },
    { lat: -35.025889053349864, lng: 138.57441866509865 },
    { lat: -35.025783624083864, lng: 138.57434624545525 },
    { lat: -35.0256738017872, lng: 138.5742470037217 },
    { lat: -35.02554311306192, lng: 138.57409814112137 },
    { lat: -35.025438781576646, lng: 138.5739975582833 },
    { lat: -35.02534762869631, lng: 138.5739050220723 },
    { lat: -35.02521364476001, lng: 138.57377091162155 },
    { lat: -35.02511919693524, lng: 138.5736528944249 },
    { lat: -35.02502255253649, lng: 138.5735657226319 },
    { lat: -35.02491272921739, lng: 138.57344502322624 },
    { lat: -35.02481059339824, lng: 138.5733310293431 },
    { lat: -35.02471504687124, lng: 138.57320764772842 },
    { lat: -35.024646956174664, lng: 138.5730748783822 },
    { lat: -35.024596437234116, lng: 138.57293003909538 },
    { lat: -35.02457776718296, lng: 138.57267657034348 },
    { lat: -35.02456678479793, lng: 138.5725210022206 },
    { lat: -35.02455909712756, lng: 138.5723412942166 },
    { lat: -35.02455799888886, lng: 138.57217097394417 },
    { lat: -35.02453932882893, lng: 138.5720154058213 },
    { lat: -35.0245140693293, lng: 138.57189604752014 },
    { lat: -35.024472336225855, lng: 138.57180351130913 },
    { lat: -35.02442071893686, lng: 138.57168147079895 },
    { lat: -35.02450089045683, lng: 138.57179546468208 },
    { lat: -35.02440314708636, lng: 138.57164794318626 },
    { lat: -35.02433505613, lng: 138.5715446781392 },
    { lat: -35.024266965116944, lng: 138.5714212965245 },
    { lat: -35.02421754418483, lng: 138.57129791490982 },
    { lat: -35.024163730247025, lng: 138.57120806090782 },
    { lat: -35.02411211276317, lng: 138.5711141835923 },
    { lat: -35.02405829875596, lng: 138.57102835290382 },
    { lat: -35.02400558295944, lng: 138.57094118111084 },
    { lat: -35.023949572388396, lng: 138.5708372455115 },
    { lat: -35.02390454425442, lng: 138.57073666267345 },
    { lat: -35.023851828358765, lng: 138.57065083198498 },
    { lat: -35.023790326437535, lng: 138.57054220251987 },
    { lat: -35.023724431470576, lng: 138.57042820863674 },
    { lat: -35.023648652192925, lng: 138.57030214481304 },
    { lat: -35.0235123290022, lng: 138.57015056582085 },
    { lat: -35.023448630318406, lng: 138.57005937071435 },
    { lat: -35.02353099929665, lng: 138.5699587878763 },
    { lat: -35.02358481365096, lng: 138.5698541817247 },
    { lat: -35.02368475450071, lng: 138.5697442111551 },
    { lat: -35.023752845998686, lng: 138.56966642709367 },
    { lat: -35.02389561831032, lng: 138.56953365774743 },
    { lat: -35.02396151313929, lng: 138.56951488228432 },
    { lat: -35.02411854362675, lng: 138.56946782317388 },
    { lat: -35.02421848382403, lng: 138.56944502439725 },
    { lat: -35.02432391510852, lng: 138.56944234218824 },
    { lat: -35.02440738144564, lng: 138.56944368329275 },
    { lat: -35.02456101663871, lng: 138.56946588666204 },
    { lat: -35.024665349244195, lng: 138.5694752743936 },
    { lat: -35.02485204936383, lng: 138.56950209648375 },
    { lat: -35.02503771798659, lng: 138.5695463529325 },
    { lat: -35.02513436236742, lng: 138.5695678106046 },
    { lat: -35.02521892610692, lng: 138.56957988054518 },
    { lat: -35.025360325729686, lng: 138.56957988054518 },
    { lat: -35.02541413887984, lng: 138.5695999971128 },
    { lat: -35.02548113071114, lng: 138.56959865600828 },
    { lat: -35.02557660354962, lng: 138.56956729194118 },
    { lat: -35.0256605129197, lng: 138.56950837641728 },
    { lat: -35.02573519210963, lng: 138.5694413211919 },
    { lat: -35.025813165896885, lng: 138.56936219602596 },
    { lat: -35.02587576451735, lng: 138.56930318742764 },
    { lat: -35.025947148850605, lng: 138.56923210888874 },
    { lat: -35.02599437229835, lng: 138.56918114691746 },
    { lat: -35.02608113158473, lng: 138.56906983524334 },
    { lat: -35.02615361395592, lng: 138.5689920511819 },
    { lat: -35.026219506964864, lng: 138.56895181804668 },
    { lat: -35.02635129282343, lng: 138.5689021971799 },
    { lat: -35.02647161690686, lng: 138.56888533891924 },
    { lat: -35.0265627685339, lng: 138.56890009106883 },
    { lat: -35.02664513437453, lng: 138.5689148432184 },
    { lat: -35.02672969655125, lng: 138.56894300641306 },
    { lat: -35.02686257979506, lng: 138.56900603832491 },
    { lat: -35.02694714174683, lng: 138.56904358925112 },
    { lat: -35.027037194638254, lng: 138.56907175244578 },
    { lat: -35.02711846179656, lng: 138.56910528005847 },
    { lat: -35.02730376998664, lng: 138.56917358842495 },
    { lat: -35.027377349474556, lng: 138.56920711603763 },
    { lat: -35.02745751809498, lng: 138.5692379614413 },
    { lat: -35.027557383545215, lng: 138.56928263615978 },
    { lat: -35.027721014942955, lng: 138.56933091592205 },
    { lat: -35.027778121125465, lng: 138.5693403036536 },
    { lat: -35.027894529758576, lng: 138.56933493923557 },
    { lat: -35.02795764701234, lng: 138.5693140321073 },
    { lat: -35.02804989517414, lng: 138.56927111676305 },
    { lat: -35.02813884866014, lng: 138.56924027135938 },
    { lat: -35.02825196221239, lng: 138.56917589834302 },
    { lat: -35.0283727629206, lng: 138.5691007964906 },
    { lat: -35.02846281424148, lng: 138.56903642347424 },
    { lat: -35.02855616001816, lng: 138.5689747326669 },
    { lat: -35.02864291658562, lng: 138.56892511180013 },
    { lat: -35.02870551303914, lng: 138.568903654128 },
    { lat: -35.02885486578722, lng: 138.56885403326123 },
    { lat: -35.02896735280875, lng: 138.56883928111165 },
    { lat: -35.02904532351298, lng: 138.56885269215672 },
    { lat: -35.02914965039525, lng: 138.56887414982884 },
    { lat: -35.02925617349556, lng: 138.5688821964559 },
    { lat: -35.029401588357615, lng: 138.56889867041284 },
    { lat: -35.02949932575157, lng: 138.56891878698045 },
    { lat: -35.029587179489106, lng: 138.56894292686158 },
    { lat: -35.02977102321977, lng: 138.5689986436953 },
    { lat: -35.0298566803303, lng: 138.5690536289801 },
    { lat: -35.02994563185005, lng: 138.56911531978744 },
    { lat: -35.030033485107865, lng: 138.56921858483452 },
    { lat: -35.030150988692604, lng: 138.56930307441849 },
    { lat: -35.030246528865966, lng: 138.56942779713768 },
    { lat: -35.03030692776851, lng: 138.56957934194702 },
    { lat: -35.03038819167605, lng: 138.56985426837105 },
    { lat: -35.030409056720366, lng: 138.56998569661278 },
    { lat: -35.03041784200058, lng: 138.57016272240776 }
  ];

  //   // Construct the polygon, including both paths.
  //   const flindersOutline = new google.maps.Polygon({
  //     paths: [outerCoords, innerCoords],
  //     strokeColor: "#FFC107",
  //     strokeOpacity: 0.8,

  //     fillColor: "#FFC107",
  //     fillOpacity: 0.35,
  //   });
  // flindersOutline.setMap(map);

  test = [];

  const image = "duck.svg";
  var icon = {
    url: image, // url
    scaledSize: new google.maps.Size(75, 65), // size
  };
  let markers = [];
  clickPosition = 0;



  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    if (document.getElementById('map').style.width != "100%") {
      // hideMarkers();

      if (markers[0]) markers[0].setMap(null);

      markers = [];
      const marker = new google.maps.Marker({
        map: map,
        position: mapsMouseEvent.latLng,
        icon: icon,
        title: "Your guess",
        scale: 0.075,
        // scaledSize: new google.maps.Size(500, 50)
      });

      markers.push(marker);


      clickPosition = mapsMouseEvent.latLng;


      //   // Close the current InfoWindow.
      //   infoWindow.close();
      //   // Create a new InfoWindow.
      //   infoWindow = new google.maps.InfoWindow({
      //     position: mapsMouseEvent.latLng,
      //   });

      test.push(JSON.stringify(clickPosition.toJSON(), null, 2));
      //   infoWindow.setContent("");

      document.getElementById("guess").style.display = "unset";

      //   infoWindow.open(map);
    }

  });

}

// reduce playing area
function newHint() {
  // reject if too many hints given
  if (hints > 15) return;

  // add one hint to the counter
  hints++;

  const hint = new google.maps.Polygon({
    paths: [outerCoords, drawCircle(coordinates, 0.2-(0.01*hints), 1)],
    strokeColor: "#FFC107",
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: "#FFC107",
    fillOpacity: 0.25,
  });
  hint.setMap(map);
}

function drawCircle(point, radius, dir) {

  console.log(point.lat)
  var d2r = Math.PI / 180; // degrees to radians 
  var r2d = 180 / Math.PI; // radians to degrees 
  var earthsradius = 3963; // 3963 is the radius of the earth in miles
  var points = 64;

  // find the raidus in lat/lon 
  var rlat = (radius / earthsradius) * r2d;
  var rlng = rlat / Math.cos(point.lat * d2r);

  var extp = new Array();
  if (dir == 1) {
    var start = 0;
    var end = points + 1
  } // one extra here makes sure we connect the ends
  else {
    var start = points + 1;
    var end = 0
  }
  for (var i = start;
    (dir == 1 ? i < end : i > end); i = i + dir) {
    var theta = Math.PI * (i / (points / 2));
    ey = point.lng + (rlng * Math.cos(theta)); // center a + radius x * cos(theta) 
    ex = point.lat + (rlat * Math.sin(theta)); // center b + radius y * sin(theta) 
    extp.push({ "lat": ex, "lng": ey });
  }
  return extp;
}

function myFunction() {


  // show the result overlay
  document.getElementsByClassName("result")[0].style.display = "unset";
  
  // set map to take up whole screen
  document.getElementById('map').style.width = "100%";
  document.getElementById('map').style.height = "100%";
  document.getElementById('map').style.bottom = "0";
  document.getElementById('map').style.left = "0";

  // remove guess button
  document.getElementById("guess").style.display = "none";


  answer = coordinates

  // coords for line between the guess point and actual location
  const lineCoords = [];
  lineCoords.push(answer);
  lineCoords.push(clickPosition);

  // place marker at the real location
  const realLocationMarker = new google.maps.Polygon({
    paths: lineCoords,
    strokeColor: "#FF0000",
    strokeWeight: 3,
    fillColor: "#FF0000"
  });
  realLocationMarker.setMap(map);


  // marker for correct location
  const a = "answer.svg";
  var icon = {
    url: a, // url
    scaledSize: new google.maps.Size(75, 65), // size
  };

  
  // marker for users guess
  const image = "duck.svg";
  var yourGuess = {
    url: image, // url
    scaledSize: new google.maps.Size(75, 65), // size
  };


  // place marker at the guessed location
  new google.maps.Marker({
    position: answer,
    map,
    icon: icon,
    title: "Correct location",
    scaledSize: new google.maps.Size(50, 50)
  });

  // place marker at the guessed location
  new google.maps.Marker({
    position: clickPosition,
    map,
    icon: yourGuess,
    title: "Your guess",
    scaledSize: new google.maps.Size(500, 50)
  });

  // move the map to a new center
  var pos = midPoint(coordinates["lat"], coordinates["lng"], clickPosition.toJSON()["lat"], clickPosition.toJSON()["lng"]);
  // alert(pos)

  map.setCenter(new google.maps.LatLng(pos[0], pos[1]));
  var m = Math.round((getDistanceFromLatLonInKm(coordinates["lat"], coordinates["lng"], clickPosition.toJSON()["lat"], clickPosition.toJSON()["lng"]) * 1000) * 100) / 100
  document.getElementById("result-placeholder").innerText = m;
  document.getElementById("points").innerText = Math.round((1 / (1 + Math.pow(2, (m / 40) - 10)) + 1 / (1 + Math.pow(2, m - 10))) * 2500 + 5);

  // if distance is less than 150 metres show confetti
  if (m < 150) {
    // unhide the confetti wrapper
    document.getElementById("confetti-wrapper").style.display = "unset";
  }

}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const RADIUS = 6371; // Radius of the earth in km
  var latDegress = deg2rad(lat2 - lat1); // converting the lat and long into degrees
  var longDegrees = deg2rad(lon2 - lon1);
  var a =
    Math.sin(latDegress / 2) * Math.sin(latDegress / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(longDegrees / 2) * Math.sin(longDegrees / 2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS * c; // Distance in km
}

// convert degrees to radians
function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

// convert radians to degrees
function rad2deg(rad) {
  return rad * (180 / Math.PI);
}

// calculate the mid point between two points
function midPoint(lat1, lon1, lat2, lon2) {

  var dLon = deg2rad(lon2 - lon1);

  //convert to radians
  lat1 = deg2rad(lat1);
  lat2 = deg2rad(lat2);
  lon1 = deg2rad(lon1);

  Bx = Math.cos(lat2) * Math.cos(dLon);
  By = Math.cos(lat2) * Math.sin(dLon);
  lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By));
  lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);

  //print out in degrees
  return ([rad2deg(lat3), rad2deg(lon3)]);
}
