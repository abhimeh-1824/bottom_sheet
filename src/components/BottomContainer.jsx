// import all the required packages
import React from 'react'
// import al the components
import Button from './Button'

/**
 * @description this components show the  content on the inner of bottom sheet
 * @param {*} param0 
 * @returns 
 */
const BottomContainer = ({ height, setHeight }) => {
    // initialize all the required variables
    const HALF_OPEN = "50%";
    const FULL_OPEN = "0";
    const CLOSE = "97%"
    return (
        <div className="bottom-container" style={{ transform: `translateY(${height})` }}>
            <div className='indicter' onClick={() => setHeight(() => "0")}></div>
            <div className="buttons">
                <Button height={HALF_OPEN} setHeight={setHeight} title={'half-open'} />
                <Button height={FULL_OPEN} setHeight={setHeight} title={'full-open'} />
                <Button height={CLOSE} setHeight={setHeight} title={'close'} />
            </div>
        </div>
    )
}

export default BottomContainer