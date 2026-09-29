// You should implement a function named processManifest with a manifest parameter. The function should log:

// If the manifest object is valid, Validation success: ${containerId} and then
//  the manifest's weight in kilograms, in the form Total weight: ${weight} kg.

//  Use normalizeUnits() for this conversion.

// If the manifest object is not valid, Validation error: ${containerId}
//  and then the object returned by calling validateManifest() with the manifest object.
// Note: Each of these two cases should have two console.log() calls.

let validObj = { 
    containerId: 1, 
    destination: "Santa Cruz", 
    weight: 304, 
    unit: "kg", 
    hazmat: false 
}
let someObj = { containerId: 1, destination: "Santa Cruz", weight: 1.5, unit: "kg", hazmat: false }

let emptyObj = {};

let obj3 = { 
    containerId: null,
    destination: "Santa Cruz", 
    weight: 304, 
    unit: "kg", 
    hazmat: false 
}

let obj4 = { containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" }

let obj5 = { containerId: -2 }

let obj6 = {containerId: 3.50}

let obj7 = {destination: "    "}

let obj8 = { weight: NaN }

let testObj = {
    containerId: 5,
    weight: -5,
    unit: "kg",
    hazmat: false
}





function normalizeUnits(manifest){
    let manifestCopy = {...manifest};
    if(manifest.unit == "lb"){
        manifestCopy.unit = "kg";
        manifestCopy.weight = manifest.weight * 0.45;
    }
    return manifestCopy;
}

function validateManifest(manifest){
    let manifestCopy = {...manifest};
    let objectToReturnIfMissingKeysOrInvalidValues = {};
    //logic to see if object has keys
    if(Object.hasOwn(manifestCopy, "containerId")){
        if((manifestCopy.containerId <= 0 || manifestCopy.containerId == null || !Number.isInteger(manifestCopy.containerId))){
            //invalid containerId
            objectToReturnIfMissingKeysOrInvalidValues.containerId = "Invalid";
        }
    }else{
        objectToReturnIfMissingKeysOrInvalidValues.containerId = "Missing";
    }

    if(Object.hasOwn(manifestCopy, "destination")){
        if(typeof manifestCopy.destination != "string" || manifestCopy.destination.trim().length == 0){
            objectToReturnIfMissingKeysOrInvalidValues.destination = "Invalid";
        }
        
    }else{
        objectToReturnIfMissingKeysOrInvalidValues.destination = "Missing";
    }    

    if(Object.hasOwn(manifestCopy, "weight")){
        if(manifestCopy.weight <= 0 || Number.isNaN(manifestCopy.weight)){
            objectToReturnIfMissingKeysOrInvalidValues.weight = "Invalid";
        }
    }else{
        objectToReturnIfMissingKeysOrInvalidValues.weight = "Missing";
    }

    if(Object.hasOwn(manifestCopy, "unit")){
         if(manifestCopy.unit !== "kg" && manifestCopy.unit !== "lb"){
            objectToReturnIfMissingKeysOrInvalidValues.unit = "Invalid";
        }
        
    }else{
        objectToReturnIfMissingKeysOrInvalidValues.unit = "Missing";
    }

    if(Object.hasOwn(manifestCopy, "hazmat")){
        if(typeof manifestCopy.hazmat !== "boolean"){
            objectToReturnIfMissingKeysOrInvalidValues.hazmat = "Invalid";
        }
    }else{
        objectToReturnIfMissingKeysOrInvalidValues.hazmat = "Missing";
    }
    
    return objectToReturnIfMissingKeysOrInvalidValues;
    
}

function processManifest(manifest){
    // console.log("manifest: ", manifest);
    // console.log("validateManifest(manifest): ", validateManifest(manifest));
    // console.log("Object.values(manifest)", Object.values(manifest));
    // console.log("manifest.containerId: ", manifest.containerId);
    let validateManifestArray = Object.values(validateManifest(manifest));
    //console.log("validateManifestArray: ", validateManifestArray);
    let manifestArray = Object.values(manifest)
    //console.log("manifestArray: ",manifestArray);
    if(validateManifestArray.length === 0){
        //no missing or invalid object values
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
    }else{
        //missing or invalid object values
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validateManifest(manifest));
    }
}

// console.log(normalizeUnits(validObj));
//validateManifest({ containerId: -88, destination: "Soledad", weight: NaN });
processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false });
