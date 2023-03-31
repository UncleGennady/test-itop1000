import React from 'react';

import './styles.scss'
const Converter = () => {
    return (
        <div className='converter'>
            <div className='converter__item'>
                <input type="number" placeholder='100'/>
                <select name="select" >
                    <option value="USD">Австралійський долар</option>
                    <option value="EUR" >Австралійський долар</option>
                    <option value="UAH">Австралійський</option>
                </select>
            </div>
            <div className='converter__item'>
                <input type="number" placeholder='100'/>
                <select name="select" >
                    <option value="USD">Австралійський долар</option>
                    <option value="EUR" >eфівфів</option>
                    <option value="UAH">Австралійський долар</option>
                </select>
            </div>
        </div>
    );
};

export default Converter;