import React from 'react';
import Timer from '../Timer'

function ShortRest(props) {
    return (
        <Timer color="#FF5B3D" className="timer shortrest" timer={300} radius={310} />
    );
}

export default ShortRest;