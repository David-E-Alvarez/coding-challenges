// Build a Record Collection

// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// The updateRecords function takes 4 arguments represented by the following function parameters:

//     records - an object containing several individual albums
//     id - a number representing a specific album in the records object
//     prop - a string representing the name of the album’s property to update
//     value - a string containing the information used to update the album’s property

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     Your function must always return the entire records object.
//     [x]If value is an empty string, delete the given prop property from the album.
//     [x]If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
//     [x]If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
//     [x]If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

// Note: A copy of the recordCollection object is used for the tests. Your function should not directly refer to the recordCollection object, only the function parameter.
// Tests:

//     Passed: 1. You should have a updateRecords function.
//     Passed: 2. After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
//     Passed: 3. After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
//     Passed: 4. After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
//     Passed: 5. After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
//     Passed: 6. After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
//     Passed: 7. After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
//     Passed: 8. After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value){
  if(value == "" || value.length == 0){
    delete records[id][prop];
  }
  if(prop != "tracks" && (value != "" || value.length != 0)){
    records[id][prop] = value;
  }
  if(prop == "tracks" && (value != "" || value.length != 0) && !Object.hasOwn(recordCollection[id], prop)){
    let trackArray = [];
    records[id][prop] = trackArray;
    records[id][prop].push(value);
  }
  if(prop == "tracks" && (value != "" || value.length != 0) && Object.hasOwn(recordCollection[id], prop)){
    records[id][prop].push(value);
  }
  return records;
}















// let myPretendRecordCollection = {
//     1234: {
//         artist: "",
//         tracks: ["bad ass song"]
//     }
// }
// function pretendFunc(records, id, prop, value){
//     if(value.length == 0 || value == ""){
//         delete myPretendRecordCollection["1234"].artist;
//     }
//     console.log("records: ", records + "\n");
//     console.log("id: ", id + "\n");
//     console.log("prop: ", prop + "\n");
//     console.log("value: ", value + "\n");
//     records["1234"].tracks.push(value);
//     return records;
// }

// console.log("---->", pretendFunc(myPretendRecordCollection, 2548, "artist", "another bad ass song"));