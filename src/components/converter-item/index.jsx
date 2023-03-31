import React from 'react';
import './styles.scss';

const ConverterItem = ({data, currentSelect, nextSelect,inputState, handleChangeSelect, handleChangeInput}) => {
    return (
        <div className='converter__item'>
            <input disabled={!currentSelect.valcode || !nextSelect.valcode} type="number" placeholder={!currentSelect.valcode || !nextSelect.valcode ? 'select currency' : 100} value={inputState} onChange={({target})=> handleChangeInput(target)}/>
            <select name="select" value={currentSelect.valcode} onChange={({target})=> handleChangeSelect(target)}>
                <option value="" disabled selected>Select currency</option>
                <option value={"UAH"}>Гривня</option>
                {data.map(currency =><option key={currency.r030} value={currency.cc}>{currency.txt}</option> )}
            </select>
        </div>
    );
};

export default ConverterItem;