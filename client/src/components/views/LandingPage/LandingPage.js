import React from 'react'
import ImageBanner from './Sections/ImageBanner'
import HotCards from './Sections/HotCards';
import ReviewCards from './Sections/ReviewCards';

function LandingPage() {


    return (
        <div>
            <div>
                <ImageBanner /> 
            </div>
            <br/>
                <HotCards />
            <br/><br/>
                <ReviewCards />
        </div>
    )
}

export default LandingPage
