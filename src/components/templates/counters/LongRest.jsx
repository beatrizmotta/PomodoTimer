import React from 'react';
import Timer from '../Timer'

function LongRest(props) {
    return (
        <Timer color="#ff8b3d" className="timer longrest" timer={900} radius={310} />
    );
}

export default LongRest;