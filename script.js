
/// Vordefinition übersichtlicher und Zugriff in jeder Funktion möglich;
var secondCameraEl = document.querySelector('#camera2');
var camera = document.querySelector('#camera');
var pos1 = document.querySelector('#camera').getAttribute('position');
var rot1 = document.querySelector('#camera').getAttribute('rotation');
var rotationChange = document.querySelector('#camera').getAttribute('orbit-control');
var aniTarget = document.querySelector('#target');
var check;
var portalswitch = true;
var cGebText = false;
var dGebText = false;
var aGebText = false;
var kGebText = false;
var MensaGebText = false;
var bGebText = false;
var isOrbit = true;
var count = 0;
var bodenEGC = document.querySelector('#CEG');
var boden1C = document.querySelector('#CE1');
var boden2C = document.querySelector('#CE2');
var waendEG = document.querySelector('#EGCW');
var waendOG1 = document.querySelector('#OG1CW');
var waendOG2 = document.querySelector('#OG2CW');
var egC = false;
var up = document.getElementById("up");
var down = document.getElementById("dow");
var c1 = false;
var c2 = false;
///light///
var light1 = document.querySelector('#light1');
var light2 = document.querySelector('#light2');
var lightMain1 = document.querySelector('#lightMain1');
var lightMain1 = document.querySelector('#lightMain2');
///Etagen ///
var x = document.querySelector("#EG0");
var y = document.querySelector("#E1");
var z = document.querySelector("#E2");
var cbg =  document.querySelector("#CBG");
////varButton////
var w = document.querySelector("#Wireframe");
var btob = document.querySelector("#backToOrbit");
var s = document.querySelector("#Teleport");
var u = document.querySelector("#up");
var d = document.querySelector("#dow");
var vrb = document.querySelector(".a-enter-vr-button");
var r = document.querySelector('.rundgang');
var rg = false;
var n = document.querySelector('#plus');
var bck = document.querySelector('#minus');
var orbitButt = document.querySelector('.Teleport');
var roadButt = document.querySelector('.RoadButton');
var orbitIMG  = document.querySelector('#orbitIMG');
var roadIMG = document.querySelector('#roadIMG');
/// Text///
var headBG = document.querySelector('#HeadBG');
var headSZ = document.querySelector('#CampusSZ');
var Logo01 = document.querySelector('#Logo01');
var cH = document.querySelector('#cHead');
var dH = document.querySelector('#dHead');
var aH = document.querySelector('#aHead');
var mH = document.querySelector('#mHead');
var kH = document.querySelector('#kHead');
var bH = document.querySelector('#bHead');

var avaDef = document.querySelector('#avaDef');
var avaLach = document.querySelector('#avaLach');
var avaLeft = document.querySelector('#avaLeft');
var avaZwink = document.querySelector('#avaZwink');
var avaLove = document.querySelector('#avaLove');
var avaEye = document.querySelector('#avaEye');
var avaKreis = document.querySelector('#avaKreis');


var SprechBK = document.querySelector('#sprechK');
var SprechBG = document.querySelector('#sprechG');

var txt1 = document.querySelector('#txt1');
var txt2 = document.querySelector('#txt2');
var txt3 = document.querySelector('#txt3');
var txt4 = document.querySelector('#txt4');
var txtC = document.querySelector('#txtC');
var txtA = document.querySelector('#txtA');
var txtB = document.querySelector('#txtB');
var txtD = document.querySelector('#txtD');
var txtM = document.querySelector('#txtM');
var txtI1 = document.querySelector('#txtI1');
var txtI2 = document.querySelector('#txtI2');
var txtI3 = document.querySelector('#txtI3');

var hoverAvai = true;
var loadCon = document.querySelector('#loaderContainer');
var navCon = document.querySelector('.navContainer');

const SprechVersuch = setTimeout(textToggleSprech1, 7000);
const SprechVersuch2 = setTimeout(textToggleSprech2, 14000);
const SprechVersuch3 = setTimeout(textToggleSprech3, 21000);
const SprechVersuch4 = setTimeout(textToggleSprech4, 25000);


///AFrame Klick Funktion auf Modellen mit smooth Tag (hier die rosa Sphere)
///Animation zu festgelegter Position, wenn gewünscht auch
// Animation zur Klick-Position (Siehe erster Prototype oder Endpraese)
AFRAME.registerComponent("smooth", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      camera.setAttribute('animation__animateToPos', 'to', { x: 0, y: 1.6, z: 0 });
      camera.setAttribute('animation__animateToPos', 'from', { x: pos1.x, y: pos1.y, z: pos1.z });
      camera.emit('aniamtetoPos');
    });
  }
});
///springt zum cGeb
AFRAME.registerComponent("smootha", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      if(isOrbit){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: -35, y: 0, z: 130 });
      camera.setAttribute('position', { x: 15, y: 18, z: 150 });
      camera.setAttribute('orbit-controls', { maxDistance: 40 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      cGebText = true;
      isOrbit = false;
      w.style.display = "block";
      btob.style.display = "block";
      r.style.display = "none";
      orbitButt.style.display = "none";
      roadButt.style.display = "none";
      cH.style.display ="block";
    }
    });
  }
});

///springt zum bGeb
AFRAME.registerComponent("smoothb", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 70, y: 15, z: 5 });
      camera.setAttribute('position', { x: 0, y: 48, z: 150 });
      camera.setAttribute('orbit-controls', { maxDistance: 57 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      isOrbit = false;
      w.style.display = "block";
      btob.style.display = "block";
      r.style.display = "none";
      bGebText = true;
      orbitButt.style.display ="none";
      roadButt.style.display ="none";
      bH.style.display ="block";
    });
  }
});

