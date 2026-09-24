let anObj = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}

let anObjCopy = Object(anObj);
console.log("anObjCopy: ", anObjCopy);

function normalizeUnits(manifest){
   console.log("manifest.unit: ", manifest.unit);
  
}

normalizeUnits(anObj);