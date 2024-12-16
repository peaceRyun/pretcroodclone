// components/Video.jsx
import React from 'react';

const Video = () => {
    return (
        <div className='absolute inset-0 w-full h-full'>
            <video className='w-full h-full object-cover' autoPlay muted loop playsInline>
                <source src='/images/pattern/home/sampleVideo2.mp4' type='video/mp4' />
            </video>
        </div>
    );
};

export default Video;
