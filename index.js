
     // Task 1 & 2: Create attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Task 3
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Task 4
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Task 5
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

// Task 6
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Task 7
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Task 8
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};




