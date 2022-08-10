const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey)=>{
    return journey.startLocation
  })

};


Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey)=>{
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeysByTransport = this.journeys.filter((journey) =>{
    if(journey.transport === transport){
      return true 
  } else {
    return false
  }
  })
  return journeysByTransport
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeyByMinDistance = this.journeys.filter((journey)=>{
    if (journey.distance > minDistance){
      return true
    } else{
      return false
    }
  })
  return journeyByMinDistance
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, journey)=>{
    return runningTotal += journey.distance
  }, 0)
  return total
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  let transportMode =  this.journeys.map((journey) => {
    return journey.transport
  })
  let uniqueTransport = new Set(transportMode)
  return Array.from(uniqueTransport)

};


module.exports = Traveller;
