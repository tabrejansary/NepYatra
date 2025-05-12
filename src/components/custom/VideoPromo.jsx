import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { PictureInPicture2 } from 'lucide-react';

const VideoPromo = () => {
  const [isPipActive, setIsPipActive] = useState(false);
  const videoRef = useRef(null); // No type annotation in JSX

  const togglePictureInPicture = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        setIsPipActive(false);
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture();
        setIsPipActive(true);
      } else {
        console.warn('Video element is not available or Picture-in-Picture not supported.');
      }
    } catch (error) {
      console.error('Picture-in-Picture failed:', error);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">See How NepYatra Works</h2>
            <p className="text-xl text-gray-600 mb-6">
              Watch our short demo to see how easy it is to plan your perfect trip with our AI-powered tools.
            </p>
            <Button
              onClick={togglePictureInPicture}
              className="flex items-center bg-[#f56551] hover:bg-[#e05544] px-4 py-2 rounded-md"
            >
              <PictureInPicture2 className="mr-2" />
              {isPipActive ? 'Exit Picture-in-Picture' : 'Watch in Picture-in-Picture'}
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Continue browsing while watching the demo video
            </p>
          </div>
          
          {/* Right Side Video */}
          <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white">
  <video
    ref={videoRef}
    autoPlay
    muted
    controls
    className="w-full aspect-video object-cover"
    poster="/asset/promoimg.png"
  >
    <source src="/asset/promovid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
