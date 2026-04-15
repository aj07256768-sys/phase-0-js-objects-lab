//Write your code here

  // object attendee

 const attendee={ 

    attendeeId:"T001",
    namee:"Alice Smith",
    evenT: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.0
 }


  // logAttendeeName

function logAttendeeName(attendee){

 return attendee.namee;


 }
 logAttendeeName()
     // ticket price 

  const logTicketPrice=(attendee)=>{
    return attendee.ticketPrice;

  }
  logTicketPrice()

// updating ticket type 
  const updateTicketType =(attendee,newtickettype)=>{

    return attendee.ticketType='supervip';

  }
  updateTicketType()
  
 
// updating ticket price in an meeting attendee
  const updateTicketPrice=(attendee,newticketprice)=>{

    return attendee.ticketPrice= 500;

  } 
  updateTicketPrice()


  // removeEventProperty  ( unfished)
  const removeEventProperty=(attendee,event)=>{
     
    delete attendee.evenT;
    return attendee

         
  }
  removeEventProperty()


    const addCheckedInProperty=(attendee,checkedIn )=>{

     return attendee.checkedIn ='true'

    }
     addCheckedInProperty()


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