/// springt zum kGeb
AFRAME.registerComponent("smoothc", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 86, y: 0, z: -25 });
      camera.setAttribute('position', { x: 0, y: 100, z: -25 });
      camera.setAttribute('orbit-controls', { maxDistance: 30 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      isOrbit = false;
      btob.style.display = "block";
      r.style.display = "none";
      kGebText = true;
      orbitButt.style.display ="none";
      roadButt.style.display ="none";
      kH.style.display ="block";
    });
  }
});

/// springt zum aGeb
AFRAME.registerComponent("smoothd", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 60, y: 0, z: -100 });
      camera.setAttribute('position', { x: 0, y: 50, z: 0 });
      camera.setAttribute('orbit-controls', { maxDistance: 100 });
      camera.setAttribute('orbit-controls', { minDistance: 100 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      isOrbit = false;
      w.style.display = "block";
      btob.style.display = "block";
      r.style.display = "none";
      aGebText = true;
      orbitButt.style.display ="none";
      roadButt.style.display ="none";
      aH.style.display ="block";
    });
  }
});

/// springt zum dGeb
AFRAME.registerComponent("smoothe", {
  init: function (d) {
    this.el.addEventListener("click", (e) => {
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: -40, y: 0, z: -60 });
      camera.setAttribute('position', { x: 0, y: 40, z: -100 });
      camera.setAttribute('orbit-controls', { maxDistance: 30 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      isOrbit = false;
      dGebText = true;
      w.style.display = "block";
      btob.style.display = "block";
      r.style.display = "none";
      orbitButt.style.display ="none";
      roadButt.style.display ="none";
      dH.style.display ="block";
    });
  }
});

/// springt zum MensaGeb
AFRAME.registerComponent("smoothf", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 106, y: 5, z: -128 });
      camera.setAttribute('position', { x: 0, y: 80, z: -55 });
      camera.setAttribute('orbit-controls', { maxDistance: 35 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      isOrbit = false;
      btob.style.display = "block";
      r.style.display = "none";
      MensaGebText = true;
      orbitButt.style.display ="none";
      roadButt.style.display ="none";
      mH.style.display ="block";
    });
  }
});

/// Collider
// var playerEl = document.querySelector('[camera]');
// playerEl.addEventListener('collide', function (e) {
//   console.log('Player has collided with body #' + e.detail.body.id);

//   e.detail.target.el;  // Original entity (playerEl).
//   e.detail.body.el;    // Other entity, which playerEl touched.
//   e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
//   e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
// });

AFRAME.registerComponent('foo', {
  init: function () {
    this.el.addEventListener('collide', function (e) {
      // console.log('Player has collided with ', e.detail.body.el);
      e.detail.target.el; // Original entity (playerEl).
      e.detail.body.el; // Other entity, which playerEl touched.
      e.detail.contact; // Stats about the collision (CANNON.ContactEquation).
      e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
    });
  }
})

///Wenn animation von camera fertig ist wird diese Funktion ausgeführt.
///Am ende der Animation wird die zweite Kamera erstmal geleich positioniert und
///Rotiert wie erste Kamera
///Dannach wird Camera2 aktiv gesetzt
///(Die Erste Kamera muss eigentlich nicht deactiviert werden, aber um
///Fehlermeldungen zu vermeiden oder Systemprobleme setzten wir sie inaktiv)

///////////////////////////////////////////////////////////////////////////////////////
// camera.addEventListener('animationcomplete', function () {
//  console.log("cam Switched");
//  secondCameraEl.setAttribute('position', { x: pos1.x, y: pos1.y, z: pos1.z });
//  secondCameraEl.setAttribute('rotation', { x: rot1.x, y: rot1.y, z: rot1.z });
//    secondCameraEl.setAttribute('camera', 'active', true);
//    camera.setAttribute('camera', 'active', false);
//  });
////////////////////////////////////////////////////////////////////////////////////////
///Funktioniert auch wäre nur ohne Animation
///Animation könnte mit Lerp erreicht werden, konnte es nur nichtmehr Testen
// const cTag = document.querySelector('#cGeb');
// const cameraTag = document.querySelector('#camera');
// const targetTag = document.querySelector('#target');

// cTag.addEventListener("click", function () {
//   cameraTag.setAttribute('position', {x:0, y:0, z:15});
// });


///Unter der Kamera ist ein Child Objekt (eine Sphere). Diese Sphere besitzt einen Sphere Collider
// Wenn der Collider mit einem Objekt zusammen kollidiert welches die 'portalcollider' Funktion besitzt, wird das Aktuelle GLTF
// Modell, hier 'World' genannt  und das Gltf Asset, hier secroomAsset genannt, erfasst.
// Die Source für das Model wird geändert.
AFRAME.registerComponent('portalcollider', {
  init: function () {
    this.el.addEventListener('hit', (e) => {
      loadCon.style.display = "block";
      loadFunction();
    })
    this.el.addEventListener('hitend', (e) => {
      ///Wenn das portal verlassen wird, wird alles was hier steht ausgeführt.
      // console.log(portalswitch);
      if (portalswitch) {

        var world = document.getElementById('world');
        var secroomAsset = document.querySelector('#cBuilding').getAttribute('src');
        world.setAttribute('gltf-model', secroomAsset);
        world.setAttribute('position', { x: 0, y: 0, z: 0 })
        portalswitch = false;
        light1.setAttribute('intensity', 0.2);
        light2.setAttribute('intensity', 0.2);
        lightMain1.setAttribute('intensity', 0);
        lightMain2.setAttribute('intensity', 0);
        orbitButt.style.display = "none";
        roadButt.style.display = "none";
      
      }
      else {
        var world = document.getElementById('world');
        var secroomAsset = document.querySelector('#campus').getAttribute('src');
        world.setAttribute('gltf-model', secroomAsset);
        world.setAttribute('position', { x: 0, y: 0, z: 0 })
        portalswitch = true;
        light1.setAttribute('intensity', 0);
        light2.setAttribute('intensity', 0);
        lightMain1.setAttribute('intensity', 0.4);
        lightMain2.setAttribute('intensity', 0.15);
        orbitButt.style.display = "block";
        roadButt.style.display = "block";

      }
    })
  }
});


/// mouse Hover Buildings
var HoverBoardC = document.querySelector('#alpha');

AFRAME.registerComponent("hover-listener1", {
  init: function () {
    console.log("isOrbit:" + isOrbit);
    this.el.addEventListener("mouseenter", function () {
      if (isOrbit) {
        console.log("Hallo:" + HoverBoardC)
        HoverBoardC.setAttribute('visible', true);
      }
      else {
        return;
      }
    });
    this.el.addEventListener("mouseleave", function () {
      // console.log(HoverBoardC)
      if (isOrbit) {
        HoverBoardC.setAttribute('visible', false);
      }
      else {
        HoverBoardC.setAttribute('visible', false);
      }
    });
  }
});


var HoverBoardB = document.querySelector('#alpha4')

AFRAME.registerComponent("hover-listener2", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      if (isOrbit) {
        console.log("Hallo:" + HoverBoardB)
        HoverBoardB.setAttribute('visible', true);
      }
      else {
        return;
      }
    });
    this.el.addEventListener("mouseleave", function () {
      // console.log(HoverBoardC)
      if (isOrbit) {
        HoverBoardB.setAttribute('visible', false);
      }
      else {
        HoverBoardB.setAttribute('visible', false);
      }
    });
  }
});

var HoverBoardK = document.querySelector('#alpha5')

AFRAME.registerComponent("hover-listener3", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      if (isOrbit) {
        HoverBoardK.setAttribute('visible', true);
      }
      else {
        return;
      }
    });
    this.el.addEventListener("mouseleave", function () {
      // console.log(HoverBoardC)
      if (isOrbit) {
        HoverBoardK.setAttribute('visible', false);
      }
      else {
        HoverBoardK.setAttribute('visible', false);
      }
    });
}
});

var HoverBoardA = document.querySelector('#alpha3')

AFRAME.registerComponent("hover-listener4", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      if (isOrbit) {
        HoverBoardA.setAttribute('visible', true);
      }
      else {
        return;
      }
    });
    this.el.addEventListener("mouseleave", function () {
      // console.log(HoverBoardC)
      if (isOrbit) {
        HoverBoardA.setAttribute('visible', false);
      }
      else {
        HoverBoardA.setAttribute('visible', false);
      }
    });
  }
});

var HoverBoardD = document.querySelector('#alpha2')

AFRAME.registerComponent("hover-listener5", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      if (isOrbit) {
        HoverBoardD.setAttribute('visible', true);
      }
      else {
        return;
      }
    });
    this.el.addEventListener("mouseleave", function () {
      // console.log(HoverBoardC)
      if (isOrbit) {
        HoverBoardD.setAttribute('visible', false);
      }
      else {
        HoverBoardD.setAttribute('visible', false);
      }
    });
  }
});

var HoverBoardM = document.querySelector('#alpha6')

AFRAME.registerComponent("hover-listener6", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      if (isOrbit) {
        HoverBoardM.setAttribute('visible', true);
      }
      else {
        return;
      }
    });
    this.el.addEventListener("mouseleave", function () {
      // console.log(HoverBoardC)
      if (isOrbit) {
        HoverBoardM.setAttribute('visible', false);
      }
      else {
        HoverBoardM.setAttribute('visible', false);
      }
    });
  }
});

///BackToOrbit:
var button = document.querySelector('.backToOrbit')
button.addEventListener('click', backToOrbitF);
function backToOrbitF(e) {
  camera.setAttribute('camera', 'active', true);
  secondCameraEl.setAttribute('camera', 'active', false);
  camera.setAttribute('position', { x: -130, y: 140, z: -5 });
  aniTarget.setAttribute('position', { x: 0, y: 0, z: 0 });
  camera.setAttribute('orbit-controls', { minDistance: 150 });
  camera.setAttribute('orbit-controls', { maxDistance: 200 });
  cGebText = false;
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  cbg.style.display = "none";
  w.style.display = "none";
  btob.style.display = "none";
  n.style.display = "none";
  b.style.display = "none";
  r.style.display = "block";
  u.style.display = "none";
  d.style.display = "none";
  bodenEGC.setAttribute('visible', false);
  boden1C.setAttribute('visible', false);
  boden2C.setAttribute('visible', false);
  isOrbit = true;
  rg = true;
  count = 0;
  headBG.style.display = "block";
  headSZ.style.display = "block";
  Logo01.style.display ="block";
  bck.style.display = "none";
  disAllAva();
  disAllHeads();
  avaKreis.style.display ="block";
  avaLeft.style.display ="block";
  orbitButt.style.display = "block";
  roadButt.style.display = "block";
  hoverAvai = true;
  navCon.style.display = "flex";
}

var bbutton = document.querySelector('.RoadButton')
bbutton.addEventListener('click', backToOrbitF);
function backToOrbitF(e) {
  camera.setAttribute('camera', 'active', true);
  secondCameraEl.setAttribute('camera', 'active', false);
  camera.setAttribute('position', { x: -130, y: 140, z: -5 });
  aniTarget.setAttribute('position', { x: 0, y: 0, z: 0 });
  camera.setAttribute('orbit-controls', { minDistance: 150 });
  camera.setAttribute('orbit-controls', { maxDistance: 200 });
  cGebText = false;
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  cbg.style.display = "none";
  w.style.display = "none";
  btob.style.display = "none";
  n.style.display = "none";
  r.style.display = "block";
  u.style.display = "none";
  d.style.display = "none";
  bodenEGC.setAttribute('visible', false);
  boden1C.setAttribute('visible', false);
  boden2C.setAttribute('visible', false);
  isOrbit = true;
  count = 0;
  headBG.style.display = "block";
  headSZ.style.display = "block";
  Logo01.style.display ="block";
  orbitButt.style.backgroundColor = "transparent";
  orbitButt.style.backgroundColor = "transparent";
  orbitIMG.style.filter = "invert(1)";
  roadButt.style.backgroundColor = "white";
  roadButt.style.backgroundColor = "white";
  roadIMG.style.filter = "invert(0)";
  bck.style.display = "none";
  disAllHeads();
  disAllAva();
  avaKreis.style.display ="block";
  avaLeft.style.display ="block";
  orbitButt.style.display = "block";
  roadButt.style.display = "block";
  hoverAvai = true;
  navCon.style.display = "flex";
}
///TopViewFunktion:
// var button = document.querySelector('.TopView')
// button.addEventListener('click', TopViewF);
// function TopViewF(e) {
//   camera.setAttribute('camera', 'active', true);
//   secondCameraEl.setAttribute('camera', 'active', false);
//   camera.setAttribute('position', { x: -0, y: 140, z: 0 });
//   aniTarget.setAttribute('position', { x: 0, y: 0, z: 0 });
//   camera.setAttribute('orbit-controls', { autoRotate: false });
//   camera.setAttribute('orbit-controls', { minDistance: 150 });
//   camera.setAttribute('orbit-controls', { maxDistance: 200 });
//   camera.setAttribure('rotation', { x: 90, y: -90, z: 0 });
// }

///Street-View-Funktion:
var button = document.querySelector('.Teleport')

button.addEventListener('click', rotateTo);

function rotateTo(e) {
  var position = e.target.dataset.position
  secondCameraEl.setAttribute('position', { x: -10, y: 1.6, z: 130 });
  secondCameraEl.setAttribute('rotation', { x: rot1.x, y: rot1.y, z: rot1.z });
  secondCameraEl.setAttribute('camera', 'active', true);
  r.style.display = "none";
  isOrbit = false;
  headBG.style.display = "none";
  headSZ.style.display = "none";
  w.style.display = "none";
  Logo01.style.display ="none";
  console.log("isOrbit"+isOrbit);
  orbitButt.style.backgroundColor = "white";
  orbitButt.style.backgroundColor = "white";
  orbitIMG.style.filter = "invert(0)";
  roadButt.style.backgroundColor = "transparent";
  roadButt.style.backgroundColor = "transparent";
  roadIMG.style.filter = "invert(1)";
  navCon.style.display = "none";

  // vrb.style.display = "block";
}

//////// NextButton///////
//////// NextButton///////
//////// NextButton///////

 n.addEventListener('click', nxtB);

  function nxtB() {
    if(count === 0){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: -40, y: 0, z: -60 });
      camera.setAttribute('position', { x: 0, y: 40, z: -100 });
      camera.setAttribute('orbit-controls', { maxDistance: 30 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count += 1;
      cGebText = false;
      cH.style.display ="none";
      dH.style.display ="block";
      disAllAva();
      avaLeft.style.display ="block";
      SprechBK.style.display ="block";
      txtD.style.display ="block";
    //  console.log("counter:"+count);
    }else if(count === 1){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 60, y: 0, z: -100 });
      camera.setAttribute('position', { x: 0, y: 50, z: 0 });
      camera.setAttribute('orbit-controls', { maxDistance: 100 });
      camera.setAttribute('orbit-controls', { minDistance: 100 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count += 1;
      dH.style.display ="none";
      aH.style.display ="block";
      disAllAva();
      avaDef.style.display ="block";
      SprechBK.style.display ="block";
      txtA.style.display ="block";
    }else if(count === 2){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 106, y: 5, z: -128 });
      camera.setAttribute('position', { x: 0, y: 80, z: -55 });
      camera.setAttribute('orbit-controls', { maxDistance: 35 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count += 1;
      aH.style.display ="none";
      mH.style.display ="block";
      disAllAva();
      avaEye.style.display ="block";
      SprechBK.style.display ="block";
      txtM.style.display ="block";
    }else if (count === 3){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 86, y: 0, z: -25 });
      camera.setAttribute('position', { x: 0, y: 100, z: -25 });
      camera.setAttribute('orbit-controls', { maxDistance: 30 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count += 1;
      mH.style.display ="none";
      kH.style.display ="block";
      disAllAva();

    }else if(count === 4){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 70, y: 15, z: 5 });
      camera.setAttribute('position', { x: 0, y: 48, z: 150 });
      camera.setAttribute('orbit-controls', { maxDistance: 57 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count += 1;
      kH.style.display ="none";
      bH.style.display ="block";
      disAllAva();
      avaZwink.style.display ="block";
      SprechBG.style.display ="block";
      txtB.style.display ="block";
    }else if (count === 5){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: -35, y: 0, z: 130 });
      camera.setAttribute('position', { x: 15, y: 18, z: 150 });
      camera.setAttribute('orbit-controls', { maxDistance: 40 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count -= 5;
      bH.style.display ="none";
      cH.style.display ="block";
      disAllAva();
      avaDef.style.display ="block";
      SprechBK.style.display ="block";
      txtC.style.display ="block";
    }
 };

  bck.addEventListener('click', bckB);

  function bckB() {
    if(count === 1){
      aniTarget.setAttribute('position', { x: -35, y: 0, z: 130 });
      camera.setAttribute('position', { x: 15, y: 18, z: 150 });
      camera.setAttribute('orbit-controls', { maxDistance: 40 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count -= 1;
      cH.style.display ="block";
      dH.style.display ="none";
      disAllAva();
      avaDef.style.display ="block";
      SprechBK.style.display ="block";
      txtC.style.display ="block";
      // console.log("cout"+count);
    }else if(count === 2){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: -40, y: 0, z: -60 });
      camera.setAttribute('position', { x: 0, y: 40, z: -100 });
      camera.setAttribute('orbit-controls', { maxDistance: 30 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count -= 1;
      dH.style.display ="block";
      aH.style.display ="none";
      disAllAva();
      avaLeft.style.display ="block";
      SprechBK.style.display ="block";
      txtD.style.display ="block";
    }else if (count === 3){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 60, y: 0, z: -100 });
      camera.setAttribute('position', { x: 0, y: 50, z: 0 });
      camera.setAttribute('orbit-controls', { maxDistance: 100 });
      camera.setAttribute('orbit-controls', { minDistance: 100 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count -= 1;
      aH.style.display ="block";
      mH.style.display ="none";
      disAllAva();
      avaDef.style.display ="block";
      SprechBK.style.display ="block";
      txtA.style.display ="block";
    }else if (count === 4){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 106, y: 5, z: -128 });
      camera.setAttribute('position', { x: 0, y: 80, z: -55 });
      camera.setAttribute('orbit-controls', { maxDistance: 35 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count -= 1;
      mH.style.display ="block";
      kH.style.display ="none";
      disAllAva();
      avaEye.style.display ="block";
      SprechBK.style.display ="block";
      txtM.style.display ="block";
    }else if (count === 5){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 86, y: 0, z: -25 });
      camera.setAttribute('position', { x: 0, y: 100, z: -25 });
      camera.setAttribute('orbit-controls', { maxDistance: 30 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count -= 1;
      kH.style.display ="block";
      bH.style.display ="none";
      disAllAva();

    }else if (count === 0){
      camera.emit('aniamtetoPos');
      aniTarget.setAttribute('position', { x: 70, y: 15, z: 5 });
      camera.setAttribute('position', { x: 0, y: 48, z: 150 });
      camera.setAttribute('orbit-controls', { maxDistance: 57 });
      camera.setAttribute('orbit-controls', { minDistance: 10 });
      camera.setAttribute('orbit-controls', { autoRotate: true });
      camera.setAttribute('orbit-controls', { enableDamping: false });
      camera.setAttribute('orbit-controls', { enabled: true });
      count += 5;
      cGebText = false;
      bH.style.display ="block";
      cH.style.display ="none";
      disAllAva();
      avaDef.style.display ="block";
      SprechBG.style.display ="block";
      txtB.style.display ="block";
    }
 };


 r.addEventListener('click', rGangB);
 function rGangB() {
   camera.emit('aniamtetoPos');
   aniTarget.setAttribute('position', { x: -35, y: 0, z: 130 });
   camera.setAttribute('position', { x: 15, y: 18, z: 150 });
   camera.setAttribute('orbit-controls', { maxDistance: 40 });
   camera.setAttribute('orbit-controls', { minDistance: 10 });
   camera.setAttribute('orbit-controls', { autoRotate: true });
   camera.setAttribute('orbit-controls', { enableDamping: false });
   camera.setAttribute('orbit-controls', { enabled: true });
   isOrbit = false;
   bck.style.display = "block";
   n.style.display = "block";
   btob.style.display = "block";
   r.style.display = "none";
   w.style.display = "block";
   orbitButt.style.display ="none";
   roadButt.style.display ="none";
   headBG.style.display = "none";
   headSZ.style.display = "none";
   Logo01.style.display ="none";
   cH.style.display ="block";
   cGebText = true;
   rg = true;
   disAllAva();
  avaDef.style.display ="block";
  SprechBK.style.display ="block";
  txtC.style.display ="block";
  hoverAvai = false;
 };

//////////////Button Wireframe////////////////////////////////////////
//////////////Button Wireframe////////////////////////////////////////
//////////////Button Wireframe////////////////////////////////////////


var button = document.querySelector('#Wireframe');
var wireframe = false;


AFRAME.registerComponent('change-material-on-click', {
  dependencies: ['material'],
  schema: {
    target: { type: 'selector' }
  },

  init: function () {
    var targetEl = document.querySelector('#world');
    button.addEventListener('click', function () {
      // console.log("isOrbit:"+isOrbit);
      var mesh = targetEl.getObject3D('mesh');
      if (!wireframe) {
        mesh.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material.wireframe = true;
          }
        });
        wireframe = true;
        textToggle();
        disAllHeads();
        btob.style.display = "none";
        camera.setAttribute('orbit-controls', { autoRotate: false });
        changeText();
        disLogo();
        
        // console.log("cGeb:"+cGebText);
        // console.log("wireframe:"+wireframe);
      }
      else {
        mesh.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material.wireframe = false;
          }
        });
        wireframe = false;
        textToggle();
        changeText();
        disLogo();
        btob.style.display = "block";
        camera.setAttribute('orbit-controls', { autoRotate: true });
        // console.log("wireframe:"+wireframe);
      }
    });
  }
});

