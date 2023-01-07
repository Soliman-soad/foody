import React from 'react';
import Event from './component/Event';
import Showcase from './component/Showcase';
import Slider from './component/Slider';
import Story from './component/Story';

const LandingPage = () => {
    return (
        <div>
            <Slider/>
            <Showcase/>
            <Story/>
            <Event/>
        </div>
    );
};

export default LandingPage;