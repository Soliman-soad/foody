import React from 'react';
import Showcase from './component/Showcase';
import Slider from './component/Slider';
import Story from './component/Story';

const LandingPage = () => {
    return (
        <div>
            <Slider/>
            <Showcase/>
            <Story/>
        </div>
    );
};

export default LandingPage;