//////////////Button Wireframe////////////////////////////////////////
//////////////Button Wireframe////////////////////////////////////////
//////////////Button Wireframe////////////////////////////////////////

function textToggle() {

if(wireframe&cGebText){
  x.style.display = "block";
  cbg.style.display = "block";
  u.style.display = "block";
  d.style.display = "block";
  n.style.display = "none";
  bck.style.display = "none";
  disLogo();
  bodenEGC.setAttribute('visible', true);
  egC = true;
}else if(!wireframe&&cGebText){
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  cbg.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
  cH.style.display = "block";
  bodenEGC.setAttribute('visible', false);
  boden1C.setAttribute('visible', false);
  boden2C.setAttribute('visible', false);
  egC = false;
}else if(!wireframe&&dGebText){
  x.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
  dH.style.display = "block";
}else if(!wireframe&&aGebText){
  x.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
  cH.style.display = "block";
}else if(!wireframe&&kGebText){
  x.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
  kH.style.display = "block";
}else if(!wireframe&&MensaGebText){
  x.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
  mH.style.display = "block";
}else if(!wireframe&&bGebText){
  x.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
  bH.style.display = "block";
}else if(wireframe){
  x.style.display = "none";
  n.style.display = "none";
  bck.style.display = "none";
  disLogo();
}
}

/////////////////////////upButton//////////////////////
up.addEventListener('click', upButton)
function upButton(){
  if(egC && !c1){
    x.style.display = "none";
    bodenEGC.setAttribute('visible', false);
    y.style.display = "block";
    boden1C.setAttribute('visible', true);
    c1 = true;
    egC = false;
  }else if(c1){
    // console.log("c1"+c1);
     x.style.display = "none";
    bodenEGC.setAttribute('visible', false);
     y.style.display = "none";
    boden1C.setAttribute('visible', false);
    z.style.display = "block";
    boden2C.setAttribute('visible', true);
    c2 = true;
    c1 = false;
    // console.log("c2"+c2);
  }
/////////////////////////downButton//////////////////////
}
down.addEventListener('click', downButton)
function downButton(){
  if(c1 && !egC){
    x.style.display = "block";
    bodenEGC.setAttribute('visible', true);
     y.style.display = "none";
    boden1C.setAttribute('visible', false);
    z.style.display = "none";
    boden2C.setAttribute('visible', false);
    c1 = false;
    egC = true;
  }else if(c2){
     x.style.display = "none";
    bodenEGC.setAttribute('visible', false);
     y.style.display = "block";
    boden1C.setAttribute('visible', true);
    z.style.display = "none";
    boden2C.setAttribute('visible', false);
    c1 = true;
    egC = false;
    c2 = false;
  }
  // else if(egC){
    
  // }
}

//WireframeHoverAktion // EG

//Bib
var bib = document.querySelector('.bib');
var bibWire = document.querySelector('#BibWireFrameModus');
bib.onmouseover = logMouseOverBib;
bib.onmouseout = logMouseOutBib;
function logMouseOverBib() {
  bibWire.setAttribute('visible', true);
}
function logMouseOutBib() {
  bibWire.setAttribute('visible', false);
}
//AudioMin
var audimin = document.querySelector('.Audiomin');
var audiminWire = document.querySelector('#AudioMinWireFrameModus');
audimin.onmouseover = logMouseOverAudio;
audimin.onmouseout = logMouseOutAudio;
function logMouseOverAudio() {
  audiminWire.setAttribute('visible', true);
}
function logMouseOutAudio() {
  audiminWire.setAttribute('visible', false);
}
//VideoStudio
var vStudio = document.querySelector('.videoS');
var vStudioWire = document.querySelector('#StudioWireFrameModus');
vStudio.onmouseover = logMouseOverStudio;
vStudio.onmouseout = logMouseOutStudio;
function logMouseOverStudio() {
  vStudioWire.setAttribute('visible', true);
}
function logMouseOutStudio() {
  vStudioWire.setAttribute('visible', false);
}
//////////////////////////////////////////////////// E1

var ausL = document.querySelector('.ausL');
var ausLWire = document.querySelector('#AusleiheWireFrameModus');
ausL.onmouseover = logMouseOveraus;
ausL.onmouseout = logMouseOutaus;
function logMouseOveraus() {
  ausLWire.setAttribute('visible', true);
}
function logMouseOutaus() {
  ausLWire.setAttribute('visible', false);
}
//Fotostudio
var fotoS = document.querySelector('.fotoS');
var fotoSWire = document.querySelector('#FotoStudioWireFrameModus');
fotoS.onmouseover = logMouseOverfoto;
fotoS.onmouseout = logMouseOutfoto;
function logMouseOverfoto() {
  fotoSWire.setAttribute('visible', true);
}
function logMouseOutfoto() {
  fotoSWire.setAttribute('visible', false);
}
//Regie
var regieR = document.querySelector('.regieR');
var regieRWire = document.querySelector('#RegieRaumWireFrameModus');
regieR.onmouseover = logMouseOverregie;
regieR.onmouseout = logMouseOutregie;
function logMouseOverregie() {
  regieRWire.setAttribute('visible', true);
}
function logMouseOutregie() {
  regieRWire.setAttribute('visible', false);
}

