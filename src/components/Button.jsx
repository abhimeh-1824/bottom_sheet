import React from 'react'

/**
 * @description this component return button and set the the translateY hight 
 * @param {*} param0 
 * @returns 
 */
const Button = ({ setHeight, height, title }) => {
    return (
        <button className='btn' onClick={() => setHeight(height)}>{title}</button>
    )
}

export default Button