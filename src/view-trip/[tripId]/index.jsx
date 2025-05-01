import { db } from '@/service/firebaseConfig';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId]);

    const GetTripData = async () => {
        try {
            const docRef = doc(db, 'AITrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log('Document: ', docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log('No such document');
                toast('No trip found');
            }
        } catch (error) {
            console.error('Error fetching trip: ', error);
            toast('Failed to fetch trip data');
        }
    };

    const deleteTrip = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this trip?');
        if (confirmDelete) {
            try {
                const docRef = doc(db, 'AITrips', tripId);
                await deleteDoc(docRef);
                toast('Trip deleted successfully');
                navigate('/my-trips');
            } catch (error) {
                console.error('Error deleting trip: ', error);
                toast('Failed to delete trip');
            }
        }
    };

    const shareTrip = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Trip to ${trip.name || 'Unknown'}`,
                    text: `Check out this amazing trip to ${trip.name || 'a great place'}!`,
                    url: window.location.href,
                });
                toast('Trip shared successfully');
            } catch (error) {
                console.error('Error sharing the trip:', error);
                toast('Failed to share trip');
            }
        } else {
            toast('Sharing is not supported on this device/browser');
        }
    };

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Information Section */}
            <InfoSection trip={trip} />

            {/* Recommended Hotels */}
            <Hotels trip={trip} />

            {/* Daily Plan */}
            <PlacesToVisit trip={trip} />

            {/* Footer */}
            <Footer trip={trip} />

            {/* Buttons */}
            <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between">
                {/* Delete Trip */}
                <button
                    onClick={deleteTrip}
                    className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded mb-4 md:mb-0"
                >
                    Delete Trip
                </button>

                {/* Share Trip */}
                <button
                    onClick={shareTrip}
                    className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded"
                >
                    Share Trip
                </button>
            </div>
        </div>
    );
}

export default Viewtrip;
