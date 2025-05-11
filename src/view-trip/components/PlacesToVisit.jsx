import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) { 
    console.log(trip);
    
  return (
    <div>
        <h2 className='font-bold text-xl'>Places to Visit</h2>
        <div>
            {Object.values(trip?.tripData?.itinerary || {}).map((item, index) => {
                // Safely handle the plan array
                const planItems = Array.isArray(item?.plan) ? item.plan : []
                
                return (
                    <div className='mt-5' key={index}>
                        <h2 className='font-bold text-lg'>{item.day || 'Unnamed Day'}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {planItems.map((place, placeIndex) => (
                                <div className='my-2' key={placeIndex}>
                                    <h2 className='font-medium text-sm text-orange-600'>{place.time || ''}</h2>
                                    <PlaceCardItem place={place}/>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlacesToVisit