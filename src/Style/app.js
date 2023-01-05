import './style.css';
import style from './custom.module.css'

import React from 'react';

function Style() {
    return(
    <div>
        <h4 className='primary'>Style using class in React js</h4>
        <h4 style={{color:'red',backgroundColor:"black"}}>Style using inline css in React js</h4>
        <h4 className={style.success}>Style using modular css in React js</h4>
    </div>
    )
}

export default Style;