var semi = document.querySelector('.semi1');
var semiWire = document.querySelector('#SeminarRaumWireFrameModus');
var semiWire1 = document.querySelector('#SeminarRaumWireFrameModus1');
var semiWire2 = document.querySelector('#SeminarRaumWireFrameModus2');
var semiWire3 = document.querySelector('#SeminarRaumWireFrameModus3');
var semiWire4 = document.querySelector('#SeminarRaumWireFrameModus4');
var semiWire5 = document.querySelector('#SeminarRaumWireFrameModus5');
semi.onmouseover = logMouseOversemi;
semi.onmouseout = logMouseOutsemi;
function logMouseOversemi() {
  semiWire.setAttribute('visible', true);
  semiWire1.setAttribute('visible', true);
  semiWire2.setAttribute('visible', true);
  semiWire3.setAttribute('visible', true);
  semiWire4.setAttribute('visible', true);
  semiWire5.setAttribute('visible', true);
}
function logMouseOutsemi() {
  semiWire.setAttribute('visible', false);
  semiWire1.setAttribute('visible', false);
  semiWire2.setAttribute('visible', false);
  semiWire3.setAttribute('visible', false);
  semiWire4.setAttribute('visible', false);
  semiWire5.setAttribute('visible', false);
}

//////////////////////////////////////////////////// E2

var post = document.querySelector('.post');
var postWire = document.querySelector('#PostproduktionWireFrameModus');
post.onmouseover = logMouseOverpost;
post.onmouseout = logMouseOutpost;
function logMouseOverpost() {
  postWire.setAttribute('visible', true);
}
function logMouseOutpost() {
  postWire.setAttribute('visible', false);
}
//pool
var pool = document.querySelector('.pool');
var poolWire = document.querySelector('#PoolRaumWireFrameModus');
var poolWire1 = document.querySelector('#PoolRaumWireFrameModus1');
var poolWire2 = document.querySelector('#PoolRaumWireFrameModus2');
var poolWire3 = document.querySelector('#PoolRaumWireFrameModus3');
pool.onmouseover = logMouseOverpool;
pool.onmouseout = logMouseOutpool;
function logMouseOverpool() {
  poolWire.setAttribute('visible', true);
  poolWire1.setAttribute('visible', true);
  poolWire2.setAttribute('visible', true);
  poolWire3.setAttribute('visible', true);
}
function logMouseOutpool() {
  poolWire.setAttribute('visible', false);
  poolWire1.setAttribute('visible', false);
  poolWire2.setAttribute('visible', false);
  poolWire3.setAttribute('visible', false);
}
//dienstzimmer
var dienst = document.querySelector('.dienst');
var dienstWire = document.querySelector('#DienstzimmerE2WireFrameModus');
var dienstWire1 = document.querySelector('#DienstzimmerE2WireFrameModus1');
var dienstWire2 = document.querySelector('#DienstzimmerE2WireFrameModus2');
var dienstWire3 = document.querySelector('#DienstzimmerE2WireFrameModus3');
var dienstWire4 = document.querySelector('#DienstzimmerE2WireFrameModus4');
var dienstWire5 = document.querySelector('#DienstzimmerE2WireFrameModus5');
var dienstWire6 = document.querySelector('#DienstzimmerE2WireFrameModus6');
var dienstWire7 = document.querySelector('#DienstzimmerE2WireFrameModus7');
var dienstWire8 = document.querySelector('#DienstzimmerE2WireFrameModus8');
var dienstWire9 = document.querySelector('#DienstzimmerE2WireFrameModus9');
var dienstWire10 = document.querySelector('#DienstzimmerE2WireFrameModus10');
var dienstWire11 = document.querySelector('#DienstzimmerE2WireFrameModus11');
var dienstWire12 = document.querySelector('#DienstzimmerE2WireFrameModus12');
var dienstWire13 = document.querySelector('#DienstzimmerE2WireFrameModus13');
var dienstWire14 = document.querySelector('#DienstzimmerE2WireFrameModus14');
var dienstWire15 = document.querySelector('#DienstzimmerE2WireFrameModus15');
var dienstWire16 = document.querySelector('#DienstzimmerE2WireFrameModus16');
dienst.onmouseover = logMouseOverdienst;
dienst.onmouseout = logMouseOutdienst;
function logMouseOverdienst() {
  dienstWire.setAttribute('visible', true);
  dienstWire1.setAttribute('visible', true);
  dienstWire2.setAttribute('visible', true);
  dienstWire3.setAttribute('visible', true);
  dienstWire4.setAttribute('visible', true);
  dienstWire5.setAttribute('visible', true);
  dienstWire6.setAttribute('visible', true);
  dienstWire7.setAttribute('visible', true);
  dienstWire8.setAttribute('visible', true);
  dienstWire9.setAttribute('visible', true);
  dienstWire10.setAttribute('visible', true);
  dienstWire11.setAttribute('visible', true);
  dienstWire12.setAttribute('visible', true);
  dienstWire13.setAttribute('visible', true);
  dienstWire14.setAttribute('visible', true);
  dienstWire15.setAttribute('visible', true);
  dienstWire16.setAttribute('visible', true);
}
function logMouseOutdienst() {
  dienstWire.setAttribute('visible', false);
  dienstWire1.setAttribute('visible', false);
  dienstWire2.setAttribute('visible', false);
  dienstWire3.setAttribute('visible', false);
  dienstWire4.setAttribute('visible', false);
  dienstWire5.setAttribute('visible', false);
  dienstWire6.setAttribute('visible', false);
  dienstWire7.setAttribute('visible', false);
  dienstWire8.setAttribute('visible', false);
  dienstWire9.setAttribute('visible', false);
  dienstWire10.setAttribute('visible', false);
  dienstWire11.setAttribute('visible', false);
  dienstWire12.setAttribute('visible', false);
  dienstWire13.setAttribute('visible', false);
  dienstWire14.setAttribute('visible', false);
  dienstWire15.setAttribute('visible', false);
  dienstWire16.setAttribute('visible', false);
}
var semi2 = document.querySelector('.semi2');
var semiWireSec = document.querySelector('#SeminarRaumE2WireFrameModus');
var semiWireSec1 = document.querySelector('#SeminarRaumE2WireFrameModus1');
var semiWireSec2 = document.querySelector('#SeminarRaumE2WireFrameModus2');

