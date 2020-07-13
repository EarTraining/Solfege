import React from 'react'

export default function CounterCorrectComponent ({counterCorrectProp, counterTotalProp}) {
    return (
        <div>
            Score: {counterCorrectProp} / {counterTotalProp}
        </div>
    );
}
