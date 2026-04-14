//Write your code here



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
     // ticket price 

  const logTicketPrice=(attendee)=>{
    return attendee.ticketPrice;

  }

// updating ticket type 
  const updateTicketType =(attendee,newtickettype)=>{

    return attendee.ticketType='supervip';

  }
 
// updating ticket price in an meeting attendee
  const updateTicketPrice=(attendee,newticketprice)=>{

    return attendee.ticketPrice= 500;

  } 


  // removeEventProperty  ( unfished)
  const removeEventProperty=(attendee,event)=>{
     
    delete attendee.evenT;
    return attendee

         
  }


    const addCheckedInProperty=(attendee,checkedIn )=>{

     return attendee.checkedIn ='true'

    }
     
      console.log(addCheckedInProperty(attendee)) 