semi2.onmouseover = logMouseOversemi2;
semi2.onmouseout = logMouseOutsemi2;
function logMouseOversemi2() {
  semiWireSec.setAttribute('visible', true);
  semiWireSec1.setAttribute('visible', true);
  semiWireSec2.setAttribute('visible', true);

}
function logMouseOutsemi2() {
  semiWireSec.setAttribute('visible', false);
  semiWireSec1.setAttribute('visible', false);
  semiWireSec2.setAttribute('visible', false);
}

// window.onload = function () {
//   console.log('Dokument geladen');
//   function textToggleSprech();
// }

function textToggleSprech1(){
  if(isOrbit){
  txt1.style.display = "none";
  txt2.style.display = "block";
  avaLeft.style.display = "block";
  avaLach.style.display = "none";
  SprechBK.style.display = "block";
  r.style.display = "block";
  }else if(!rg){
    disAllAva();
  }
  }
function textToggleSprech2(){
  if(isOrbit){
    txt2.style.display = "none";
    txt3.style.display = "block";
    avaDef.style.display = "block";
    avaLeft.style.display = "none";
    SprechBK.style.display = "block";
    orbitButt.style.display = "block";
    roadButt.style.display = "block";
    }else if(!rg){
      disAllAva();
    }
  }
function textToggleSprech3(){
  if(isOrbit){
      txt3.style.display = "none";
      txt4.style.display = "block";
      avaLach.style.display = "block";
      avaDef.style.display = "none";
      SprechBK.style.display = "block";
      }else if(!rg){
        disAllAva();
      }
    }
function textToggleSprech4(){
  if(isOrbit){
        txt4.style.display = "none";
        SprechBK.style.display = "none";
        avaLach.style.display = "none";
        avaLeft.style.display = "block";
        }else if(!rg){
          disAllAva();
        }
      }

function disAllAva(){
  avaLach.style.display = "none";
  avaLeft.style.display = "none";
  avaZwink.style.display = "none";
  avaLove.style.display = "none";
  avaEye.style.display = "none";
  avaDef.style.display = "none";
  avaKreis.style.display = "none";
  SprechBK.style.display = "none";
  SprechBG.style.display = "none";
  txt1.style.display = "none";
  txt2.style.display = "none";
  txt3.style.display = "none";
  txt4.style.display = "none";
  txtC.style.display = "none";
  txtA.style.display = "none";
  txtB.style.display = "none";
  txtD.style.display = "none";
  txtM.style.display = "none";
}

function disAllHeads(){
  cH.style.display = "none";
  dH.style.display = "none";
  aH.style.display = "none";
  mH.style.display = "none";
  kH.style.display = "none";
  bH.style.display = "none";
  cH.style.display = "none";
}

function disLogo(){
  if(wireframe){
  headBG.style.display = "none";
  headSZ.style.display = "none";
  Logo01.style.display = "none";
  }else{
    headBG.style.display = "block";
    headSZ.style.display = "block";
    Logo01.style.display = "block";
  }
}


function changeText() {
  if(wireframe){
  document.getElementById("Wireframe").innerHTML = "ZURÜCK";
}else{
  document.getElementById("Wireframe").innerHTML = "ERKUNDEN";
}
}

var count2 = 0;

var avaClick = document.querySelector('#avatare');

avaClick.addEventListener('click', allInfoFunction);

function allInfoFunction (){
  if(count2===0&&seconds>24){
  infoFunction();
  }else if(count2===1){
  infoFunction2();
  }else if(count2===2){
  infoFunction3();
  }
}

function infoFunction(){
  disAllAva();
  txtI3.style.display = "none";
  avaKreis.style.display = "block";
  avaDef.style.display ="block";
  SprechBG.style.display ="block";
  txtI1.style.display = "block";
  count2 +=1;
  hoverAvai = false;
}

function infoFunction2(){
  txtI1.style.display = "none";
  txtI2.style.display = "block";
  avaDef.style.display = "none";
  avaZwink.style.display = "block";
  count2 +=1;
  hoverAvai = false;
}

function infoFunction3(){
  txtI2.style.display = "none";
  SprechBG.style.display = "none";
  avaLeft.style.display = "block";
  avaZwink.style.display = "none";
  hoverAvai = true;
  count2 -=2;
}

avaClick.addEventListener('mouseenter',avaHover);
function avaHover(){
  if(seconds>24&&hoverAvai){
    disAllAva();
    avaZwink.style.display = "block";
    avaKreis.style.display = "block";
    txtI3.style.display = "block";
    SprechBK.style.display = "block";
  }
}
avaClick.addEventListener('mouseleave',avaHover2);
function avaHover2(){
  if(seconds>24&&hoverAvai){
    avaLeft.style.display = "block";
    avaZwink.style.display = "none";
    txtI3.style.display = "none";
    SprechBK.style.display = "block";
    SprechBK.style.display = "none";
  }
}

var seconds = 0;

function incrementSeconds() {
    seconds += 1;
}
var cancel = setInterval(incrementSeconds, 1000);


var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loaderContainer").style.display = "none";
}




// var sectBool1 = true;
// var sectBool2 = false;
// var sectBool3 = false;
// var sect1 = document.querySelector('#sec1');
// var sect2 = document.querySelector('#sec2');
// var sect3 = document.querySelector('#sec3');

// function scroller(){
//   window.scrollTo(0, 5500);
// }