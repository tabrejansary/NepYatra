import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
  // Check if itinerary exists and is an array before mapping
  const itinerary = Array.isArray(trip?.tripData?.itinerary) 
    ? trip.tripData.itinerary 
    : [];

  if (itinerary.length === 0) {
    return (
      <div>
        <h2 className='font-bold text-xl'>Places to Visit</h2>
        <p>No itinerary planned yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className='font-bold text-xl'>Places to Visit</h2>
      <div>
        {itinerary.map((item, index) => (
          <div key={`day-${index}`} className='mt-5'>
            <h2 className='font-bold text-lg'>{item.day}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {Array.isArray(item.plan) && item.plan.map((place, placeIndex) => (
                <div key={`place-${index}-${placeIndex}`} className='my-2'>
                  <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit