const restaurant = {
    name:'ABC',
    guestCapacity:75,
    guestCount:0,
    checkAvailability:function(partySize){
        const seatSize = this.guestCapacity-this.guestCount
        return partySize<=seatSize;
    },
    seatParty :function(partySize){
        this.guestCount+=partySize
    },
    removePartySeats :function(partySize){
        this.guestCount-=partySize
    }
}
restaurant.seatParty(72);
console.log("check "+restaurant.checkAvailability(4));
restaurant.removePartySeats(4)
console.log("check "+restaurant.checkAvailability(4));


const someObject = {}
const otherObject = someObject
console.log("same as reference object"+otherObject===otherObject);
console.log("same "+{}==={});

