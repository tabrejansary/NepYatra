import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'

function InfoSection({ trip }) {
    const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (trip?.userSelection?.location?.label) {
            GetPlacePhoto();
        }
    }, [trip])

    const GetPlacePhoto = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = {
                textQuery: trip.userSelection.location.label
            }
            const response = await GetPlaceDetails(data);
            
            // Safely access photos
            const photos = response?.data?.places?.[0]?.photos;
            
            if (photos?.length > 0) {
                // Use first available photo instead of hardcoded index [3]
                const photo = photos[0];
                const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photo.name);
                setPhotoUrl(PhotoUrl);
            } else {
                setError('No photos available for this location');
            }
        } catch (err) {
            console.error('Error fetching place photo:', err);
            setError('Failed to load location image');
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div>
            <div className="relative">
                {loading && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-xl">
                        <p>Loading image...</p>
                    </div>
                )}
                <img 
                    src={photoUrl} 
                    alt={trip?.userSelection?.location?.label || 'Travel destination'} 
                    className='h-[340px] w-full object-cover rounded-xl'
                    onError={(e) => {
                        e.target.src = '/placeholder.jpg';
                    }}
                />
                {error && (
                    <p className="text-sm text-red-500 mt-2">{error}</p>
                )}
            </div>
            <div>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-5 flex-wrap'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                            📅 {trip?.userSelection?.noOfDays || 'N/A'} Day(s)
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                            💰 {trip?.userSelection?.budget || 'N/A'} Budget
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                            👥 No. of traveler/s: {trip?.userSelection?.traveler || 'N/A'}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection