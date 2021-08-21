import React from 'react';
import Timer from '../Timer'

function LongRest(props) {
    return (
        <Timer color="#ff8b3d" name="longrest" className="timer longrest" timer={900} radius={310} />
    );
}

export default LongRest;