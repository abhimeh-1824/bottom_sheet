// import all the required packages and hooks
import React, { useState } from 'react'
// import css file
import './BottomSheet.css'

// import all the components
import BottomContainer from './BottomContainer'
/**
 * @description in this component have a button which is use for hide and show bottom sheets  
 * @returns 
 */
const BottomSheet = () => {
    // initialize required state variables
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState("0")

    /**
     * @description this function handle bottom sheet like show and hide
     */
    const handleBottomSheet = (e) => {
        if (e.target === e.currentTarget) {
            setOpen((pre) => !pre)
            setHeight("0")
        }

    }
    return (
        <div className="component-container">
            <div className='sheet-handle'>
                <h1>Open Bottom sheet</h1>
                <button className='btn open-btn' onClick={(e) => handleBottomSheet(e)}>OPEN</button>
            </div>
            <div className={`bottom-sheet ${open ? 'open' : ''}`} onClick={(e) => handleBottomSheet(e)}>
                <BottomContainer height={height} setHeight={setHeight} />
            </div>
        </div>
    )
}

export default BottomSheet