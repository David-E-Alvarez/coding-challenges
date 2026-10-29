// You are a software developer tasked with creating a ledger application to manage IT
//  hardware devices provisioned by your company's Service Desk. The ledger is an object whose keys 
//  are asset tags and whose values are objects:

// const ledger = {
//   "1": {
//     type: "Laptop",
//     status: "CheckedIn",
//     borrower: {
//       name: "",
//       email: ""
//     },
//     dueDate: ""
//   }
// };

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     1.)You should model the ledger as an object where each device is keyed by its asset tag and has type, status, 
//     borrower (with name and email), and dueDate properties.

//     2.) You should implement a checkoutDevice(ledger, assetTag, borrower) function that takes a ledger object
//      and clones it with serializeLedger and loadLedger, without mutating the original. On the clone, it should set 
//      the borrower object's name and email, update the status to "CheckedOut", and return an object of the form 
//      { ledger: updatedLedger, message: confirmationString }, where the message includes the asset tag and the borrower 
//      object's name.
//         -If assetTag does not exist in the ledger, the function should return the ledger unchanged along with a message 
//         that includes the asset tag and explains that it was not found.
//         -If the device is already "CheckedOut", the function should return the ledger unchanged and leave the current
//          borrower in place, along with a message that includes the asset tag and explains that the device is already checked out.

//     3.)You should implement a checkinDevice(ledger, assetTag) function that takes a ledger object and clones it with 
//     serializeLedger and loadLedger, without mutating the original. On the clone, it should clear the borrower object's 
//     name and email, reset dueDate to "", update the status to "CheckedIn", and return an object of the form 
//     { ledger: updatedLedger, message: confirmationString }, where the message includes the asset tag.
//         -If assetTag does not exist in the ledger, the function should return the ledger unchanged along with a
//          message that includes the asset tag and explains that it was not found.

//     4.) You should implement a listOverdueDevices(ledger, today) function that takes a ledger object and returns an 
//     array of the device objects that are overdue, sorted by dueDate in ascending order. A device is overdue when 
//     its status is "CheckedOut" and its dueDate is strictly before today. Both today and dueDate are strings in
//      month/day/year order, and the month and day may or may not be zero-padded (for example, "9/5/2025" and 
//         "09/05/2025" are both valid).

//     5.) You should not use the JavaScript Date object anywhere in your code.

//     6.) You should implement a serializeLedger(ledger) function that converts the ledger object into a JSON string, 
//     and a loadLedger(json) function that converts a JSON string back into a JavaScript object.

// Tests:

//     Waiting: 1. You should create a function named checkoutDevice.
//     Waiting: 2. You should create a function named checkinDevice.
//     Waiting: 3. You should create a function named listOverdueDevices.
//     Waiting: 4. You should create a function named serializeLedger.
//     Waiting: 5. You should create a function named loadLedger.
//     Waiting: 6. Your checkoutDevice function should not mutate the original ledger.
//     Waiting: 7. Your checkoutDevice function should use serializeLedger and loadLedger to clone the ledger.
//     Waiting: 8. Your checkoutDevice function should set the borrower's name and email, and set status to "CheckedOut".
//     Waiting: 9. Your checkoutDevice function should return a confirmation message that includes the asset tag and the 
//     borrower's name.
//     Waiting: 10. Your checkoutDevice function should preserve unrelated devices and unchanged fields in the returned ledger.
//     Waiting: 11. Your checkoutDevice function should return the ledger unchanged and a message that includes 
//     the asset tag when the asset tag is not found.
//     Waiting: 12. Your checkoutDevice function should return the ledger unchanged, leave the current borrower in place, 
//     and return a message that includes the asset tag when the device is already checked out.
//     Waiting: 13. Your checkinDevice function should not mutate the original ledger.
//     Waiting: 14. Your checkinDevice function should use serializeLedger and loadLedger to clone the ledger.
//     Waiting: 15. Your checkinDevice function should clear the borrower's name and email, reset dueDate to "", 
//     and set status to "CheckedIn".
//     Waiting: 16. Your checkinDevice function should return a confirmation message that includes the asset tag.
//     Waiting: 17. Your checkinDevice function should preserve unrelated devices and unchanged fields in the returned ledger.
//     Waiting: 18. Your checkinDevice function should return the ledger unchanged and a message that includes the
//      asset tag when the asset tag is not found.
//     Waiting: 19. Your listOverdueDevices function should return an array.
//     Waiting: 20. Your listOverdueDevices function should return only overdue devices with a status of "CheckedOut".
//     Waiting: 21. Your listOverdueDevices function should return the overdue devices sorted by dueDate in ascending order.
//     Waiting: 22. Your listOverdueDevices function should sort correctly even when the month or day is not zero-padded.
//     Waiting: 23. You should not use the JavaScript Date object anywhere in your code.
//     Waiting: 24. Your serializeLedger function should return a JSON string that represents the ledger passed to it.
//     Waiting: 25. Your loadLedger function should return the JavaScript object that the JSON string represents.